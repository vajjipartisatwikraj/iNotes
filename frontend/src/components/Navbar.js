import React from "react";
import { Link, useLocation } from "react-router-dom";
import { useNavigate } from 'react-router-dom'; //Used to set endpoint and NAVIGATE to that specific endpoint


const Navbar = () => {

  let location = useLocation();

  let navigate = useNavigate();

  const logoutClick=()=>{
    localStorage.removeItem("token")
    navigate('/login')
    
  }
  
  return (
  <nav className="navbar navbar-expand-lg navbar-dark bg-dark ">
    <div className="container-fluid">
      <a className="navbar-brand" href="/">iNoteBook</a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link className={`nav-link ${location.pathname === "/"?"active":""}`} aria-current="page" to="/">Home</Link>
            </li>
            <li className="nav-item">
              <Link className={`nav-link ${location.pathname === "/about"?"active":""}`}  to="/about">About</Link>
            </li>
          </ul>
        </div>
    </div>
    {!localStorage.getItem('token')?<div className="d-flex justify-content-between"><button type="button" className="btn btn-primary mx-2 my-1"><Link className="nav-link"  to="/login">LogIn</Link></button>
    <button type="button" className="btn btn-primary mx-2 my-1"><Link className="nav-link"  to="/signup">SignUp</Link></button></div>:<button className="btn btn-primary mx-3" onClick={logoutClick}>Logout</button>}
  </nav>
  );
};

export default Navbar;
