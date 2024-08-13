import React from 'react';
import { Link } from "react-router-dom";


function Login() {
  return (
    <div className='container'>
        <h1 className="login-heading text-center my-5">SignUp</h1>
        <form className='my-5'>
            <div className="form-group my-3">
                <label for="exampleInputName">Name</label>
                <input type="password" className="form-control" id="exampleInputPassword1" placeholder="Password"/>
            </div>
            <div className="form-group my-3">
                <label for="exampleInputEmail1">Email address</label>
                <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email"/>
                <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
            </div>
            <div className="form-group my-3">
                <label for="exampleInputPassword1">Password</label>
                <input type="password" className="form-control" id="exampleInputPassword1" placeholder="Password"/>
            </div>
            <div className="form-group my-3">
                <label for="exampleInputPassword1">Confirm Password</label>
                <input type="password" className="form-control" id="exampleInputPassword1" placeholder="Password"/>
            </div>
            <button type="submit" className="btn btn-primary my-3"><Link className="nav-link"  to="/">Submit</Link></button>
        </form>
    </div>
  )
}

export default Login
