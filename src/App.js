import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home/Home.jsx";
import AboutUs from "./pages/About/AboutUs.jsx";
import ContactPage from "./pages/ContactPage/ContactPage.jsx";
import WhyChooseUs from "./pages/WhyChooseUs/WhyChooseUs.jsx";
import Blogs from "./pages/Blogs/Blogs.jsx";
import CoreTeam from "./pages/CoreTeam/CoreTeam.jsx";
import ScrollToTop from "./ScrollToTop.js";
// import About from "./pages/About";
// import WhyChooseUs from "./pages/WhyChooseUs";
// import OurPartners from "./pages/OurPartners";
// import CoreTeam from "./pages/CoreTeam";
// import Blogs from "./pages/Blogs";
// import Contact from "./pages/Contact";
// import Dealer from "./pages/Dealer";

function App() {
  return (
    <Router>
    <ScrollToTop />
      {/* <Navbar /> */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/why-choose-us" element={<WhyChooseUs />} />
        <Route path="/blogs" element={<Blogs />} />
        <Route path="/core-team" element={<CoreTeam />} />

        {/* <Route path="/why-choose-us" element={<WhyChooseUs />} />
        <Route path="/our-partners" element={<OurPartners />} />
        <Route path="/core-team" element={<CoreTeam />} />
        <Route path="/blogs" element={<Blogs />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/dealer" element={<Dealer />} /> */}
      </Routes>
    </Router>
  );
}

export default App;



// import './App.css';
// import Home from './pages/Home/Home';

// function App() {
//   return (
//     <>
//     <Home />
      
//     </>

//   );
// }

// export default App;
