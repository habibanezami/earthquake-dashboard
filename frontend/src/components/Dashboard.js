import React from 'react';
import TableauEmbed from './TableauEmbed';

function Dashboard() {
  return (
    <div style={{ minHeight: '100vh', padding: '2rem', textAlign: 'center' }}>
      <h2 style={{ fontSize: '2.5rem', marginBottom: '1rem' }}>

      </h2>
      <p style={{ fontSize: '1.1rem', marginBottom: '2rem' }}>
        Explore earthquake trends and insights in real-time with our interactive Tableau visualization.
      </p>
      <div
        style={{
          border: '4px solid #b91c1c',
          borderRadius: '12px',
          padding: '1rem',
          background: '#fff',
          maxWidth: '1080px',
          margin: '0 auto'
        }}
      >
        <TableauEmbed />
      </div>
    </div>
  );
}

export default Dashboard;
