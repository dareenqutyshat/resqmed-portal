import React from 'react';
import { useNavigate } from 'react-router-dom';

const Signup = () => {
  const navigate = useNavigate();

  const handleSignup = (e) => {
    e.preventDefault();
    navigate('/dashboard');
  };

  return (
    <div style={pageStyle}>
      <div style={cardStyle}>
        <div style={logoIcon}>✨</div>
        <h2 style={titleStyle}>Join Mu'en</h2>
        <p style={subtitleStyle}>Create an account to get started</p>

        <form onSubmit={handleSignup} style={formStyle}>
          <input 
            type="text" 
            placeholder="Full Name" 
            style={inputStyle} 
            required 
          />
          <input 
            type="email" 
            placeholder="Email Address" 
            style={inputStyle} 
            required 
          />
          <input 
            type="password" 
            placeholder="Create Password" 
            style={inputStyle} 
            required 
          />
          
          <button type="submit" style={primaryBtn}>
            Sign Up
          </button>
        </form>

        <div style={footerStyle}>
          <p style={textStyle}>Already have an account?</p>
          <button 
            onClick={() => navigate('/login')} 
            style={linkBtn}
          >
            Log In
          </button>
        </div>
      </div>
    </div>
  );
};

// Reusing same styles for consistency
const pageStyle = { height: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center', backgroundColor: '#f0f9ff', padding: '20px' };
const cardStyle = { width: '100%', maxWidth: '400px', backgroundColor: '#ffffff', padding: '40px 30px', borderRadius: '24px', boxShadow: '0 10px 25px rgba(0,0,0,0.05)', textAlign: 'center' };
const logoIcon = { fontSize: '40px', marginBottom: '15px' };
const titleStyle = { fontSize: '24px', fontWeight: '800', color: '#1e293b', marginBottom: '8px' };
const subtitleStyle = { fontSize: '15px', color: '#64748b', marginBottom: '30px' };
const formStyle = { display: 'flex', flexDirection: 'column', gap: '15px' };
const inputStyle = { padding: '16px', borderRadius: '12px', border: '1px solid #e2e8f0', fontSize: '16px', backgroundColor: '#f8fafc', outline: 'none' };
const primaryBtn = { marginTop: '10px', padding: '16px', borderRadius: '12px', border: 'none', backgroundColor: '#2563eb', color: 'white', fontSize: '16px', fontWeight: '700', cursor: 'pointer' };
const footerStyle = { marginTop: '25px' };
const textStyle = { fontSize: '14px', color: '#64748b', marginBottom: '5px' };
const linkBtn = { background: 'none', border: 'none', color: '#2563eb', fontWeight: '700', cursor: 'pointer', fontSize: '14px' };

export default Signup;