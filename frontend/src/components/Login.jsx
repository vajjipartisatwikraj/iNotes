import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Login = ({ setIsAuthenticated }) => {
  const [credentials, setCredentials] = useState({email: "", password: ""});
  const [message, setMessage] = useState('');
  const navigate = useNavigate();

  const onChange = (e) => {
    setCredentials({...credentials, [e.target.name]: e.target.value})
  }

  const handleLoginSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('http://localhost:5000/api/auth/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({email: credentials.email, password: credentials.password})
      });
      
      const json = await response.json();
      
      if (json.success) {
        // Save the token in localStorage
        localStorage.setItem('token', json.authToken);
        setIsAuthenticated(true);
        setMessage('Login successful!');
        navigate('/'); // Redirect to home
      } else {
        setMessage('Login failed. ' + (json.error || 'Please try again.'));
      }
    } catch (error) {
      setMessage('Login failed. Please try again.');
      console.error(error);
    }
  };

  return (
    <div className="container">
      <h2 className="login-heading text-center my-5">Login</h2>
      <form className="my-5" onSubmit={handleLoginSubmit}>
        <div className="form-group my-3 mx-4">
          <label htmlFor="email">Email address</label>
          <input
            type="email"
            className="form-control"
            id="email"
            name="email"
            value={credentials.email}
            onChange={onChange}
            placeholder="Enter email"
            required
          />
        </div>
        <div className="form-group my-3 mx-4">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            className="form-control"
            id="password"
            name="password"
            value={credentials.password}
            onChange={onChange}
            placeholder="Password"
            required
          />
        </div>
        <button type="submit" className="btn btn-primary my-3 mx-5">Login</button>
      </form>
      {message && <div className="alert alert-info">{message}</div>}
    </div>
  );
};

export default Login;
