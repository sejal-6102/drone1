import React, { useEffect } from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import { FaLinkedin } from "react-icons/fa";
import AOS from "aos";
import "aos/dist/aos.css";
import Navbar from "../../Components/Navbar";
import Footer from "../../Components/Footer";
import WhatsAppChat from "../../Components/WhatsAppChat";
import "./Aboutus.css";
import image from "../../assets/img/image1.png";

const cofounders = [
  { name: "Prem Kumar Vislawath", image: "/co.png", linkedin: "#" },
  { name: "Sai Kumar Chinthala", image: "/co.png", linkedin: "#" },
  { name: "Suraj Peddi", image: "/co.png", linkedin: "#" },
];

const AboutUs = () => {
  useEffect(() => {
    AOS.init({ duration: 1000, easing: "ease-in-out", once: true });
  }, []);

  return (
    <>
      <Navbar />
      <div className="about-us-section">
        <div className="about-us-bg"   style={{
        backgroundImage: `url(${image})`,
      }}></div>
        <div className="about-us-content" data-aos="fade-up">
          <p className="small-text">About Us</p>
          <h1 className="main-text">What started as an Idea is now more than that</h1>
        </div>
      </div>

      <Container className="py-5 text-center" data-aos="fade-right">
        <h2>Welcome to Dronum Pvt Ltd</h2>
        <p>
        Dronum India Aviation – Your Premier RPTO for Drone Training in Jaipur, Rajasthan<br />
        Dronum India Aviation is a remote pilot training organization approved by DGCA. We help you attain high-quality, hand-on-the-throttle theoretical <br />
         knowledge about drones, from flight hours to drone manufacturer approved certification for flying in several states and cities of our country.
        </p>
      </Container>

      <Container className="py-5">
        <Row className="align-items-center">
          <Col md={6} data-aos="fade-right">
            <img src="image2.png" alt="Drone Technology" className="img-fluid drone-img" />
          </Col>
          <Col md={6} data-aos="fade-left" className="vision-mission">
            <h3>Vision</h3>
            <p>
              Our journey began with a vision to pioneer advancements that address the most pressing
              global challenges. We leverage drone technology to drive positive change worldwide.
            </p>
            <h3>Mission</h3>
            <p>
              At Marut Dronetech, we firmly believe in the transformative potential of technology
              and are dedicated to harnessing it for a better future. We aim to reshape industries,
              empower communities, and promote sustainability.
            </p>
          </Col>
        </Row>
      </Container>

      <Container className="nutshell-section">
        <Row>
          <Col lg={6} data-aos="fade-up">
            <h2 className="nutshell-title">Marut in a Nutshell</h2>
            <p>
              From enhancing agricultural productivity to combating diseases and facilitating
              environmentally friendly aerial seeding, our diverse drone solutions create a
              lasting impact.
            </p>
          </Col>
          <Col lg={6} className="d-flex justify-content-center align-items-center">
            <div className="image-stack">
              <img src="/d1.png" alt="Drone Image 1" className="nutshell-image top-image" data-aos="flip-left" />
              <img src="/d2.png" alt="Drone Image 2" className="nutshell-image middle-image" data-aos="flip-right" />
              <img src="/d3.png" alt="Drone Image 3" className="nutshell-image bottom-image" data-aos="zoom-in" />
            </div>
          </Col>
        </Row>
      </Container>

      <div className="co-founder">
        <Container className="text-center my-5">
          <h2 className="mb-4" data-aos="fade-down">Our Co-Founders</h2>
          <Row className="justify-content-center">
            {cofounders.map((founder, index) => (
              <Col key={index} md={4} sm={12} className="mb-4" data-aos="fade-up" data-aos-delay={index * 200}>
                <Card className="border-0 shadow-sm rounded-3 cofounder-card">
                  <Card.Img variant="top" src={founder.image} className="rounded-3" />
                  <Card.Body>
                    <Card.Title>{founder.name}</Card.Title>
                    <a href={founder.linkedin} target="_blank" rel="noopener noreferrer">
                      <FaLinkedin size={24} color="#0077b5" />
                    </a>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>
        </Container>
      </div>

      <Footer />
      <WhatsAppChat />
    </>
  );
};

export default AboutUs;




// import React from "react";
// import { Container, Row, Col,Card} from "react-bootstrap";
// import { motion } from "framer-motion";
// import "bootstrap/dist/css/bootstrap.min.css";
// import "./Aboutus.css"; // Custom CSS for styling
// import { FaLinkedin } from "react-icons/fa";
// import Navbar from "../../Components/Navbar";
// import Footer from "../../Components/Footer";
// import WhatsAppChat from "../../Components/WhatsAppChat";


// const nutshellVariants = {
//     hidden: { opacity: 0, scale: 0.5 },
//     visible: (delay) => ({
//       opacity: 1,
//       scale: 1,
//       transition: { duration: 0.8, delay },
//     }),
//   };

//   const cofounders = [
//     {
//       name: "Prem Kumar Vislawath",
//       image: "/co1.png", // Replace with actual image path
//       linkedin: "#",
//     },
//     {
//       name: "Sai Kumar Chinthala",
//       image: "/co1.png", // Replace with actual image path
//       linkedin: "#",
//     },
//     {
//       name: "Suraj Peddi",
//       image: "/co1.png", // Replace with actual image path
//       linkedin: "#",
//     },
//   ];


// const AboutUs = () => {
//   return (
//     <>
//     <Navbar />
//     <div className="about-us-section position-relative text-center">
//       {/* Background Image */}
//       <div className="about-us-bg"></div>

//       {/* Animated Text */}
//       <div className="about-us-content">
//         <motion.p
//           initial={{ opacity: 0, y: 50 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 1.5, ease: "easeOut" }}
//           className="small-text"
//         >
//           About Us
//         </motion.p>

//         <motion.h1
//           initial={{ opacity: 0, y: 50 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 2, ease: "easeOut", delay: 0.3 }}
//           className="main-text"
//         >
//           What started as an Idea is <br /> now more than that
//         </motion.h1>
//       </div>
//     </div>



//     <Container className="py-5">
//       <Row className="text-center mb-4">
//         <Col>
//           <h2>Welcome to Marut Dronetech Pvt Ltd</h2>
//           <p>
           
// Welcome to Marut Dronetech Pvt Ltd, where innovation meets purpose. As a dynamic force <br></br>
// in the realm of cutting-edge drone technology, we are committed to revolutionizing <br></br>industries and fostering sustainable progress.
//           </p>
//         </Col>
//       </Row>

//       <Row className="align-items-center">
//         <Col md={6}>
//           <motion.img
//             src="image2.png"
//             alt="Drone Technology"
//             className="img-fluid"
//             initial={{ opacity: 0, x: -80, rotate: -20 }}
//             animate={{ opacity: 1, x: 20, rotate: 0 }}
//             transition={{ duration: 2, ease: "easeOut" }}
//             style={{ position: "relative", left: "-160px",height:"700px" }} 
//           />
//         </Col>
        
//         <Col md={6}  style={{ position: "relative", left: "-80px",color:"gray" }}>
//           <h3 className="custom-heading">Vision</h3>
//           <p>
//             Our journey began with a vision, a vision to transcend boundaries and pioneer advancements that 
//             address the most pressing global challenges. Driven by a passion for positive change, 
//             we have been relentless in our pursuit of leveraging the power of drones for the greater good.
//           </p>

//           <h3 className="custom-heading">Mission</h3>
//           <p>
//             At Marut Dronetech, we firmly believe in the transformative potential of technology, 
//             and we are dedicated to harnessing it in service of a better, more inclusive future. 
//             Through our unwavering commitment to excellence and innovation, 
//             we strive to reshape industries, empower communities, and pave the way for a sustainable tomorrow.
//           </p>
//         </Col>
//       </Row>
//     </Container>
//     <Container className="nutshell-section">
//       <Row>
//         <Col lg={6}>
//           <h2 className="nutshell-title">Marut in a Nutshell</h2>
//           <p className="nutshell-text">
//             From enhancing agricultural productivity and ensuring efficient healthcare logistics to combating the proliferation of mosquito-borne diseases and facilitating environmentally friendly aerial seeding, our diverse range of drone solutions is meticulously crafted to create a tangible, lasting impact.
//           </p>
//         </Col>
//         <Col lg={6} className="d-flex justify-content-center align-items-center">
//           <div className="image-stack">
//             <motion.img
//               src="/d1.png"
//               alt="Drone Image 1"
//               className="nutshell-image top-image"
//               variants={nutshellVariants}
//               initial="hidden"
//               animate="visible"
//               custom={0.20}
//             />
//             <motion.img
//               src="/d2.png"
//               alt="Drone Image 2"
//               className="nutshell-image middle-image"
//               variants={nutshellVariants}
//               initial="hidden"
//               animate="visible"
//               custom={0.5}
//             />
//             <motion.img
//               src="/d2.png"
//               alt="Drone Image 3"
//               className="nutshell-image bottom-image"
//               variants={nutshellVariants}
//               initial="hidden"
//               animate="visible"
//               custom={0.8}
//             />
//           </div>
//         </Col>
//       </Row>
//     </Container>
//     <div className="co-founder">
//     <Container className="text-center my-5 co">
//       <h2 className="mb-4">Our Co-Founders</h2>
//       <Row className="justify-content-center">
//         {cofounders.map((founder, index) => (
//           <Col key={index} md={4} sm={12} className="mb-4">
//             <Card className="border-0 shadow-sm rounded-3">
//               <Card.Img
//                 variant="top"
//                 src={founder.image}
//                 className="rounded-3"
//               />
//               <Card.Body>
//                 <Card.Title>{founder.name}</Card.Title>
//                 <a href={founder.linkedin} target="_blank" rel="noopener noreferrer">
//                   <FaLinkedin size={24} color="#0077b5" />
//                 </a>
//               </Card.Body>
//             </Card>
//           </Col>
//         ))}
//       </Row>
//     </Container>
//     </div>
//     <Footer />
//     <WhatsAppChat />
//     </>
//   );
// };

// export default AboutUs;
