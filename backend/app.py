from flask import Flask, request, jsonify
import numpy as np
import joblib
import pandas as pd
from sklearn.preprocessing import StandardScaler
import os

app = Flask(__name__)

# Load saved scaler and correlation weights
scaler = joblib.load("scaler.pkl")

# Load dataset just to get correlation weights (once)
df = pd.read_csv("earthquake_dataset.csv")
df = df[df["Year"] >= 1960]
df = df[["Magnitude", "Depth_km", "Population_Density", "Urbanization_Rate", "Deaths"]].dropna()
correlations = df.corr(numeric_only=True)["Deaths"].drop("Deaths").abs().values  # shape (4,)

# Map model names to files
model_paths = {
    "Linear Regression": "linear_regression_model.pkl",
    "Decision Tree": "decision_tree_model.pkl",
    "Random Forest": "random_forest_model.pkl",
    "Gradient Boosting": "gradient_boosting_model.pkl",
    "KNN": "knn_model.pkl"
}

@app.route("/predict", methods=["POST"])
def predict():
    try:
        data = request.get_json()
        model_name = data["model"]
        magnitude = float(data["magnitude"])
        depth = float(data["depth"])
        pop_density = float(data["population_density"])
        urban_rate = float(data["urbanization_rate"])

        # Check model existence
        if model_name not in model_paths or not os.path.exists(model_paths[model_name]):
            return jsonify({"error": f"Model '{model_name}' not found"}), 404

        model = joblib.load(model_paths[model_name])

        features = np.array([[magnitude, depth, pop_density, urban_rate]])
        features_scaled = scaler.transform(features)
        features_weighted = features_scaled * correlations

        prediction = model.predict(features_weighted)[0]
        return jsonify({"predicted_deaths": float(prediction)})

    except Exception as e:
        return jsonify({"error": str(e)}), 400

if __name__ == "__main__":
    app.run(debug=True)
