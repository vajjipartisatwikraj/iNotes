import React, {useState} from 'react';
import { Link, navigate } from "react-router-dom";


function Login() {

    const [ credentials, setCredentials] = useState({ email: "", password: ""})

  const onChange=(e)=>{
    setCredentials({...credentials, [e.target.name]:e.target.value})
  }

  const handleSubmit= async (e)=>{
    e.preventDefault();
    const response = await fetch(`http://localhost:5000/api/auth/login`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({email: credentials.email, password: credentials.password})
    });
    const json = await response.json();
    if(json.success){
      navigate("/")
    }
    else{
      alert("Invalid credentials")
    }
  }

  return (
    <div className='container'>
        <h1 className="login-heading text-center my-5">SignUp</h1>
        <form className='my-5' onSubmit={handleSubmit}>
            <div className="form-group my-3 mx-4">
                <label htmlFor="exampleInputName">Name</label>
                <input name="name" id='name' onChange={onChange} value={credentials.name} type="text" className="form-control"  placeholder="Enter your name"/>
            </div>
            <div className="form-group my-3 mx-4">
                <label htmlFor="exampleInputEmail1">Email address</label>
                <input name='email' id='email' onChange={onChange} value={credentials.email} type="email" className="form-control"  aria-describedby="emailHelp" placeholder="Enter email"/>
                <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
            </div>
            <div className="form-group my-3 mx-4">
                <label htmlFor="exampleInputPassword1">Password</label>
                <input name='password' id='password' onChange={onChange} value={credentials.password} type="password" className="form-control"  placeholder="Password"/>
            </div>
            <div className="form-group my-3 mx-4">
                <label htmlFor="exampleInputPassword2">Confirm Password</label>
                <input name='cpassword' id='cpassword' onChange={onChange} type="password" className="form-control" placeholder="Re-Enter your Password"/>
            </div>
            <button type="submit" className="btn btn-primary my-3 mx-5"><Link className="nav-link"  to="/">Submit</Link></button>
        </form>
    </div>
  )
}

export default Login
