import React from 'react';
//import { Link } from "react-router-dom";


function Login() {

  const handleClick= async (e)=>{
    e.preventDefault();
    const response = await fetch(`http://localhost:3000/api/auth/login`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'auth-token': 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjZiN2QwOTQ0ZjE2NmQ0NmI0NWNlYzQ2In0sImlhdCI6MTcyMzM2MTgzNX0.QEVDN_r1L1Mn8fZrdU2TuWa1PTbr8hQaDMSVECl3zBE'
      },
    });
    const json = await response.json();
    console.log(json)
  }
  return (
    <div className='container'>
        <h1 className="login-heading text-center my-5">Login</h1>
        <form className='my-5'>
            <div className="form-group my-3 mx-4">
                <label for="exampleInputEmail1">Email address</label>
                <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email"/>
                <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
            </div>
            <div className="form-group my-3 mx-4">
                <label for="exampleInputPassword1">Password</label>
                <input type="password" className="form-control" id="exampleInputPassword1" placeholder="Password"/>
            </div>
            <button type="submit" className="btn btn-primary my-3 mx-4" onSubmit={handleClick}>Submit</button>
            
        </form>
    </div>
  )
}

export default Login
