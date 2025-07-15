import React, { useEffect } from 'react';

function Predict() {
  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://public.tableau.com/javascripts/api/viz_v1.js';
    script.async = true;

    const vizContainer = document.getElementById('tableauVizContainer');
    if (vizContainer) {
      vizContainer.appendChild(script);
    }
  }, []);

  return (
    <div style={{ minHeight: '100vh', backgroundColor: '#fef2f2', padding: '2rem' }}>
      <h2 style={{ textAlign: 'center', color: '#7f1d1d', fontSize: '2rem', marginBottom: '2rem' }}>
        Earthquake Death Prediction & Model Comparison
      </h2>

      <div style={{ display: 'flex', gap: '2rem', justifyContent: 'center' }}>
        {/* Left: Tableau Dashboard */}
        <div
          style={{
            width: '30%',
            minWidth: '320px',
            backgroundColor: '#fdecea',
            border: '1px solid #fca5a5',
            borderRadius: '10px',
            padding: '1rem',
            textAlign: 'center',
          }}
        >
          <div
            className="tableauPlaceholder"
            id="tableauVizContainer"
            style={{ width: '100%', height: '700px', position: 'relative' }}
          >
            <noscript>
              <a href="#">
                <img
                  alt="Model Comparison Dashboard"
                  src="https://public.tableau.com/static/images/Mo/ModelComparisononEarthquakeData/Dashboard1/1_rss.png"
                  style={{ border: 'none', width: '100%' }}
                />
              </a>
            </noscript>
            <object className="tableauViz" style={{ width: '100%', height: '100%' }}>
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

        {/* Right: Streamlit Prediction Tool */}
        <div style={{ width: '60%' }}>
          <iframe
            src="http://localhost:8501"
            title="Streamlit Earthquake Predictor"
            width="100%"
            height="700px"
            style={{
              border: '1px solid #b91c1c',
              borderRadius: '12px',
              backgroundColor: '#fff5f5',
            }}
          ></iframe>
        </div>
      </div>
    </div>
  );
}

export default Predict;
