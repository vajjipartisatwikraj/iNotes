import React from 'react';
import { Link } from "react-router-dom";


function Login() {
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
            <button type="submit" className="btn btn-primary my-3 mx-4"><Link className="nav-link"  to="/">Submit</Link></button>
            <div class="card text-bg-primary mb-3">
  <div class="card-header">Header</div>
  <div class="card-body">
    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
  </div>
</div>
        </form>
    </div>
  )
}

export default Login
