import React, { useEffect, useState } from "react";

function Predict() {
  const [input, setInput] = useState({
    model: "Random Forest",
    magnitude: "",
    depth: "",
    population_density: "",
    urbanization_rate: "",
  });

  const [prediction, setPrediction] = useState(null);

  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://public.tableau.com/javascripts/api/viz_v1.js";
    script.async = true;

    const vizContainer = document.getElementById("tableauVizContainer");
    if (vizContainer) {
      vizContainer.appendChild(script);
    }
  }, []);

  const handleChange = (e) => {
    setInput({ ...input, [e.target.name]: e.target.value });
  };

  const handlePredict = async () => {
    const res = await fetch("http://localhost:5000/predict", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(input),
    });

    const result = await res.json();
    setPrediction(result.predicted_deaths);
  };

  return (
    <div style={{ minHeight: "100vh", backgroundColor: "#fef2f2", padding: "2rem" }}>
      <h2 style={{ textAlign: "center", color: "#7f1d1d", fontSize: "2rem", marginBottom: "2rem" }}>
        Earthquake Prediction & Model Comparison
      </h2>

      <div style={{ display: "flex", gap: "2rem", justifyContent: "center" }}>
        {/* Tableau Dashboard */}
        <div
          style={{
            width: "30%",
            minWidth: "320px",
            backgroundColor: "#fdecea",
            border: "1px solid #fca5a5",
            borderRadius: "10px",
            padding: "1rem",
            textAlign: "center",
          }}
        >
          <div
            className="tableauPlaceholder"
            id="tableauVizContainer"
            style={{ width: "100%", height: "700px", position: "relative" }}
          >
            <noscript>
              <a href="#">
                <img
                  alt="Model Comparison Dashboard"
                  src="https://public.tableau.com/static/images/Mo/ModelComparisononEarthquakeData/Dashboard1/1_rss.png"
                  style={{ border: "none", width: "100%" }}
                />
              </a>
            </noscript>
            <object className="tableauViz" style={{ width: "100%", height: "100%" }}>
              <param name="host_url" value="https%3A%2F%2Fpublic.tableau.com%2F" />
              <param name="embed_code_version" value="3" />
              <param name="site_root" value="" />
              <param name="name" value="ModelComparisononEarthquakeData/Dashboard1" />
              <param name="tabs" value="no" />
              <param name="toolbar" value="yes" />
              <param name="static_image" value="https://public.tableau.com/static/images/Mo/ModelComparisononEarthquakeData/Dashboard1/1.png" />
              <param name="animate_transition" value="yes" />
              <param name="display_static_image" value="yes" />
              <param name="display_spinner" value="yes" />
              <param name="display_overlay" value="yes" />
              <param name="display_count" value="yes" />
              <param name="language" value="en-US" />
              <param name="filter" value="publish=yes" />
            </object>
          </div>
        </div>

        {/* Right: Prediction Form */}
        <div
          style={{
            width: "60%",
            padding: "1rem",
            backgroundColor: "#fff5f5",
            borderRadius: "12px",
            border: "1px solid #b91c1c",
          }}
        >
          <h3>Enter Earthquake Parameters</h3>

          <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
            <select name="model" value={input.model} onChange={handleChange}>
              <option>Linear Regression</option>
              <option>Decision Tree</option>
              <option>Random Forest</option>
              <option>Gradient Boosting</option>
              <option>KNN</option>
            </select>

            <input
              type="number"
              placeholder="Magnitude"
              name="magnitude"
              value={input.magnitude}
              onChange={handleChange}
            />
            <input
              type="number"
              placeholder="Depth (km)"
              name="depth"
              value={input.depth}
              onChange={handleChange}
            />
            <input
              type="number"
              placeholder="Population Density"
              name="population_density"
              value={input.population_density}
              onChange={handleChange}
            />
            <input
              type="number"
              placeholder="Urbanization Rate (%)"
              name="urbanization_rate"
              value={input.urbanization_rate}
              onChange={handleChange}
            />

            <button onClick={handlePredict} style={{ backgroundColor: "#dc2626", color: "white", padding: "0.5rem" }}>
              Predict
            </button>

            {prediction !== null && (
              <p style={{ marginTop: "1rem", fontWeight: "bold", color: "#7f1d1d" }}>
                Predicted Deaths: {prediction}
              </p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Predict;
