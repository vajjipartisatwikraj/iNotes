import React, {useState} from 'react';
import { useNavigate } from "react-router-dom";

function SignUp({ setIsAuthenticated }) {
  let navigate = useNavigate();
  
  // State for credentials and error messages
  const [credentials, setCredentials] = useState({ name:"", email: "", password: "", cpassword:""});
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const onChange = (e) => {
    setCredentials({...credentials, [e.target.name]: e.target.value});
  }

  // Handle form submission with improved error handling
  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    
    // Validate input fields
    if (credentials.name.length < 3) {
      return setError("Name must be at least 3 characters");
    }
    
    if (credentials.password.length < 5) {
      return setError("Password must be at least 5 characters");
    }
    
    if (credentials.password !== credentials.cpassword) {
      return setError("Passwords do not match");
    }
    
    try {
      setLoading(true);
      
      // Prepare the request data - ensure it's exactly as the backend expects
      const requestData = {
        name: credentials.name.trim(),
        email: credentials.email.trim(),
        password: credentials.password
      };
      
      console.log("Sending signup request with data:", JSON.stringify(requestData));
      
      const response = await fetch(`http://localhost:5000/api/auth/createuser`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(requestData)
      });
      
      // Log the raw response for debugging
      console.log("Response status:", response.status);
      
      const json = await response.json();
      console.log("Response data:", json);
      
      if (json.success) {
        // Success - save token and navigate
        localStorage.setItem('token', json.authToken);
        setIsAuthenticated(true);
        navigate("/");
      } else {
        // Failed with error message from server
        setError(json.error || "Failed to create user");
      }
    } catch (error) {
      console.error("Signup error:", error);
      setError("Server error: " + (error.message || "Unknown error"));
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className='container'>
      <h1 className="login-heading text-center my-5">SignUp</h1>
      
      {/* Display any error messages */}
      {error && <div className="alert alert-danger my-3">{error}</div>}
      
      <form className='my-5' onSubmit={handleSubmit}>
        <div className="form-group my-3 mx-4">
          <label htmlFor="name">Name</label>
          <input 
            name="name" 
            id='name' 
            onChange={onChange} 
            value={credentials.name} 
            type="text" 
            className="form-control"  
            placeholder="Enter your name" 
            minLength={3}
            required
          />
        </div>
        <div className="form-group my-3 mx-4">
          <label htmlFor="email">Email address</label>
          <input 
            name='email' 
            id='email' 
            onChange={onChange} 
            value={credentials.email} 
            type="email" 
            className="form-control"  
            aria-describedby="emailHelp" 
            placeholder="Enter email" 
            required
          />
          <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
        </div>
        <div className="form-group my-3 mx-4">
          <label htmlFor="password">Password</label>
          <input 
            name='password' 
            id='password' 
            onChange={onChange} 
            value={credentials.password} 
            type="password" 
            className="form-control"  
            placeholder="Password" 
            minLength={5} 
            required
          />
        </div>
        <div className="form-group my-3 mx-4">
          <label htmlFor="cpassword">Confirm Password</label>
          <input 
            name='cpassword' 
            id='cpassword' 
            onChange={onChange} 
            value={credentials.cpassword} 
            type="password" 
            className="form-control" 
            placeholder="Re-Enter your Password" 
            minLength={5} 
            required
          />
        </div>
        <button 
          type="submit" 
          className="btn btn-primary my-3 mx-5"
          disabled={loading}
        >
          {loading ? 'Creating account...' : 'Create Account'}
        </button>
      </form>
    </div>
  );
}

export default SignUp;
