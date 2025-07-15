

from tabpy.tabpy_tools.client import Client
import joblib
import numpy as np
import os
import pandas as pd
from sklearn.preprocessing import StandardScaler


model_paths = {
    "Linear Regression": "linear_regression_model.pkl",
    "Decision Tree": "decision_tree_model.pkl",
    "Random Forest": "random_forest_model.pkl",
    "Gradient Boosting": "gradient_boosting_model.pkl",
    "KNN": "knn_model.pkl"
}

df = pd.read_csv("earthquake_dataset.csv")
df = df[df["Year"] >= 1960]
df = df[["Magnitude", "Depth_km", "Population_Density", "Urbanization_Rate", "Deaths"]].dropna()


X = df[["Magnitude", "Depth_km", "Population_Density", "Urbanization_Rate"]]
scaler = StandardScaler().fit(X)
joblib.dump(scaler, "scaler.pkl")
correlations = df.corr(numeric_only=True)["Deaths"].drop("Deaths").abs().values  


def predict_deaths_with_model(model_names, mag_list, depth_list, pop_list, urban_list):
    predictions = []

    for i in range(len(model_names)):
        name = model_names[i]
        model_file = model_paths.get(name)

        if not model_file or not os.path.exists(model_file):
            predictions.append(-1)
            continue


        model = joblib.load(model_file)


        features = np.array([[mag_list[i], depth_list[i], pop_list[i], urban_list[i]]])
        features_scaled = scaler.transform(features)
        features_weighted = features_scaled * correlations

        pred = model.predict(features_weighted)[0]
        predictions.append(float(pred))

    return predictions

client = Client("http://localhost:9004/")
client.deploy(
    "predict_deaths_with_model",
    predict_deaths_with_model,
    "Predict earthquake deaths using correlation-weighted input features and ML models.",
    override=True
)

print("Prediction function deployed to TabPy.")
