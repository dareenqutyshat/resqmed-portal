import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';

const Signup = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({ fullName: '', email: '', password: '', role: 'Patient' });

  const handleSignup = (e) => {
    e.preventDefault();
    alert(`Account created for ${formData.fullName}!`);
    navigate('/dashboard'); 
  };

  return (
    <div style={containerStyle}>
      <div style={cardStyle}>
        <h2 style={{ color: '#2c3e50' }}>Join ResQmed</h2>
        <p style={{ color: '#7f8c8d', marginBottom: '20px' }}>Create your medical profile</p>

        <form onSubmit={handleSignup} style={formStyle}>
          <input type="text" placeholder="Full Name" required style={inputStyle} onChange={(e) => setFormData({...formData, fullName: e.target.value})} />
          <input type="email" placeholder="Email Address" required style={inputStyle} onChange={(e) => setFormData({...formData, email: e.target.value})} />
          <input type="password" placeholder="Password" required style={inputStyle} onChange={(e) => setFormData({...formData, password: e.target.value})} />
          
          <select style={inputStyle} value={formData.role} onChange={(e) => setFormData({...formData, role: e.target.value})}>
            <option value="Patient">Patient</option>
            <option value="Doctor">Doctor</option>
            <option value="Volunteer">Volunteer</option>
          </select>

          <button type="submit" style={signupButtonStyle}>Create Account</button>
        </form>

        <div style={footerStyle}>
          <span style={{ color: '#7f8c8d' }}>Already have an account? </span>
          <Link to="/login" style={linkStyle}>
            Login here
          </Link>
        </div>
      </div>
    </div>
  );
};

const containerStyle = { display: 'flex', justifyContent: 'center', alignItems: 'center', minHeight: '100vh', backgroundColor: '#ecf0f1' };
const cardStyle = { background: 'white', padding: '40px', borderRadius: '15px', boxShadow: '0 8px 20px rgba(0,0,0,0.1)', textAlign: 'center', width: '380px', position: 'relative' };
const formStyle = { display: 'flex', flexDirection: 'column', gap: '15px' };
const inputStyle = { padding: '12px', borderRadius: '8px', border: '1px solid #ddd', fontSize: '15px' };
const signupButtonStyle = { padding: '12px', backgroundColor: '#27ae60', color: 'white', border: 'none', borderRadius: '8px', cursor: 'pointer', fontSize: '16px', fontWeight: 'bold' };
const footerStyle = { marginTop: '25px', position: 'relative', zIndex: 9999 };
const linkStyle = { color: '#27ae60', fontWeight: 'bold', textDecoration: 'underline', cursor: 'pointer', display: 'inline-block' };

export default Signup;