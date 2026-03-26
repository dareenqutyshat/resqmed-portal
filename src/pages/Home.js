import React from 'react';
import { useNavigate } from 'react-router-dom';

const Home = () => {
  const navigate = useNavigate();

  return (
    <div style={fullPage}>
      <div style={heroCard}>
        <h1 style={logoText}>💙 Mu'en</h1>
        <h2 style={headline}>Medical Support, Simplified.</h2>
        <p style={subText}>Connecting patients with volunteers and doctors in one secure portal.</p>
        
        <div style={buttonGroup}>
          <button onClick={() => navigate('/signup')} style={primaryBtn}>Get Started</button>
          <button onClick={() => navigate('/login')} style={secondaryBtn}>Sign In</button>
        </div>
      </div>
    </div>
  );
};

// Styles
const fullPage = { height: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center', backgroundColor: '#f0f9ff', padding: '20px' };
const heroCard = { textAlign: 'center', maxWidth: '400px', width: '100%' };
const logoText = { fontSize: '2.5rem', fontWeight: '800', color: '#2563eb', marginBottom: '10px' };
const headline = { fontSize: '1.5rem', color: '#1e293b', marginBottom: '15px' };
const subText = { color: '#64748b', marginBottom: '30px', lineHeight: '1.6' };
const buttonGroup = { display: 'flex', flexDirection: 'column', gap: '12px' };
const primaryBtn = { padding: '16px', borderRadius: '12px', border: 'none', backgroundColor: '#2563eb', color: 'white', fontWeight: '700', fontSize: '1rem', cursor: 'pointer' };
const secondaryBtn = { padding: '16px', borderRadius: '12px', border: '1px solid #cbd5e1', backgroundColor: 'white', color: '#1e293b', fontWeight: '600', fontSize: '1rem', cursor: 'pointer' };

export default Home;