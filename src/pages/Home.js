import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div style={pageStyle}>
      <nav style={navStyle}>
        <div style={logoStyle}>Mu'en - مُعين</div>
        <div style={navLinks}>
          <Link to="/login" style={signInLink}>Sign In</Link>
          <Link to="/signup" style={signUpButton}>Sign Up</Link>
        </div>
      </nav>

      <main style={heroSection}>
        <h1 style={heroTitle}>Mu'en, <br/>Medical Support.</h1>
        <p style={heroSubtitle}>Connecting patients, doctors, and volunteers in one secure portal.</p>
        <div style={buttonGroup}>
          <Link to="/signup" style={primaryBtn}>Get Started</Link>
          <Link to="/login" style={secondaryBtn}>View Dashboard</Link>
        </div>
      </main>
    </div>
  );
};

const pageStyle = { minHeight: '100vh', backgroundColor: '#fff', fontFamily: 'sans-serif' };
const navStyle = { display: 'flex', justifyContent: 'space-between', padding: '20px 50px', alignItems: 'center' };
const logoStyle = { fontWeight: 'bold', fontSize: '22px', color: '#2563eb' };
const navLinks = { display: 'flex', gap: '20px', alignItems: 'center' };
const signInLink = { textDecoration: 'none', color: '#475569', fontWeight: '600' };
const signUpButton = { textDecoration: 'none', backgroundColor: '#2563eb', color: '#fff', padding: '10px 20px', borderRadius: '8px', fontWeight: 'bold' };

const heroSection = { display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', height: '70vh', textAlign: 'center', padding: '0 20px' };
const heroTitle = { fontSize: '56px', fontWeight: '800', color: '#0f172a', marginBottom: '20px', lineHeight: '1.1' };
const heroSubtitle = { fontSize: '20px', color: '#64748b', marginBottom: '40px', maxWidth: '600px' };

const buttonGroup = { display: 'flex', gap: '15px' };
const primaryBtn = { ...signUpButton, padding: '15px 30px', fontSize: '18px' };
const secondaryBtn = { ...primaryBtn, backgroundColor: '#f1f5f9', color: '#0f172a' };

export default Home;