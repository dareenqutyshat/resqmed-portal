import React from 'react';
import { useNavigate } from 'react-router-dom';

const Dashboard = () => {
  const navigate = useNavigate();

  return (
    <div style={containerStyle}>
      {}
      <nav style={navStyle}>
        <div style={logoStyle}> Mu'en</div>
        <div style={navLinks}>
          <button onClick={() => navigate('/')} style={logoutBtn}>Logout</button>
        </div>
      </nav>

      {}
      <main style={mainStyle}>
        <header style={headerStyle}>
          <h1 style={titleStyle}>Welcome to Mu'en</h1>
          <p style={subtitleStyle}>How can we support you today?</p>
        </header>

        {/* --- Responsive Grid --- */}
        <div style={gridStyle}>
          
          {/* Card 1: Emergency */}
          <div style={cardStyle}>
            <div style={iconCircle}>🚨</div>
            <h3 style={cardTitle}>Emergency Aid</h3>
            <p style={cardText}>Directly connect with nearby medical volunteers for urgent help.</p>
            <button style={primaryBtn}>Request Help</button>
          </div>

          {/* Card 2: Supplies */}
          <div style={cardStyle}>
            <div style={iconCircle}>💊</div>
            <h3 style={cardTitle}>Medicine & Supplies</h3>
            <p style={cardText}>Request specific medications or donate surplus supplies.</p>
            <button style={secondaryBtn}>View Supplies</button>
          </div>

          {/* Card 3: Consultation */}
          <div style={cardStyle}>
            <div style={iconCircle}>👨‍⚕️</div>
            <h3 style={cardTitle}>Tele-Consult</h3>
            <p style={cardText}>Chat with an available doctor for non-emergency medical advice.</p>
            <button style={secondaryBtn}>Start Chat</button>
          </div>

          {/* Card 4: Locations */}
          <div style={cardStyle}>
            <div style={iconCircle}>📍</div>
            <h3 style={cardTitle}>Nearby Centers</h3>
            <p style={cardText}>Find the nearest open clinic, hospital, or pharmacy.</p>
            <button style={secondaryBtn}>Open Map</button>
          </div>

        </div>
      </main>
    </div>
  );
};



const containerStyle = {
  minHeight: '100vh',
  backgroundColor: '#f8fafc',
  fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
};

const navStyle = {
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  padding: '1rem 5%',
  backgroundColor: '#ffffff',
  boxShadow: '0 2px 4px rgba(0,0,0,0.05)',
  position: 'sticky',
  top: 0,
  zIndex: 100,
};

const logoStyle = {
  fontSize: '1.5rem',
  fontWeight: '800',
  color: '#2563eb',
};

const navLinks = {
  display: 'flex',
  gap: '1rem',
};

const logoutBtn = {
  padding: '0.5rem 1rem',
  borderRadius: '8px',
  border: '1px solid #e2e8f0',
  backgroundColor: 'transparent',
  color: '#64748b',
  cursor: 'pointer',
  fontWeight: '600',
};

const mainStyle = {
  padding: '2rem 5%',
  maxWidth: '1200px',
  margin: '0 auto',
};

const headerStyle = {
  textAlign: 'center',
  marginBottom: '2.5rem',
};

const titleStyle = {
  fontSize: '2rem',
  fontWeight: '800',
  color: '#0f172a',
  marginBottom: '0.5rem',
};

const subtitleStyle = {
  fontSize: '1.1rem',
  color: '#64748b',
};


const gridStyle = {
  display: 'grid',
 
  gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
  gap: '1.5rem',
};

const cardStyle = {
  backgroundColor: '#ffffff',
  padding: '2rem',
  borderRadius: '1.5rem',
  textAlign: 'center',
  boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.1)',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  transition: 'transform 0.2s',
};

const iconCircle = {
  width: '60px',
  height: '60px',
  backgroundColor: '#eff6ff',
  borderRadius: '50%',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  fontSize: '1.8rem',
  marginBottom: '1.2rem',
};

const cardTitle = {
  fontSize: '1.25rem',
  fontWeight: '700',
  color: '#1e293b',
  marginBottom: '0.75rem',
};

const cardText = {
  fontSize: '0.95rem',
  color: '#64748b',
  lineHeight: '1.5',
  marginBottom: '1.5rem',
};

const primaryBtn = {
  width: '100%',
  padding: '0.8rem',
  backgroundColor: '#2563eb',
  color: 'white',
  border: 'none',
  borderRadius: '12px',
  fontWeight: '700',
  cursor: 'pointer',
};

const secondaryBtn = {
  width: '100%',
  padding: '0.8rem',
  backgroundColor: '#f1f5f9',
  color: '#475569',
  border: 'none',
  borderRadius: '12px',
  fontWeight: '700',
  cursor: 'pointer',
};

export default Dashboard;