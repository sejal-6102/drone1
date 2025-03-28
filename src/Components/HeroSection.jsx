import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import AOS from "aos";
import "aos/dist/aos.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "../index.css";
import WhatsAppChat from "./WhatsAppChat";
import image from "../assets/img/image1.png"; // Replace with correct path
import drone from "../assets/img/drone.png"; // Replace with correct path

const changingTexts = ["Thermal Fogging", "Crop Spraying", "Surveillance"];

const HeroSection = () => {
  const [textIndex, setTextIndex] = useState(0);

  useEffect(() => {
    // Initialize AOS
    AOS.init({ duration: 1200, once: true });

    const interval = setInterval(() => {
      setTextIndex((prevIndex) => (prevIndex + 1) % changingTexts.length);
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="hero-container container">
      <div className="row align-items-center">
        {/* Left Side - Text Content */}
        <div className="col-lg-6 col-md-12 text-content" data-aos="fade-right">
          <motion.h1
            className="hero-title"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >
            We build Drones for <br />
            <span className="changing-text">{changingTexts[textIndex]}</span>
          </motion.h1>

          <p className="hero-subtext" data-aos="fade-up">
            AG 365 – India’s 1st Multi Utility DGCA Certified Agri Drone. <br />
            Buying AG 365 is now easy with Govt Subsidy, Loan, and Insurance.
          </p>

          <motion.a
            href="#"
            className="btn btn-primary hero-button"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 1 }}
            data-aos="zoom-in"
          >
            Know More →
          </motion.a>
        </div>

        {/* Right Side - Images */}
        <div className="col-lg-6 col-md-12 hero-image-container">
          {/* Drone Image with Rise-in Animation */}
          <motion.div
            className="image-wrapper"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            whileHover={{ scale: 1.05 }}
            data-aos="fade-left"
          >
            <img src={drone} alt="Drone in Action" className="hero-image" />
          </motion.div>

          {/* Celebrating Clients Box with Rise-in Animation */}
          <motion.div
            className="client-box"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            whileHover={{ scale: 1.1 }}
            data-aos="flip-up"
          >
            <img src={image} alt="Happy Client" className="client-image" />
            <div className="client-text">
              <p>Celebrating Happy Clients</p>
              <strong>500+</strong>
            </div>
          </motion.div>
        </div>
      </div>

      <WhatsAppChat />
    </div>
  );
};

export default HeroSection;


// import React, { useState, useEffect } from "react";
// import { motion } from "framer-motion";
// import "bootstrap/dist/css/bootstrap.min.css";
// import "../index.css";
// import WhatsAppChat from "./WhatsAppChat";
// import image from "../assets/img/image1.png"; // Replace with correct path
// import drone from "../assets/img/drone.png"; // Replace with correct path

// const changingTexts = ["Thermal Fogging", "Crop Spraying", "Surveillance"];

// const HeroSection = () => {
//   const [textIndex, setTextIndex] = useState(0);

//   useEffect(() => {
//     const interval = setInterval(() => {
//       setTextIndex((prevIndex) => (prevIndex + 1) % changingTexts.length);
//     }, 4000);

//     return () => clearInterval(interval);
//   }, []);

//   return (
//     <div className="hero-container container">
//       <div className="row align-items-center">
//         {/* Left Side - Text Content */}
//         <div className="col-lg-6 col-md-12 text-content">
//           <motion.h1
//             className="hero-title"
//             initial={{ opacity: 0, y: 50 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 1 }}
//           >
//             We build Drones for <br />
//             <span className="changing-text">{changingTexts[textIndex]}</span>
//           </motion.h1>

//           <motion.p
//             className="hero-subtext"
//             initial={{ opacity: 0, y: 50 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 1, delay: 0.5 }}
//           >
//             AG 365 – India’s 1st Multi Utility DGCA Certified Agri Drone. <br />
//             Buying AG 365 is now easy with Govt Subsidy, Loan, and Insurance.
//           </motion.p>

//           <motion.a
//             href="#"
//             className="btn btn-primary hero-button"
//             initial={{ opacity: 0, y: 50 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 1, delay: 1 }}
//           >
//             Know More →
//           </motion.a>
//         </div>

//         {/* Right Side - Images */}
//         <div className="col-lg-6 col-md-12 hero-image-container">
//           {/* Drone Image with Rise-in Animation */}
//           <motion.div
//             className="image-wrapper"
//             initial={{ opacity: 0, y: 50 }} // Start lower
//             animate={{ opacity: 1, y: 0 }}  // Rise in
//             transition={{ duration: 0.8, ease: "easeOut" }} // Smooth transition
//             whileHover={{ scale: 1.05 }} // Hover effect
//           >
//             <img src={drone} alt="Drone in Action" className="hero-image" />
//           </motion.div>

//           {/* Celebrating Clients Box with Rise-in Animation */}
//           <motion.div
//             className="client-box"
//             initial={{ opacity: 0, y: 50 }} // Start lower
//             animate={{ opacity: 1, y: 0 }}  // Rise in
//             transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }} // Delay for effect
//             whileHover={{ scale: 1.1 }} // Hover effect
//           >
//             <img src={image} alt="Happy Client" className="client-image" />
//             <div className="client-text">
//               <p>Celebrating Happy Clients</p>
//               <strong>500+</strong>
//             </div>
//           </motion.div>
//         </div>
//       </div>

//       <WhatsAppChat />
//     </div>
//   );
// };

// export default HeroSection;



// import React, { useState, useEffect } from "react";
// import { motion } from "framer-motion";
// import "bootstrap/dist/css/bootstrap.min.css";
// import "../index.css";
// import WhatsAppChat from "./WhatsAppChat";
// import image from "../assets/img/image.png"; // Replace with correct path
// import drone from "../assets/img/drone.png"; // Replace with correct path

// const changingTexts = ["Thermal Fogging", "Crop Spraying", "Surveillance"];

// const HeroSection = () => {
//   const [textIndex, setTextIndex] = useState(0);

//   useEffect(() => {
//     const interval = setInterval(() => {
//       setTextIndex((prevIndex) => (prevIndex + 1) % changingTexts.length);
//     }, 4000);

//     return () => clearInterval(interval);
//   }, []);

//   return (
//     <div className="hero-container container">
//       <div className="row align-items-center">
//         {/* Left Side - Text Content */}
//         <div className="col-lg-6 col-md-12 text-content">
//           <motion.h1
//             className="hero-title"
//             initial={{ opacity: 0, y: 50 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 1 }}
//           >
//             We build Drones for <br />
//             <span className="changing-text">{changingTexts[textIndex]}</span>
//           </motion.h1>

//           <motion.p
//             className="hero-subtext"
//             initial={{ opacity: 0, y: 50 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 1, delay: 0.5 }}
//           >
//             AG 365 – India’s 1st Multi Utility DGCA Certified Agri Drone. <br />
//             Buying AG 365 is now easy with Govt Subsidy, Loan, and Insurance.
//           </motion.p>

//           <motion.a
//             href="#"
//             className="btn btn-primary hero-button"
//             initial={{ opacity: 0, y: 50 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 1, delay: 1 }}
//           >
//             Know More →
//           </motion.a>
//         </div>

//         <div className="col-lg-6 col-md-12 hero-image-container">
//           <motion.div
//             className="image-wrapper"
//             whileHover={{ scale: 1.05 }}
//             transition={{ duration: 0.3 }}
//           >
//             <img src={drone} alt="Drone in Action" className="hero-image" />
//           </motion.div>

//           {/* Celebrating Clients Box */}
//           <motion.div
//             className="client-box"
//             whileHover={{ scale: 1.1 }}
//             transition={{ duration: 0.3 }}
//           >
//             <img src={image} alt="Happy Client" className="client-image" />
//             <div className="client-text">
//               <p>Celebrating Happy Clients</p>
//               <strong>500+</strong>
//             </div>
//           </motion.div>
//         </div>
//       </div>

    
//       <WhatsAppChat />
//     </div>
//   );
// };

// export default HeroSection;



// import React, { useState, useEffect } from "react";
// import { motion } from "framer-motion";
// import "bootstrap/dist/css/bootstrap.min.css";
// import "../index.css";
// import WhatsAppChat from "./WhatsAppChat";
// import image from "../assets/img/image.png"; // Replace with correct path
// import drone from "../assets/img/drone.png"; // Replace with correct path

// const changingTexts = ["Thermal Fogging", "Crop Spraying", "Surveillance"];

// const HeroSection = () => {
//   const [textIndex, setTextIndex] = useState(0);

//   useEffect(() => {
//     const interval = setInterval(() => {
//       setTextIndex((prevIndex) => (prevIndex + 1) % changingTexts.length);
//     }, 4000);

//     return () => clearInterval(interval);
//   }, []);

//   return (
//     <div className="hero-container container">
//       <div className="row align-items-center">
//         {/* Left Side - Text Content */}
//         <div className="col-lg-6 text-content">
//           <motion.h1
//             className="hero-title"
//             initial={{ opacity: 0, y: 50 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 1 }}
//           >
//             We build Drones for <br />
//             <span className="changing-text">{changingTexts[textIndex]}</span>
//           </motion.h1>

//           <motion.p
//             className="hero-subtext"
//             initial={{ opacity: 0, y: 50 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 1, delay: 0.5 }}
//           >
//             AG 365 – India’s 1st Multi Utility DGCA Certified Agri Drone. <br />
//             Buying AG 365 is now easy with Govt Subsidy, Loan, and Insurance.
//           </motion.p>

//           <motion.a
//             href="#"
//             className="btn btn-primary hero-button"
//             initial={{ opacity: 0, y: 50 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 1, delay: 1 }}
//           >
//             Know More →
//           </motion.a>
//         </div>

//         {/* Right Side - Image & Celebrating Clients */}
//         <div className="col-lg-6 hero-image-container">
//           <motion.div
//             className="image-wrapper"
//             whileHover={{ scale: 1.05 }}
//             transition={{ duration: 0.3 }}
//           >
//             <img src={image} alt="Drone in Action" className="hero-image" />
//           </motion.div>

//           {/* Celebrating Clients Box */}
//           <motion.div
//             className="client-box"
//             whileHover={{ scale: 1.1 }}
//             transition={{ duration: 0.3 }}
//           >
//             <img src={drone} alt="Happy Client" className="client-image" />
//             <div className="client-text">
//               <p>Celebrating Happy Clients</p>
//               <strong>500+</strong>
//             </div>
//           </motion.div>
//         </div>
//       </div>

//       {/* Floating WhatsApp Chat */}
//       <WhatsAppChat />
//     </div>
//   );
// };

// export default HeroSection;



// import React, { useState, useEffect } from "react";
// import { motion } from "framer-motion";
// import "bootstrap/dist/css/bootstrap.min.css";
// import "../index.css";
// import WhatsAppChat from "./WhatsAppChat";

// const changingTexts = ["Thermal Fogging", "Crop Spraying", "Surveillance"];

// const HeroSection = () => {
//   const [textIndex, setTextIndex] = useState(0);

//   useEffect(() => {
//     const interval = setInterval(() => {
//       setTextIndex((prevIndex) => (prevIndex + 1) % changingTexts.length);
//     }, 4000); // Change text every 4 seconds

//     return () => clearInterval(interval);
//   }, []);

//   return (
//     <div className="hero-container">
//       <div className="container d-flex flex-column align-items-start">
//         {/* Text with Rise Animation */}
//         <motion.h1
//           className="hero-title"
//           initial={{ opacity: 0, y: 50 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 1 }}
//         >
//           We build Drones for <br />
//           <span className="changing-text">{changingTexts[textIndex]}</span>
//         </motion.h1>

//         <motion.p
//           className="hero-subtext"
//           initial={{ opacity: 0, y: 50 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 1, delay: 0.5 }}
//         >
//           AG 365 – India’s 1st Multi Utility DGCA Certified Agri Drone. <br />
//           Buying AG 365 is now easy with Govt Subsidy, Loan, and Insurance.
//         </motion.p>

//         {/* Button */}
//         <motion.a
//           href="#"
//           className="btn btn-primary hero-button"
//           initial={{ opacity: 0, y: 50 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 1, delay: 1 }}
//         >
//           Know More →
//         </motion.a>
//       </div>

//       {/* Floating WhatsApp Chat */}
//       <WhatsAppChat />
//     </div>
//   );
// };

// export default HeroSection;
