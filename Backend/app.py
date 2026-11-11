
from flask import Flask, request, jsonify
from flask_cors import CORS
import joblib
import pandas as pd
import os

app = Flask(__name__)
CORS(app)

BASE_DIR = os.path.dirname(os.path.abspath(__file__))
MODEL_PATH = os.path.join(BASE_DIR, "transport_delay_model.joblib")

model_bundle = joblib.load(MODEL_PATH)
model = model_bundle["model"]
features = model_bundle["features"]


@app.route("/", methods=["GET"])
def home():
    return jsonify({
        "message": "Public Transport Delay Prediction API is running!"
    })


@app.route("/health", methods=["GET"])
def health():
    return jsonify({"status": "healthy"})


@app.route("/predict", methods=["POST"])
def predict():
    try:
        data = request.get_json(silent=True)

        if not isinstance(data, dict):
            return jsonify({"error": "Invalid JSON input"}), 400

        missing_features = [
            feature for feature in features if feature not in data
        ]

        if missing_features:
            return jsonify({
                "error": "Missing input features",
                "missing_features": missing_features
            }), 400

        input_data = pd.DataFrame(
            [[data[feature] for feature in features]],
            columns=features
        )

        prediction = float(model.predict(input_data)[0])

        return jsonify({
            "predicted_delay_min": round(prediction, 2),
            "status": "Delayed" if prediction > 5 else "On Time"
        })

    except Exception as e:
        return jsonify({"error": str(e)}), 400


if __name__ == "__main__":
    port = int(os.environ.get("PORT", 5000))
    app.run(host="0.0.0.0", port=port, debug=False)
