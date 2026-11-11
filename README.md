# 🚆 TransitIQ — Public Transport Delay Prediction

<div align="center">

<img src="https://readme-typing-svg.demolab.com?font=Fira+Code&weight=700&size=27&duration=3000&pause=900&color=00D9FF&center=true&vCenter=true&width=750&lines=Predict+Smarter.+Travel+Better.;Machine+Learning+Meets+Public+Transport.;Built+with+React+%2B+Flask+%2B+Python." alt="Typing SVG" />

<br/>

**An End-to-End Machine Learning Web Application**

Predict estimated public transport arrival delays using machine learning and an interactive web interface.

<br/>

<a href="https://vedanthpatil1706.github.io/public-transport-delay-prediction/">
  <img src="https://img.shields.io/badge/🚀_LIVE_DEMO-00D9FF?style=for-the-badge&logoColor=white" alt="Live Demo"/>
</a>
<a href="https://github.com/vedanthpatil1706/public-transport-delay-prediction">
  <img src="https://img.shields.io/badge/GitHub-Repository-181717?style=for-the-badge&logo=github" alt="GitHub"/>
</a>

<br/><br/>

![Python](https://img.shields.io/badge/Python-3776AB?style=flat-square&logo=python&logoColor=white)
![React](https://img.shields.io/badge/React-20232A?style=flat-square&logo=react&logoColor=61DAFB)
![Vite](https://img.shields.io/badge/Vite-646CFF?style=flat-square&logo=vite&logoColor=white)
![Flask](https://img.shields.io/badge/Flask-000000?style=flat-square&logo=flask&logoColor=white)
![Scikit Learn](https://img.shields.io/badge/Scikit--Learn-F7931E?style=flat-square&logo=scikitlearn&logoColor=white)
![Render](https://img.shields.io/badge/Backend-Render-46E3B7?style=flat-square&logo=render&logoColor=black)

</div>

---

## 🌟 About The Project

**TransitIQ** is a machine learning-powered web application designed to estimate public transport arrival delays.

The project combines data science, machine learning, backend API development, and frontend engineering into one deployed application.

Users can enter transport, schedule, weather, and event-related information through an interactive dashboard and receive an estimated arrival delay.

> 💡 From data preprocessing to a live web application — TransitIQ demonstrates an end-to-end machine learning workflow.

## ✨ Key Features

- 🚆 **Delay Prediction:** Estimates arrival delays using a trained Random Forest regression model.
- 🌦️ **Multiple Input Features:** Uses transport, schedule, weather, and event-related information.
- ⚡ **Interactive Dashboard:** Clean and responsive React-based interface.
- 🧠 **Machine Learning Integration:** Connects a serialized Scikit-learn model to a Flask API.
- 🔗 **REST API:** Handles prediction requests and returns structured JSON responses.
- ☁️ **Cloud Deployment:** Frontend hosted on GitHub Pages and backend deployed on Render.
- 📊 **Instant Results:** Displays estimated delay and an On Time / Delayed status.

## 🖥️ Live Application

<div align="center">

### Experience TransitIQ in action!

<a href="https://vedanthpatil1706.github.io/public-transport-delay-prediction/">
  <img src="https://img.shields.io/badge/OPEN_TRANSITIQ-Explore_the_Live_Application-00D9FF?style=for-the-badge" />
</a>

</div>

## 🏗️ System Architecture

```mermaid
flowchart TD
    A["👤 User"] --> B["⚛️ React + Vite Frontend"]
    B --> C["📡 Flask REST API"]
    C --> D["🧹 Input Validation & Processing"]
    D --> E["🧠 Random Forest Model"]
    E --> F["📈 Delay Prediction"]
    F --> G["📦 JSON Response"]
    G --> B
    B --> H["🚆 Prediction Dashboard"]

    style A fill:#172554,stroke:#60a5fa,color:#fff
    style B fill:#312e81,stroke:#818cf8,color:#fff
    style C fill:#064e3b,stroke:#34d399,color:#fff
    style E fill:#713f12,stroke:#fbbf24,color:#fff
    style H fill:#164e63,stroke:#22d3ee,color:#fff
```

## 🧰 Tech Stack

| Category | Technologies |
|---|---|
| Frontend | React.js, Vite, CSS |
| Backend | Python, Flask, Flask-CORS |
| Machine Learning | Scikit-learn, Random Forest Regressor |
| Data Processing | Pandas, NumPy |
| Model Serialization | Joblib |
| API Communication | REST API, JSON |
| Frontend Deployment | GitHub Pages |
| Backend Deployment | Render |
| Version Control | Git, GitHub |

## 🔬 Machine Learning Workflow

The project follows a structured machine learning pipeline:

1. **Data Collection** — Used a public transport delays dataset.
2. **Data Preprocessing** — Prepared the dataset for machine learning.
3. **Exploratory Data Analysis** — Studied feature distributions and relationships.
4. **Feature Engineering** — Created additional time-related features.
5. **Model Training** — Trained and compared multiple regression algorithms.
6. **Model Evaluation** — Evaluated models using MAE, RMSE, and R².
7. **Model Deployment** — Saved the trained model using Joblib and integrated it with Flask.

### 📊 Model Evaluation

The Random Forest model was evaluated against a simple baseline.

| Model | MAE | RMSE | R² |
|---|---:|---:|---:|
| Baseline | 7.7030 | 9.1901 | -0.0017 |
| Random Forest | 7.7585 | 9.2298 | -0.0104 |

**Important:** The dataset showed limited predictive signal, and the Random Forest model did not outperform the baseline. This project is an educational demonstration of an end-to-end ML deployment workflow, not a validated real-world transport forecasting service.

## 📂 Project Structure

```text
public-transport-delay-prediction/
│
├── Backend/
│   ├── app.py
│   ├── requirements.txt
│   └── transport_delay_model.joblib
│
├── public/
│   ├── favicon.svg
│   └── icons.svg
│
├── src/
│   ├── App.jsx
│   ├── App.css
│   ├── index.css
│   └── main.jsx
│
├── .github/
│   └── workflows/
│       └── deploy.yml
│
├── index.html
├── package.json
├── package-lock.json
├── vite.config.js
└── README.md
```

## ⚙️ Run Locally

Want to explore the project on your machine?

### 1. Clone the repository

```bash
git clone https://github.com/vedanthpatil1706/public-transport-delay-prediction.git
```

```bash
cd public-transport-delay-prediction
```

### 2. Start the frontend

```bash
npm install
npm run dev
```

### 3. Start the backend

Open another terminal:

```bash
cd Backend
```

```bash
pip install -r requirements.txt
```

```bash
python app.py
```

The backend runs locally at:

```text
http://127.0.0.1:5000
```

The frontend's API URL must point to your local backend when running locally.

## ☁️ Deployment

| Component | Platform |
|---|---|
| Frontend | GitHub Pages |
| Backend API | Render |
| Source Code | GitHub |

## 🎯 What I Learned

Building TransitIQ helped me explore:

- End-to-end machine learning application development.
- Integrating a trained ML model with a Flask REST API.
- Connecting a React frontend with a cloud-hosted backend.
- Deploying applications using GitHub Pages and Render.
- Handling API requests, JSON responses, and model predictions.
- Understanding model evaluation and the importance of honest performance reporting.

## 🔮 Future Improvements

- 📡 Integration with real-time public transport APIs.
- 🌧️ More comprehensive weather and event data.
- 🧪 Improved feature engineering and model experimentation.
- 📍 Route-specific delay estimation.
- 📊 Interactive analytics and historical delay visualizations.

## 👨‍💻 Developer

<div align="center">

### Vedant Patil

**Computer Science & Engineering | AI & Edge Computing**

Building at the intersection of Machine Learning, AI, and Software Development.

<a href="https://github.com/vedanthpatil1706">
  <img src="https://img.shields.io/badge/GitHub-vedanthpatil1706-181717?style=for-the-badge&logo=github" />
</a>

<br/><br/>

⭐ If you find this project interesting, consider giving it a star!

**Made with ❤️, Python, React & curiosity.**

</div>

---

<div align="center">

<img src="https://capsule-render.vercel.app/api?type=waving&color=0:00D9FF,100:312E81&height=120&section=footer" width="100%" />

</div>
