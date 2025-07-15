
import pandas as pd
import numpy as np
import joblib

from sklearn.model_selection import train_test_split
from sklearn.linear_model import LinearRegression
from sklearn.tree import DecisionTreeRegressor
from sklearn.ensemble import RandomForestRegressor, GradientBoostingRegressor
from sklearn.neighbors import KNeighborsRegressor
from sklearn.preprocessing import StandardScaler
from sklearn.metrics import mean_absolute_error, mean_squared_error, r2_score


df = pd.read_csv("earthquake_dataset.csv")

df = df[df["Year"] >= 1960]

df = df[["Magnitude", "Depth_km", "Population_Density", "Urbanization_Rate", "Deaths"]].dropna()

X = df[["Magnitude", "Depth_km", "Population_Density", "Urbanization_Rate"]]
y = df["Deaths"]

scaler = StandardScaler()
X_scaled = pd.DataFrame(scaler.fit_transform(X), columns=X.columns)

correlations = df.corr(numeric_only=True)["Deaths"].drop("Deaths").abs()

X_weighted = X_scaled.copy()
for col in X_weighted.columns:
    X_weighted[col] *= correlations[col]

X_train, X_test, y_train, y_test = train_test_split(X_weighted, y, test_size=0.2, random_state=42)

models = {
    "Linear Regression": LinearRegression(),
    "Decision Tree": DecisionTreeRegressor(random_state=42),
    "Random Forest": RandomForestRegressor(random_state=42),
    "Gradient Boosting": GradientBoostingRegressor(random_state=42),
    "KNN": KNeighborsRegressor(n_neighbors=5)
}

results = []

for name, model in models.items():
    model.fit(X_train, y_train)
    preds = model.predict(X_test)

    mae = mean_absolute_error(y_test, preds)
    rmse = np.sqrt(mean_squared_error(y_test, preds))
    r2 = r2_score(y_test, preds)

    results.append({"Model": name, "MAE": mae, "RMSE": rmse, "R2 Score": r2})

    joblib.dump(model, f"{name.replace(' ', '_').lower()}_model.pkl")

pd.DataFrame(results).to_csv("models_performance.csv", index=False)
print("All models trained and saved with correlation-weighted features.")
print("Performance metrics saved to 'models_performance.csv'")
