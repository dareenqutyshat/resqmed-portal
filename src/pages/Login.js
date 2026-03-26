import React from 'react';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    // For now, we just navigate to the dashboard
    navigate('/dashboard');
  };

  return (
    <div style={pageStyle}>
      <div style={cardStyle}>
        <div style={logoIcon}>💙</div>
        <h2 style={titleStyle}>Welcome Back</h2>
        <p style={subtitleStyle}>Log in to your Mu'en account</p>

        <form onSubmit={handleLogin} style={formStyle}>
          <input 
            type="email" 
            placeholder="Email Address" 
            style={inputStyle} 
            required 
          />
          <input 
            type="password" 
            placeholder="Password" 
            style={inputStyle} 
            required 
          />
          
          <button type="submit" style={primaryBtn}>
            Log In
          </button>
        </form>

        <div style={footerStyle}>
          <p style={textStyle}>Don't have an account?</p>
          <button 
            onClick={() => navigate('/signup')} 
            style={linkBtn}
          >
            Create Account
          </button>
        </div>
      </div>
    </div>
  );
};

// --- Mobile-First Styles ---
const pageStyle = {
  height: '100vh',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  backgroundColor: '#f8fafc',
  padding: '20px',
};

const cardStyle = {
  width: '100%',
  maxWidth: '400px',
  backgroundColor: '#ffffff',
  padding: '40px 30px',
  borderRadius: '24px',
  boxShadow: '0 10px 25px rgba(0,0,0,0.05)',
  textAlign: 'center',
};

const logoIcon = { fontSize: '40px', marginBottom: '15px' };
const titleStyle = { fontSize: '24px', fontWeight: '800', color: '#1e293b', marginBottom: '8px' };
const subtitleStyle = { fontSize: '15px', color: '#64748b', marginBottom: '30px' };

const formStyle = { display: 'flex', flexDirection: 'column', gap: '15px' };

const inputStyle = {
  padding: '16px',
  borderRadius: '12px',
  border: '1px solid #e2e8f0',
  fontSize: '16px', // Prevents iPhone zoom-on-focus
  backgroundColor: '#f1f5f9',
  outline: 'none',
};

const primaryBtn = {
  marginTop: '10px',
  padding: '16px',
  borderRadius: '12px',
  border: 'none',
  backgroundColor: '#2563eb',
  color: 'white',
  fontSize: '16px',
  fontWeight: '700',
  cursor: 'pointer',
};

const footerStyle = { marginTop: '25px' };
const textStyle = { fontSize: '14px', color: '#64748b', marginBottom: '5px' };
const linkBtn = { 
  background: 'none', 
  border: 'none', 
  color: '#2563eb', 
  fontWeight: '700', 
  cursor: 'pointer', 
  fontSize: '14px' 
};

export default Login;