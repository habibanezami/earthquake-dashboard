import React from 'react';
import { Link } from 'react-router-dom';

function Home() {
  return (
    <div style={{ minHeight: '100vh', padding: '2rem', textAlign: 'center' }}>
      <h1 style={{ fontSize: '3rem', marginBottom: '1rem' }}>
        Welcome to the Earthquake Dashboard
      </h1>
      <p style={{ fontSize: '1.2rem', marginBottom: '2rem', maxWidth: '600px', marginInline: 'auto' }}>
        Explore seismic trends, make predictions, and stay informed with our interactive tools.
      </p>
      <Link to="/predict">
        <button>Start Predicting</button>
      </Link>
    </div>
  );
}

export default Home;
