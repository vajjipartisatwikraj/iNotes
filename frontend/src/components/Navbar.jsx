import React from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";

const Navbar = ({ isAuthenticated, setIsAuthenticated }) => {

  let location = useLocation();
  let navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem('token');
    setIsAuthenticated(false);
    navigate('/login');
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
    {!isAuthenticated ? (
      <>
        <button type="button" className="btn btn-primary mx-2 my-1"><Link className="nav-link"  to="/login">LogIn</Link></button>
        <button type="button" className="btn btn-primary mx-2 my-1"><Link className="nav-link"  to="/signup">SignUp</Link></button>
      </>
    ) : (
      <button type="button" className="btn btn-primary mx-2 my-1" onClick={handleLogout}>Logout</button>
    )}
  </nav>
  );
};

export default Navbar;
