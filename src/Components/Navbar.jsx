import React from "react";
import { Link ,useNavigate} from "react-router-dom"; 
import "bootstrap/dist/css/bootstrap.min.css";
import "../index.css";

const Navbar = () => {

  const navigate = useNavigate();

  const handleNavigateToPartners = (e) => {
    e.preventDefault(); 
    navigate("/#our-partners"); 
  };
  return (
    <nav className="navbar navbar-expand-lg bg-white shadow-sm sticky-top">
      <div className="container">
       
        <Link className="navbar-brand" to="/">
          <img src="logo.png" alt="My App" height="90" />
        </Link>

       
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

  
        <div className="collapse navbar-collapse justify-content-center" id="navbarNav">
          <ul className="navbar-nav text-center">
            <li className="nav-item"><Link className="nav-link" to="/">Home</Link></li>
            <li className="nav-item"><Link className="nav-link" to="/about">About Us</Link></li>
            <li className="nav-item"><Link className="nav-link" to="/why-choose-us">Why Choose Us</Link></li>
            <li className="nav-item">  <a className="nav-link" href="#our-partners"  onClick={handleNavigateToPartners}>Our Partners</a></li>
            <li className="nav-item"><Link className="nav-link" to="/core-team">Core Team</Link></li>
            <li className="nav-item"><Link className="nav-link" to="/blogs">Blogs</Link></li>
            <li className="nav-item"><Link className="nav-link" to="/contact">Contact Us</Link></li>
          </ul>

       
        </div>

       
      </div>
    </nav>
  );
};

export default Navbar;




