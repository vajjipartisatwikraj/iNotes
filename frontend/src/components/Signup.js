import React, {useState} from 'react';
import { useNavigate } from "react-router-dom";


function SignUp() {

  let navigate = useNavigate();

  const [ credentials, setCredentials] = useState({ name:"", email: "", password: "", cpassword:""})

  const onChange=(e)=>{
    setCredentials({...credentials, [e.target.name]:e.target.value})
  }

  //Fetching API to SignUp the USER using name, email and password by Accessing his SignedIn AUTH-TOKEN
  const handleSubmit= async (e)=>{
    e.preventDefault();
    if(credentials.password===credentials.cpassword){
        const response = await fetch(`https://inotes-h2op.onrender.com/api/auth/createuser`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({name: credentials.name, email: credentials.email, password: credentials.password})
        });
        const json = await response.json();
        if(json.success){
            localStorage.setItem('token', json.authToken)
            navigate("/")
        }
        else{
          alert("Invalid credentials")
        }
    }
    else{
        alert("password not match")
    }
  }

  return (
    <div className='container'>
        <h1 className="login-heading text-center my-5">SignUp</h1>
        <form className='my-5' onSubmit={handleSubmit}>
            <div className="form-group my-3 mx-4">
                <label htmlFor="exampleInputName">Name</label>
                <input name="name" id='name' onChange={onChange} value={credentials.name} type="text" className="form-control"  placeholder="Enter your name" required/>
            </div>
            <div className="form-group my-3 mx-4">
                <label htmlFor="exampleInputEmail1">Email address</label>
                <input name='email' id='email' onChange={onChange} value={credentials.email} type="email" className="form-control"  aria-describedby="emailHelp" placeholder="Enter email" minLength={5} required/>
                <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
            </div>
            <div className="form-group my-3 mx-4">
                <label htmlFor="exampleInputPassword1">Password</label>
                <input name='password' id='password' onChange={onChange} value={credentials.password} type="password" className="form-control"  placeholder="Password" minLength={5} required/>
            </div>
            <div className="form-group my-3 mx-4">
                <label htmlFor="exampleInputPassword2">Confirm Password</label>
                <input name='cpassword' id='cpassword' onChange={onChange} value={credentials.cpassword} type="password" className="form-control" placeholder="Re-Enter your Password" minLength={5} required/>
            </div>
            <button type="submit" className="btn btn-primary my-3 mx-5">Submit</button>
        </form>
    </div>
  )
}

export default SignUp
