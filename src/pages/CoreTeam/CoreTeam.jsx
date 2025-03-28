import React, { useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "../../Components/Navbar";
import AOS from "aos";
import "aos/dist/aos.css";
import Footer from "../../Components/Footer";

const CoreTeam = () => {
  useEffect(() => {
    AOS.init({ duration: 1000, once: false });
  }, []);

  const teamMembers = [
    {
      name: "Jeffrey Brown",
      role: "Creative Leader",
      image: "/d1.png",
    },
    {
      name: "Alex Greenfield",
      role: "Programming Guru",
      image: "/d2.png",
    },
    {
      name: "Linda Larson",
      role: "Manager",
      image: "d3.png",
    },
    {
      name: "Ann Richmond",
      role: "Sales Manager",
      image: "d1.png",
    },
  ];

  return (
    <>
      <Navbar />
      <div>
        {/* Hero Section */}
        <div
          className="hero-section text-center text-white d-flex flex-column justify-content-center align-items-center position-relative"
          style={{
            backgroundImage: `url('/team.png')`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            height: "70vh",
            backgroundColor: "#001F3F",
          }}
        >
          <div className="container" data-aos="fade-up">
            <h1 className="fw-bold">Meet Our Team</h1>
            <p className="mt-2">
              Dedicated professionals working together to achieve excellence.
            </p>
            <div className="mt-4">
              <button className="btn btn-light me-2 px-4 py-2 fw-bold">WHY JOIN?</button>
              <button className="btn btn-outline-light px-4 py-2 fw-bold">OUR VISION</button>
            </div>
          </div>
        </div>

        {/* Category Section */}
        <div className="container-fluid  text-white pb-5 position-relative" style={{ marginTop: "-80px" ,backgroundColor: "#0A1931"}}>
          <div className="row justify-content-center g-4">
            {[{ title: "INNOVATION", icon: "🚀" }, { title: "TEAMWORK", icon: "🤝" }, { title: "LEADERSHIP", icon: "🎯" }, { title: "GROWTH", icon: "📈" }].map((item, index) => (
              <div key={index} className="col-md-3 col-sm-6 d-flex justify-content-center" data-aos="fade-up" data-aos-delay={index * 200}>
                <div className="card text-center p-4 shadow-lg" style={{ width: "280px", height: "200px", backgroundColor: "#8B0000", color: "white", fontSize: "1.1rem", display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center", borderRadius: "12px" }}>
                  <div style={{ fontSize: "2.2rem" }}>{item.icon}</div>
                  <h6 className="fw-bold mt-2">{item.title}</h6>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Core Team Section */}
      <section className="container my-5" style={{ maxWidth: "1200px" }}>
        <div className="row align-items-center" style={{ minHeight: "600px" }}>
          <div className="col-lg-5 text-center" data-aos="zoom-in">
            <img src="/image2.png" alt="About Us" className="img-fluid rounded-circle" style={{ width: "300px", height: "300px", objectFit: "cover", border:"4px red" }} />
          </div>
          <div className="col-lg-7 mt-4 mt-lg-0" data-aos="fade-left">
            <h1 className="fw-bold display-4 text-dark">Core Team</h1>
            <p className="fs-5 text-dark">
              Meet the minds behind our success. We work together to create a better future.
            </p>
            <button className="btn text-white px-5 py-3" style={{ backgroundColor: "#8B0000", borderRadius: "40px", fontSize: "1.25rem" }}>JOIN US</button>
          </div>
        </div>
      </section>

      {/* Our Team Section */}
      <div className="container-fluid text-white py-5 "  style={{ backgroundColor: "#0A1931", color: "white", padding: "5rem 0" }}>
        <div className="text-center mb-4" data-aos="fade-up">
          <h1 className="fw-bold">Our Creative Team</h1>
          <p className="text-secondary">Passionate professionals committed to excellence.</p>
        </div>
        <div className="container">
          <div className="row justify-content-center">
            {teamMembers.map((member, index) => (
              <div key={index} className="col-md-6 d-flex justify-content-center mb-4" data-aos="fade-up" data-aos-delay={index * 200}>
                <div className="position-relative">
                  <img src={member.image} alt={member.name} className="img-fluid rounded shadow-lg" style={{ width: "100%", maxWidth: "400px", borderRadius: "10px" }} />
                  <div className="card bg-white text-dark p-3 shadow position-absolute" style={{ bottom: "-20px", left: "50%", transform: "translateX(-50%)", width: "80%", maxWidth: "280px", borderRadius: "10px" }}>
                    <h5 className="fw-bold text-center">{member.name}</h5>
                    <p className="text-muted text-uppercase small text-center">{member.role}</p>
                    <div className="d-flex justify-content-center gap-2">
                      <i className="bi bi-facebook"></i>
                      <i className="bi bi-twitter"></i>
                      <i className="bi bi-instagram"></i>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="text-center mt-4" data-aos="fade-up">
          <button className="btn btn-outline-light">Learn More</button>
        </div>
      </div>
      <div style={{ backgroundColor: "white", height:"20px",width:"100%" }} ></div>
      <Footer />
    </>
  );
};

export default CoreTeam;





// import React from "react";
// import "bootstrap/dist/css/bootstrap.min.css";
// import Navbar from "../../Components/Navbar";

// const CoreTeam = () => {


//     const teamMembers = [
//         {
//           name: "Jeffrey Brown",
//           role: "Creative Leader",
//           image: "/d1.png", // Replace with actual images
//         },
//         {
//           name: "Alex Greenfield",
//           role: "Programming Guru",
//           image: "/d2.png",
//         },
//         {
//           name: "Linda Larson",
//           role: "Manager",
//           image: "/d1.png",
//         },
//         {
//           name: "Ann Richmond",
//           role: "Sales Manager",
//           image: "/d2.png",
//         },
//       ];
//   return (
//     <>
//     <Navbar />
//     <div>
//       {/* Hero Section */}
//       <div
//         className="hero-section text-center text-white d-flex flex-column justify-content-center align-items-center position-relative"
//         style={{
//           backgroundImage: `url('/team.png')`,
//           backgroundSize: "cover",
//           backgroundPosition: "center",
//           height: "70vh",
//         }}
//       >
//         <div className="container">
//           <h1 className="fw-bold">Where Can I Camp?</h1>
//           <p className="mt-2">
//             Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
//             Duis aute irure dolor in reprehenderit in voluptate velit.
//           </p>
//           <div className="mt-4">
//             <button className="btn btn-light me-2 px-4 py-2 fw-bold">WHY CAMP?</button>
//             <button className="btn btn-outline-light px-4 py-2 fw-bold">HOW TO CAMP</button>
//           </div>
//           <p className="mt-5 text-uppercase small">Images from Freepik</p>
//         </div>
//       </div>

//  {/* Category Section */}
// <div className="container-fluid bg-white pb-5 position-relative" style={{ marginTop: "-80px" }}>
//   <div className="row justify-content-center g-20"> {/* Reduced gap */}
//     {[
//       { title: "TREKKING", icon: "🏔️" },
//       { title: "CAMPING", icon: "🏕️" },
//       { title: "BEACH TENTS", icon: "⛺" },
//       { title: "NEWS & EVENTS", icon: "🔥" },
//     ].map((item, index) => (
//       <div key={index} className="col-md-3 col-sm-6 d-flex justify-content-center">
//         <div
//           className="card text-center p-4 shadow-lg"
//           style={{
//             width: "280px",  // Slightly reduced width
//             height: "200px",  // Slightly reduced height
//             backgroundColor: "#9b8a67",
//             color: "white",
//             fontSize: "1.1rem",
//             display: "flex",
//             flexDirection: "column",
//             justifyContent: "center",
//             alignItems: "center",
//             marginBottom:"40px",
//             marginTop:"60px",
           
//             borderRadius: "12px",
//           }}
//         >
//           <div style={{ fontSize: "2.2rem" }}>{item.icon}</div> {/* Adjusted icon size */}
//           <h6 className="fw-bold mt-2">{item.title}</h6> {/* Reduced spacing */}
//         </div>
//       </div>
//           ))}
//         </div>
//       </div>
    
//     </div>
//     <section className="container my-5" style={{ maxWidth: "1200px" }}>
//       <div className="row align-items-center" style={{ minHeight: "600px" }}>
//         {/* Image Section */}
//         <div className="col-lg-5 text-center">
//           <div
//             className="position-relative d-inline-block"
//             style={{
//               width: "400px",
//               height: "400px",
//               borderRadius: "50%",
//               overflow: "hidden",
//               border: "10px solid #9b8a67",
//             }}
//           >
//             <img
//               src="/d1.png"
//               alt="About Us"
//               className="img-fluid"
//               style={{ width: "100%", height: "100%", objectFit: "cover" }}
//             />
//           </div>
//         </div>

//         {/* Text Section */}
//         <div className="col-lg-7 mt-4 mt-lg-0">
//           <h1 className="fw-bold display-4">Core Team</h1>
//           <p className="fs-5">
//             Paragraph. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
//             Curabitur id suscipit ex. Suspendisse rhoncus laoreet purus quis
//             elementum. Phasellus sed efficitur dolor, et ultricies sapien.
//             Quisque fringilla sit amet dolor commodo efficitur.
//           </p>
        

//           {/* Button */}
//           <button
//             className="btn text-white px-5 py-3"
//             style={{
//               backgroundColor: "#9b8a67",
//               borderRadius: "40px",
//               fontSize: "1.25rem",
//             }}
//           >
//             JOIN NOW
//           </button>
//         </div>
//       </div>
//     </section>



//     <div className="container-fluid bg-dark text-white py-5">
//       {/* Title Section */}
//       <div className="text-center mb-4">
//         <h1 className="fw-bold">Our Creative Team</h1>
//         <p className="text-secondary">
//           Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
//         </p>
//         <p className="text-uppercase fw-bold small">Images from <span className="text-white">Freepik</span></p>
//       </div>

//       {/* Team Members Section (Grid Layout) */}
//       <div className="container">
//         <div className="row justify-content-center">
//           {teamMembers.map((member, index) => (
//             <div key={index} className="col-md-6 d-flex justify-content-center mb-4">
//               <div className="position-relative">
//                 {/* Image */}
//                 <img
//                   src={member.image}
//                   alt={member.name}
//                   className="img-fluid rounded shadow-lg"
//                   style={{ width: "100%", maxWidth: "400px", borderRadius: "10px" }}
//                 />
//                 {/* Info Card */}
//                 <div
//                   className="card bg-white text-dark p-3 shadow position-absolute"
//                   style={{
//                     bottom: "-20px",
//                     left: "50%",
//                     transform: "translateX(-50%)",
//                     width: "80%",
//                     maxWidth: "280px",
//                     borderRadius: "10px",
//                   }}
//                 >
//                   <h5 className="fw-bold text-center">{member.name}</h5>
//                   <p className="text-muted text-uppercase small text-center">{member.role}</p>
//                   <div className="d-flex justify-content-center gap-2">
//                     <i className="bi bi-facebook"></i>
//                     <i className="bi bi-twitter"></i>
//                     <i className="bi bi-instagram"></i>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>

//       {/* Button */}
//       <div className="text-center mt-4">
//         <button className="btn btn-outline-light">Learn More</button>
//       </div>
//     </div>
//     </>
//   );
// };

// export default CoreTeam;



// import React from "react";
// import { motion } from "framer-motion";
// import { Card, Button, Row, Col } from "react-bootstrap";
// import "bootstrap/dist/css/bootstrap.min.css";
// import Navbar from "../../Components/Navbar";
// import Footer from "../../Components/Footer";


// const WhyChooseUs = () => {
//   return (
//     <>
//     <Navbar />
//     <div className="container py-5">
//       <h2 className="text-center mb-4">Why Choose Us?</h2>
      
//       {/* Horizontal Card: Image on the Left */}
//       <Card className="overflow-hidden mb-4">
//         <Row className="g-0">
//           <Col sm={4} className="position-relative" style={{ minHeight: "220px" }}>
//             <Card.Img
//               src="/d1.png"
//               className="position-absolute top-0 start-0 w-100 h-100 object-fit-cover"
//               alt="Card image"
//             />
//           </Col>
//           <Col sm={8}>
//             <Card.Body>
//               <Card.Title>Card Title</Card.Title>
//               <Card.Text>
//                 This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.
//               </Card.Text>
//               <Button variant="primary">Go somewhere</Button>
//             </Card.Body>
//           </Col>
//         </Row>
//       </Card>
      
//       {/* Horizontal Card: Image on the Right */}
//       <Card className="overflow-hidden">
//         <Row className="g-0">
//           <Col sm={4} className="position-relative order-sm-2" style={{ minHeight: "220px" }}>
//             <Card.Img
//               src="/d2.png"
//               className="position-absolute top-0 start-0 w-100 h-100 object-fit-cover"
//               alt="Card image"
//             />
//           </Col>
//           <Col sm={8} className="order-sm-1">
//             <Card.Body>
//               <Card.Title>Card Title</Card.Title>
//               <Card.Text>
//                 This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.
//               </Card.Text>
//               <Button variant="primary">Go somewhere</Button>
//             </Card.Body>
//           </Col>
//         </Row>
//       </Card>
//     </div>
//     <div className="container py-5 text-center">
//       {/* Heading Section */}
//       <motion.h2 
//         className="mb-4"
//         initial={{ opacity: 0, y: -50 }}
//         animate={{ opacity: 1, y: 0 }}
//         transition={{ duration: 1 }}
//       >
//         Why Choose Us?
//       </motion.h2>

//       {/* Thought Experiment Section */}
//       <motion.div
//         initial={{ opacity: 0 }}
//         animate={{ opacity: 1 }}
//         transition={{ duration: 1.2 }}
//         className="mb-5"
//       >
//         <p>Simply because we bring together passionate and driven individuals to create something amazing!</p>
//         <div className="d-flex flex-column align-items-center">
//           <motion.div className="mb-3" whileHover={{ scale: 1.1 }}>
//             <span className="badge bg-danger rounded-circle p-3">1</span>
//             <p className="mt-2">We unite passionate, driven people.</p>
//           </motion.div>
//           <motion.div className="mb-3" whileHover={{ scale: 1.1 }}>
//             <span className="badge bg-danger rounded-circle p-3">2</span>
//             <p className="mt-2">We give them the freedom and resources to innovate.</p>
//           </motion.div>
//           <motion.div whileHover={{ scale: 1.1 }}>
//             <span className="badge bg-danger rounded-circle p-3">3</span>
//             <p className="mt-2">That creates groundbreaking results!</p>
//           </motion.div>
//         </div>
//       </motion.div>

//       {/* Image Section */}
//       <motion.img
//         src="https://via.placeholder.com/600x300"
//         alt="Why Choose Us"
//         className="img-fluid mb-4"
//         initial={{ opacity: 0, scale: 0.8 }}
//         whileInView={{ opacity: 1, scale: 1 }}
//         transition={{ duration: 1 }}
//         viewport={{ once: true }}
//       />

//       {/* Call to Action Section */}
//       <div className="row text-start">
//         <div className="col-md-6">
//           <p>
//             Whether you're a technical guru, marketing mastermind, creative genius, or a jack of all trades, we have a place for you!
//           </p>
//         </div>
//         <div className="col-md-6">
//           <p>
//             Our dynamic and collaborative work environment encourages growth, learning, and professional development.
//           </p>
//           <motion.button 
//             className="btn btn-success px-4 py-2"
//             whileHover={{ scale: 1.1 }}
//           >
//             Join Our Team
//           </motion.button>
//         </div>
//       </div>
//     </div>
//     <Footer />
//     </>
//   );
// };

// export default WhyChooseUs;
