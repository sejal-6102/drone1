import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home/Home.jsx";
import AboutUs from "./pages/About/AboutUs.jsx";
import ContactPage from "./pages/ContactPage/ContactPage.jsx";
import WhyChooseUs from "./pages/WhyChooseUs/WhyChooseUs.jsx";
import Blogs from "./pages/Blogs/Blogs.jsx";
import CoreTeam from "./pages/CoreTeam/CoreTeam.jsx";
import ScrollToTop from "./ScrollToTop.js";


function App() {
  return (
    <Router>
    <ScrollToTop />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/why-choose-us" element={<WhyChooseUs />} />
        <Route path="/blogs" element={<Blogs />} />
        <Route path="/core-team" element={<CoreTeam />} />

  
      </Routes>
    </Router>
  );
}

export default App;