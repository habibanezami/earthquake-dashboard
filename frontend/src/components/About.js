import React from 'react';

function About() {
  return (
    <div style={{ minHeight: '100vh', padding: '2rem', backgroundColor: '#fef2f2', color: '#7f1d1d' }}>
      <h2 style={{ fontSize: '2.5rem', textAlign: 'center', marginBottom: '2rem' }}>
        About This Project
      </h2>

      <div style={{ maxWidth: '900px', margin: '0 auto', fontSize: '1.1rem', lineHeight: '1.8' }}>
        <p>
          This Earthquake Dashboard is an integrated system built to analyze and predict earthquake-related fatalities using real-world data and machine learning techniques. It combines backend predictive models, interactive visualizations, and a modern frontend interface.
        </p>

        <h3 style={{ marginTop: '2rem', color: '#b91c1c' }}>Dataset</h3>
        <ul>
          <li>Global earthquake records from 1900 onward.</li>
          <li>Features used include magnitude, depth, population density (1960 onward), and urbanization rate (1960 onward).</li>
          <li>Cleaned and processed using Python libraries such as pandas and NumPy.</li>
          <li>Source: <a href="https://en.wikipedia.org/wiki/Lists_of_earthquakes" target="_blank" rel="noopener noreferrer" style={{ color: '#dc2626' }}>Wikipedia Earthquake Data</a></li>
        </ul>

        <h3 style={{ marginTop: '2rem', color: '#b91c1c' }}>Machine Learning Models</h3>
        <ul>
          <li>Implemented using scikit-learn with models like:
            <ul>
              <li>Random Forest</li>
              <li>Gradient Boosting</li>
              <li>Decision Tree</li>
              <li>Linear Regression</li>
              <li>K-Nearest Neighbors</li>
            </ul>
          </li>
          <li>Correlation-weighted features and standard scaling used for preprocessing.</li>
        </ul>

        <h3 style={{ marginTop: '2rem', color: '#b91c1c' }}>Prediction Integration</h3>
        <ul>
          <li>Prediction function deployed using TabPy (Tableau Python Server).</li>
          <li>Accessible through API calls on localhost for real-time inference.</li>
        </ul>

        <h3 style={{ marginTop: '2rem', color: '#b91c1c' }}>Frontend Technologies</h3>
        <ul>
          <li>React.js used for building the dashboard UI and routing between pages.</li>
          <li>Streamlit application embedded to provide interactive inputs for prediction.</li>
          <li>Custom red and light theme applied across components for consistency.</li>
          <li>Tableau Public visualization embedded to display model comparison metrics.</li>
        </ul>

        <h3 style={{ marginTop: '2rem', color: '#b91c1c' }}>Project Features</h3>
        <ul>
          <li>Real-time prediction of earthquake fatalities based on user input.</li>
          <li>Model selection to compare output from different machine learning algorithms.</li>
          <li>Embedded Tableau dashboard showing model performance and results.</li>
          <li>User-friendly layout with responsive styling and color consistency.</li>
        </ul>

        <h3 style={{ marginTop: '2rem', color: '#b91c1c' }}>Contributors and Tools</h3>
        <ul>
          <li>Developed by Habiba Nezami, under the guidance of Dr. Samrat Mondal (Department of Compter Science, IIT Patna)</li>
          <li>Built using Python, React.js, Streamlit, Tableau, TabPy</li>
        </ul>
      </div>
    </div>
  );
}

export default About;
