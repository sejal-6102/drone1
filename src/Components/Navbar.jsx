import React from "react";
import { Link ,useNavigate} from "react-router-dom"; // Import Link from React Router
import "bootstrap/dist/css/bootstrap.min.css";
import "../index.css";

const Navbar = () => {

  const navigate = useNavigate();

  const handleNavigateToPartners = (e) => {
    e.preventDefault(); // Prevent default link behavior
    navigate("/#our-partners"); // Navigate to home with hash
  };
  return (
    <nav className="navbar navbar-expand-lg bg-white shadow-sm sticky-top">
      <div className="container">
        {/* Logo */}
        <Link className="navbar-brand" to="/">
          <img src="logo.png" alt="My App" height="90" />
        </Link>

        {/* Mobile Toggle Button */}
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

        {/* Navbar Links (Collapsible) */}
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

          {/* Right-Side Button (Moves Inside Toggle on Mobile) */}
          {/* <div className="d-lg-none text-center mt-3">
            <Link className="btn btn-danger w-100" to="/dealer">Become a Dealer</Link>
          </div> */}
        </div>

        {/* Right-Side Button (Visible on Large Screens) */}
        {/* <div className="d-none d-lg-block">
          <Link className="btn btn-danger px-3" to="/dealer">Become a Dealer</Link>
        </div> */}
      </div>
    </nav>
  );
};

export default Navbar;




// import React from "react";
// import "bootstrap/dist/css/bootstrap.min.css";
// import "../index.css";

// const Navbar = () => {
//   return (
//     <nav className="navbar navbar-expand-lg bg-white shadow-sm sticky-top">
//       <div className="container">
//         {/* Logo */}
//         <a className="navbar-brand" href="/">
//           <img src="logo.png" alt="My App" height="90" />
//         </a>

//         {/* Mobile Toggle Button */}
//         <button
//           className="navbar-toggler"
//           type="button"
//           data-bs-toggle="collapse"
//           data-bs-target="#navbarNav"
//           aria-controls="navbarNav"
//           aria-expanded="false"
//           aria-label="Toggle navigation"
//         >
//           <span className="navbar-toggler-icon"></span>
//         </button>

//         {/* Navbar Links (Collapsible) */}
//         <div className="collapse navbar-collapse justify-content-center" id="navbarNav">
//           <ul className="navbar-nav text-center">
//             <li className="nav-item"><a className="nav-link" href="#">Home</a></li>
//             <li className="nav-item"><a className="nav-link" href="#">About Us</a></li>
//             <li className="nav-item"><a className="nav-link" href="#">Why Choose Us</a></li>
//             <li className="nav-item"><a className="nav-link" href="#">Our Partners</a></li>
//             <li className="nav-item"><a className="nav-link" href="#">Core Team</a></li>
//             <li className="nav-item"><a className="nav-link" href="#">Blogs</a></li>
//             <li className="nav-item"><a className="nav-link" href="#">Contact Us</a></li>
//           </ul>

//           {/* Right-Side Button (Moves Inside Toggle on Mobile) */}
//           <div className="d-lg-none text-center mt-3">
//             <a className="btn btn-danger w-100" href="#">Become a Dealer</a>
//           </div>
//         </div>

//         {/* Right-Side Button (Visible on Large Screens) */}
//         <div className="d-none d-lg-block">
//           <a className="btn btn-danger px-3" href="#">Become a Dealer</a>
//         </div>
//       </div>
//     </nav>
//   );
// };

// export default Navbar;
