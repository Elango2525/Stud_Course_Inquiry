// Login.jsx
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './../Styles/Login.css';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const validateForm = (event) => {
    event.preventDefault();

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      setError('Invalid email address');
      return;
    }

    // Password validation
    if (password.length < 8) {
      setError('Password must be at least 8 characters long');
      return;
    }

    // Clear any previous errors
    setError('');

    // Perform further actions (e.g., login request)
    console.log('Login successful');

    // Navigate to the home page
    navigate('/userhome');
  };

  return (
    <div className="container">
      <form id="loginForm" onSubmit={validateForm}>
        <h2>Login</h2>
        {error && <p className="error">{error}</p>}
        <div className="form-group">
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            name="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
            name="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <button type="submit">Login</button>
        </div>
      </form>
    </div>
  );
};

export default Login;
