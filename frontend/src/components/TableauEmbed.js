// src/components/TableauEmbed.js
import React, { useEffect } from 'react';

const TableauEmbed = () => {
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://public.tableau.com/javascripts/api/viz_v1.js";
    script.async = true;
    script.onload = () => {
      const containerDiv = document.getElementById("tableauViz");
      const vizElement = containerDiv.getElementsByTagName("object")[0];

      // Responsive setup
      vizElement.style.width = "100%";
      vizElement.style.height = "100%";
    };
    document.body.appendChild(script);
  }, []);

  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        padding: '2rem',
        backgroundColor: '#fee2e2', // light red background
        minHeight: '100vh',
      }}
    >
      <div
        className="tableauPlaceholder"
        id="tableauViz"
        style={{
          width: '100%',
          maxWidth: '1080px',
          height: '80vh',
          margin: '0 auto',
          position: 'relative',
          boxShadow: '0 4px 20px rgba(185, 28, 28, 0.3)', // red shadow
          borderRadius: '16px',
          overflow: 'hidden',
          backgroundColor: '#fff',
          border: '4px solid #b91c1c', // red border
        }}
      >
        <noscript>
          <a
            href="https://public.tableau.com/views/Earthquake_Trends/Dashboard1"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              alt="Dashboard"
              src="https://public.tableau.com/static/images/Ea/Earthquake_Trends/Dashboard1/1.png"
              style={{ border: "none", width: "100%" }}
            />
          </a>
        </noscript>
        <object className="tableauViz" style={{ display: "block", width: "100%", height: "100%" }}>
          <param name="host_url" value="https%3A%2F%2Fpublic.tableau.com%2F" />
          <param name="embed_code_version" value="3" />
          <param name="site_root" value="" />
          <param name="name" value="Earthquake_Trends/Dashboard1" />
          <param name="tabs" value="no" />
          <param name="toolbar" value="yes" />
          <param name="animate_transition" value="yes" />
          <param name="display_static_image" value="yes" />
          <param name="display_spinner" value="yes" />
          <param name="display_overlay" value="yes" />
          <param name="display_count" value="yes" />
          <param name="language" value="en-US" />
        </object>
      </div>
    </div>
  );
};

export default TableauEmbed;
