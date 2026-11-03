# Public Transport Delay Prediction Using Weather & Events

## Project Overview
This project explores public transport arrival delays using weather conditions, traffic congestion, event information, transport types and scheduling data.

The objective is to analyse the available data, identify patterns and build machine learning regression models to predict arrival delays.

## Dataset
- Total records: 2,000
- Original features: 24
- Target variable: `actual_arrival_delay_min`
- Data source: [Kaggle – Public Transport Delays with Weather and Events](https://www.kaggle.com/datasets/khushikyad001/public-transport-delays-with-weather-and-events)

## Technologies Used
- Python
- Pandas and NumPy
- Matplotlib
- Scikit-learn
- XGBoost
- Jupyter Notebook

## Project Workflow
1. Data loading and understanding
2. Data cleaning and preprocessing
3. Exploratory Data Analysis (EDA)
4. Feature engineering
5. Train-test splitting
6. Regression model development
7. Model evaluation and comparison

## Machine Learning Models
- Linear Regression
- Random Forest Regressor
- XGBoost Regressor
- Gradient Boosting Regressor
- Mean Baseline

## Model Evaluation

The models were evaluated using Mean Absolute Error (MAE).

| Model | MAE |
|---|---:|
| Mean Baseline | 8.212 |
| Random Forest | 8.237 |
| XGBoost | 8.263 |
| Gradient Boosting | 8.314 |
| Linear Regression | 8.418 |

The Mean Baseline achieved the lowest MAE. None of the trained machine learning models outperformed it.

## Key Findings
- The available features showed weak predictive relationships with arrival delays.
- Numerical correlations with the target were generally close to zero.
- The trained models did not outperform the baseline.
- The results highlight the importance of data quality and feature relevance in machine learning.

## Conclusion
This project demonstrates the end-to-end data science workflow, from data preprocessing and exploratory analysis to feature engineering and model evaluation.

Although the models did not achieve better performance than the baseline, the investigation helped identify limitations in the available dataset and areas for future improvement.

## Future Improvements
- Explore larger real-world transport datasets.
- Include historical delay information.
- Incorporate route distance and vehicle information.
- Investigate real-time traffic and weather data.
- Improve feature selection and model performance.

## Author
Vedant Patil

B.Tech – Computer Science and Engineering (AI & Edge Computing)
