
import { useState } from "react";
import "./App.css";

const initialValues = {
  transport_type: "Bus",
  route_id: "R101",
  origin_station: "Station A",
  destination_station: "Station B",
  weather_condition: "Clear",
  temperature_C: 25,
  humidity_percent: 60,
  wind_speed_kmh: 10,
  precipitation_mm: 0,
  event_type: "None",
  event_attendance_est: 0,
  traffic_congestion_index: 5,
  holiday: 0,
  peak_hour: 0,
  weekday: "Monday",
  season: "Summer",
  departure_hour: 10,
  departure_day: 10,
  is_weekend: 0,
  rush_hour_category: "Off-Peak",
  scheduled_duration_min: 30,
  calculated_duration: 30
};

const fields = [
  { name: "transport_type", label: "Transport Type", type: "select", options: ["Bus", "Metro", "Train", "Tram"] },
  { name: "route_id", label: "Route ID", type: "text" },
  { name: "origin_station", label: "Origin Station", type: "text" },
  { name: "destination_station", label: "Destination Station", type: "text" },
  { name: "weather_condition", label: "Weather Condition", type: "select", options: ["Clear", "Cloudy", "Rainy", "Snowy", "Foggy", "Windy"] },
  { name: "temperature_C", label: "Temperature (°C)", type: "number" },
  { name: "humidity_percent", label: "Humidity (%)", type: "number" },
  { name: "wind_speed_kmh", label: "Wind Speed (km/h)", type: "number" },
  { name: "precipitation_mm", label: "Precipitation (mm)", type: "number" },
  { name: "event_type", label: "Event Type", type: "select", options: ["None", "Concert", "Sports", "Festival", "Public Event"] },
  { name: "event_attendance_est", label: "Estimated Event Attendance", type: "number" },
  { name: "traffic_congestion_index", label: "Traffic Congestion Index", type: "number" },
  { name: "holiday", label: "Holiday", type: "select", options: [{ label: "No", value: 0 }, { label: "Yes", value: 1 }] },
  { name: "peak_hour", label: "Peak Hour", type: "select", options: [{ label: "No", value: 0 }, { label: "Yes", value: 1 }] },
  { name: "weekday", label: "Weekday", type: "select", options: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"] },
  { name: "season", label: "Season", type: "select", options: ["Spring", "Summer", "Autumn", "Winter"] },
  { name: "departure_hour", label: "Departure Hour (0–23)", type: "number" },
  { name: "departure_day", label: "Departure Day", type: "number" },
  { name: "is_weekend", label: "Weekend", type: "select", options: [{ label: "No", value: 0 }, { label: "Yes", value: 1 }] },
  { name: "rush_hour_category", label: "Rush Hour Category", type: "select", options: ["Off-Peak", "Morning", "Evening"] },
  { name: "scheduled_duration_min", label: "Scheduled Duration (minutes)", type: "number" }
];

const numericFields = [
  "temperature_C",
  "humidity_percent",
  "wind_speed_kmh",
  "precipitation_mm",
  "event_attendance_est",
  "traffic_congestion_index",
  "holiday",
  "peak_hour",
  "weekday",
  "departure_hour",
  "departure_day",
  "is_weekend",
  "scheduled_duration_min",
  "calculated_duration"
];

const weekdayMap = {
  Monday: 0,
  Tuesday: 1,
  Wednesday: 2,
  Thursday: 3,
  Friday: 4,
  Saturday: 5,
  Sunday: 6
};

function App() {
  const [formData, setFormData] = useState(initialValues);
  const [result, setResult] = useState(null);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormData((previous) => ({
      ...previous,
      [name]: value
    }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    setLoading(true);
    setError("");
    setResult(null);

    try {
      const payload = { ...formData };

      payload.weekday = weekdayMap[payload.weekday];
      payload.calculated_duration = Number(payload.scheduled_duration_min);

      numericFields.forEach((field) => {
        payload[field] = Number(payload[field]);
      });

      const response = await fetch("http://127.0.0.1:5000/predict", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(payload)
      });

      const data = await response.json();

      if (!response.ok) {
        const missing = data.missing_features
          ? ` Missing features: ${data.missing_features.join(", ")}`
          : "";

        throw new Error((data.error || "Prediction request failed.") + missing);
      }

      setResult(data);
    } catch (err) {
      setError(err.message || "Unable to connect to the prediction server.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="app-container">
      <header className="topbar">
        <a className="brand" href="#home">
          <span className="brand-icon">T</span>
          <span>Transit<span className="brand-highlight">IQ</span></span>
        </a>

        <div className="topbar-right">
          <span className="live-dot"></span>
          ML PREDICTION SYSTEM
        </div>
      </header>

      <main className="main-content" id="home">
        <section className="hero">
          <div className="hero-copy">
            <div className="hero-tag">
              <span className="tag-dot"></span>
              INTELLIGENT TRANSPORT ANALYTICS
            </div>

            <h1>
              Predict delays.<br />
              <span>Plan smarter journeys.</span>
            </h1>

            <p>
              An intelligent machine learning system that estimates
              public transport arrival delays using journey, weather,
              traffic and event information.
            </p>

            <div className="hero-points">
              <span>✦ Machine Learning</span>
              <span>✦ Weather Insights</span>
              <span>✦ Smart Mobility</span>
            </div>
          </div>

          <div className="hero-visual">
            <div className="visual-glow"></div>
            <div className="visual-card">
              <div className="visual-card-top">
                <span>TRANSIT ANALYTICS</span>
                <span className="visual-status">● ACTIVE</span>
              </div>

              <div className="route-visual">
                <div className="route-line">
                  <span className="route-stop start-stop"></span>
                  <span className="route-stop middle-stop"></span>
                  <span className="route-stop end-stop"></span>
                </div>
                <div className="route-labels">
                  <span>Origin</span>
                  <span>Destination</span>
                </div>
              </div>

              <div className="visual-metric">
                <div>
                  <span>MODEL</span>
                  <strong>Random Forest</strong>
                </div>
                <div>
                  <span>OUTPUT</span>
                  <strong>Delay Estimate</strong>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="form-section">
          <div className="section-heading">
            <div>
              <div className="section-eyebrow">PREDICTION INPUT</div>
              <h2>Journey Information</h2>
              <p>Enter the journey details to estimate its arrival delay.</p>
            </div>

            <div className="feature-counter">
              <strong>21</strong>
              <span>INPUT FEATURES</span>
            </div>
          </div>

          <form onSubmit={handleSubmit}>
            <div className="form-grid">
              {fields.map((field) => (
                <div className="form-group" key={field.name}>
                  <label htmlFor={field.name}>{field.label}</label>

                  {field.type === "select" ? (
                    <select
                      id={field.name}
                      name={field.name}
                      value={formData[field.name]}
                      onChange={handleChange}
                    >
                      {field.options.map((option) => {
                        const isObject = typeof option === "object";

                        return (
                          <option
                            key={isObject ? option.value : option}
                            value={isObject ? option.value : option}
                          >
                            {isObject ? option.label : option}
                          </option>
                        );
                      })}
                    </select>
                  ) : (
                    <input
                      id={field.name}
                      name={field.name}
                      type={field.type}
                      value={formData[field.name]}
                      onChange={handleChange}
                      required
                    />
                  )}
                </div>
              ))}
            </div>

            <div className="form-footer">
              <p>
                <span className="info-icon">i</span>
                All fields are required for the prediction.
              </p>

              <button
                className="predict-button"
                type="submit"
                disabled={loading}
              >
                {loading ? (
                  <>
                    <span className="spinner"></span>
                    Generating Prediction...
                  </>
                ) : (
                  <>Predict Transport Delay <span>→</span></>
                )}
              </button>
            </div>
          </form>
        </section>

        {error && (
          <section className="result-card error-card">
            <div className="result-eyebrow">PREDICTION ERROR</div>
            <h2>Something went wrong</h2>
            <p>{error}</p>
          </section>
        )}

        {result && (
          <section className="result-card">
            <div className="result-heading">
              <div>
                <div className="result-eyebrow">PREDICTION RESULT</div>
                <h2>Your Estimated Arrival Delay</h2>
              </div>
              <div className="result-icon">↗</div>
            </div>

            <div className="result-main">
              <div className="prediction-value">
                {Number(result.predicted_delay_min).toFixed(1)}
                <span> min</span>
              </div>

              <div className="result-status">
                <span className="status-dot"></span>
                {result.status}
              </div>
            </div>

            <div className="result-bottom">
              <span>MODEL: RANDOM FOREST REGRESSOR</span>
              <span>ESTIMATED DELAY IN MINUTES</span>
            </div>

            <p className="result-note">
              This is a model-based estimate for educational purposes.
              It is not a real-time transport service prediction.
            </p>
          </section>
        )}
      </main>

      <footer className="footer">
        <div className="footer-brand">Transit<span>IQ</span></div>
        <p>Public Transport Delay Prediction · Machine Learning Project</p>
        <span>SMARTER MOBILITY THROUGH DATA</span>
      </footer>
    </div>
  );
}

export default App;
