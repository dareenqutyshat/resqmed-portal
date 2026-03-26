import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';

const Login = () => {
  const [role, setRole] = useState('Patient'); 
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    console.log(`Logging in as ${role}`);
    navigate('/dashboard'); 
  };

  return (
    <div style={containerStyle}>
      <div style={cardStyle}>
        <h2 style={{ color: '#2c3e50', marginBottom: '10px' }}>ResQmed</h2>
        <p style={{ color: '#7f8c8d', marginBottom: '20px' }}>Medical Portal Login</p>

        {/* Role Selector */}
        <div style={tabContainer}>
          {['Patient', 'Doctor', 'Volunteer'].map((userRole) => (
            <button 
              key={userRole}
              type="button"
              onClick={() => setRole(userRole)}
              style={{
                ...tabStyle,
                backgroundColor: role === userRole ? '#3498db' : '#f4f7f6',
                color: role === userRole ? 'white' : '#7f8c8d',
                border: '1px solid #ddd'
              }}
            >
              {userRole}
            </button>
          ))}
        </div>

        {/* Login Form */}
        <form onSubmit={handleLogin} style={formStyle}>
          <input type="email" placeholder="Email Address" required style={inputStyle} />
          <input type="password" placeholder="Password" required style={inputStyle} />
          <button type="submit" style={loginButtonStyle}>
            Login as {role}
          </button>
        </form>

        {/* FOOTER - Explicitly positioned to be clickable */}
        <div style={footerStyle}>
          <span style={{ color: '#7f8c8d' }}>Don't have an account? </span>
          <Link to="/signup" style={linkStyle}>
            Register here
          </Link>
        </div>
      </div>
    </div>
  );
};

// --- Styles ---
const containerStyle = { display: 'flex', justifyContent: 'center', alignItems: 'center', minHeight: '100vh', backgroundColor: '#ecf0f1' };
const cardStyle = { background: 'white', padding: '40px', borderRadius: '15px', boxShadow: '0 8px 20px rgba(0,0,0,0.1)', textAlign: 'center', width: '380px', position: 'relative' };
const tabContainer = { display: 'flex', justifyContent: 'center', gap: '8px', marginBottom: '25px' };
const tabStyle = { padding: '8px 12px', borderRadius: '20px', cursor: 'pointer', fontSize: '13px', fontWeight: '600', border: 'none' };
const formStyle = { display: 'flex', flexDirection: 'column', gap: '15px' };
const inputStyle = { padding: '12px', borderRadius: '8px', border: '1px solid #ddd', fontSize: '15px' };
const loginButtonStyle = { padding: '12px', backgroundColor: '#2c3e50', color: 'white', border: 'none', borderRadius: '8px', cursor: 'pointer', fontSize: '16px', fontWeight: 'bold' };

const footerStyle = { 
  marginTop: '25px', 
  padding: '10px', 
  position: 'relative', 
  zIndex: 9999 // Sits on top of everything
};

const linkStyle = { 
  color: '#3498db', 
  fontWeight: 'bold', 
  textDecoration: 'underline', 
  fontSize: '14px', 
  cursor: 'pointer',
  display: 'inline-block',
  pointerEvents: 'auto' // Forces the browser to allow clicks
};

export default Login;