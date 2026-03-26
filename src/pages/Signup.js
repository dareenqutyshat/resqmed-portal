import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';

const Signup = () => {
  const navigate = useNavigate();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSignup = (e) => {
    e.preventDefault();
    // Logic for signup goes here
    navigate('/dashboard'); 
  };

  return (
    <div style={pageStyle}>
      <nav style={navStyle}>
        <div style={logoStyle}>Mu'en - مُعين</div>
        <div style={navLinks}>
          <Link to="/login" style={activeNavLink}>Sign In</Link>
          <Link to="/signup" style={buttonNavLink}>Sign Up</Link>
        </div>
      </nav>

      <main style={mainContainer}>
        <h1 style={titleStyle}>Create Account</h1>
        <p style={subtitleStyle}>Join the Mu'en medical support community</p>

        <div style={cardStyle}>
          <form onSubmit={handleSignup} style={formStyle}>
            <div style={inputGroup}>
              <label style={labelStyle}>Full Name</label>
              <input 
                type="text" 
                placeholder="Ahmad Ali" 
                required 
                style={inputStyle} 
                onChange={(e) => setName(e.target.value)}
              />
            </div>

            <div style={inputGroup}>
              <label style={labelStyle}>Email</label>
              <input 
                type="email" 
                placeholder="Ahmad@example.com" 
                required 
                style={inputStyle} 
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>

            <div style={inputGroup}>
              <label style={labelStyle}>Password</label>
              <input 
                type="password" 
                placeholder="Create a password" 
                required 
                style={inputStyle} 
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>

            <button type="submit" style={primaryButtonStyle}>Sign Up</button>
          </form>
        </div>

        <div style={footerStyle}>
          <span style={footerText}>Already have an account? </span>
          <Link to="/login" style={linkStyle}>Sign In</Link>
        </div>
        
        <Link to="/" style={backLink}>← Back to Home</Link>
      </main>
    </div>
  );
};

// --- Styles (Matching your Login style exactly) ---
const pageStyle = { minHeight: '100vh', backgroundColor: '#fcfcfc', fontFamily: 'sans-serif' };

const navStyle = { 
  display: 'flex', 
  justifyContent: 'space-between', 
  padding: '15px 5%', 
  alignItems: 'center', 
  backgroundColor: '#fff', 
  borderBottom: '1px solid #eee' 
};

const logoStyle = { fontWeight: 'bold', fontSize: '18px', color: '#1a1a1a' };
const navLinks = { display: 'flex', gap: '15px', alignItems: 'center' };
const activeNavLink = { textDecoration: 'none', color: '#1a1a1a', fontSize: '14px' };
const buttonNavLink = { textDecoration: 'none', backgroundColor: '#2563eb', color: '#fff', padding: '8px 16px', borderRadius: '6px', fontSize: '13px', fontWeight: 'bold' };

const mainContainer = { 
  display: 'flex', 
  flexDirection: 'column', 
  alignItems: 'center', 
  paddingTop: '40px',
  paddingLeft: '20px', 
  paddingRight: '20px' 
};

const titleStyle = { fontSize: '28px', fontWeight: 'bold', margin: '0 0 8px 0', color: '#111', textAlign: 'center' };
const subtitleStyle = { color: '#666', marginBottom: '30px', fontSize: '15px', textAlign: 'center' };

const cardStyle = { 
  width: '100%', 
  maxWidth: '400px', 
  backgroundColor: '#fff', 
  border: '1px solid #e5e7eb', 
  borderRadius: '16px', 
  padding: '32px', 
  boxShadow: '0 1px 3px rgba(0,0,0,0.1)',
  boxSizing: 'border-box' 
};

const formStyle = { display: 'flex', flexDirection: 'column', gap: '20px' };
const inputGroup = { display: 'flex', flexDirection: 'column', gap: '8px', textAlign: 'left' };
const labelStyle = { fontSize: '14px', fontWeight: '600', color: '#374151' };

const inputStyle = { 
  padding: '12px', 
  borderRadius: '8px', 
  border: '1px solid #d1d5db', 
  fontSize: '16px', // Keeps it mobile-friendly
  outline: 'none' 
};

const primaryButtonStyle = { backgroundColor: '#2563eb', color: '#fff', border: 'none', padding: '14px', borderRadius: '8px', fontWeight: 'bold', cursor: 'pointer', fontSize: '16px' };

const footerStyle = { marginTop: '24px', fontSize: '14px', textAlign: 'center' };
const footerText = { color: '#666' };
const linkStyle = { color: '#2563eb', fontWeight: 'bold', textDecoration: 'none' };
const backLink = { marginTop: '20px', textDecoration: 'none', color: '#666', fontSize: '14px', marginBottom: '40px' };

export default Signup;