import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; //Used to set endpoint and NAVIGATE to that specific endpoint

function Login(props) {

  let navigate = useNavigate();

  //useState hook
  const [ credentials, setCredentials] = useState({ email: "", password: ""})

  const onChange=(e)=>{
    setCredentials({...credentials, [e.target.name]:e.target.value})
  }

  //Fetching API to login the USER using email and password by Accessing his LoggedIn AUTH-TOKEN
  const handleSubmit= async (e)=>{
    e.preventDefault();
    const response = await fetch(`https://inotes-h2op.onrender.com/api/auth/login`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({email: credentials.email, password: credentials.password})
    });
    const json = await response.json();
    if(json.success){
      localStorage.setItem('token',json.authToken)
      navigate("/")
      props.showAlert("Logged In Successfully", "success")
    }
    else{
      props.showAlert("Invalid credentials", "danger")
    }
  }

  return (
    <div className='container'>
        <h1 className="login-heading text-center my-5">Login</h1>
        <form className='my-5' onSubmit={handleSubmit}>
            <div className="form-group my-3 mx-4">
                <label htmlFor="exampleInputEmail1">Email address</label>
                <input onChange={onChange} name='email' type="email" className="form-control" id="email" aria-describedby="emailHelp" placeholder="Enter email" value={credentials.email}/>
                <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
            </div>
            <div className="form-group my-3 mx-4">
                <label   htmlFor="exampleInputPassword1">Password</label>
                <input name="password" type="password" className="form-control" id="password" placeholder="Password" onChange={onChange} value={credentials.password}/>
            </div>
            <button type="submit" className="btn btn-primary my-3 mx-4">Submit</button>
        </form>
    </div>
  )
}

export default Login
