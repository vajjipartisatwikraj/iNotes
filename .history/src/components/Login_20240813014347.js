import React, { useState } from 'react';
//import { Link } from "react-router-dom";


function Login() {

  const [ credentials, setCredentials] = useState({ email: "", password: ""})

  const onChange=(e)=>{
    setCredentials({...credentials, [e.target.name]:e.target.value})
  }

  const handleClick= async (e)=>{
    e.preventDefault();
    const response = await fetch(`http://localhost:3000/api/auth/login`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({email, password})
    });
    const json = await response.json();
    console.log(json)
  }
  return (
    <div className='container' onSubmit={()=>{handleClick(email, password)}}>
        <h1 className="login-heading text-center my-5">Login</h1>
        <form className='my-5'>
            <div className="form-group my-3 mx-4">
                <label htmlFor="exampleInputEmail1">Email address</label>
                <input onChange={onChange} name='email' type="email" className="form-control" id="email" aria-describedby="emailHelp" placeholder="Enter email" value={email}/>
                <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
            </div>
            <div className="form-group my-3 mx-4">
                <label onChange={onChange} name="password" htmlFor="exampleInputPassword1">Password</label>
                <input type="password" className="form-control" id="password" placeholder="Password" value={password}/>
            </div>
            <button type="submit" className="btn btn-primary my-3 mx-4">Submit</button>
            
        </form>
    </div>
  )
}

export default Login
