import React, { useEffect } from "react";
import { Carousel, Container, Row, Col, Button } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "./WhyChooseUs.css";
import Navbar from "../../Components/Navbar";
import Footer from "../../Components/Footer";
import AOS from "aos";
import "aos/dist/aos.css";
import { motion } from "framer-motion";

const WhyChooseUs = () => {
  useEffect(() => {
    AOS.init({ duration: 1000, easing: "ease-in-out", once: false });
  }, []);

  return (
    <>
      <Navbar />
      <div>
        {/* Carousel Section */}
        <Carousel className="mb-5">
          {[1, 2].map((_, index) => (
            <Carousel.Item key={index}>
              <div className="carousel-bg" style={{ backgroundImage: "url('/team.png')" }}>
                <div className="carousel-content" data-aos="fade-up">
                  <h3>{index === 0 ? "One more for good measure." : "Second Slide Heading"}</h3>
                  <p>Cras justo odio, dapibus ac facilisis in, egestas eget quam.</p>
                  <Button variant="primary">Browse gallery</Button>
                </div>
              </div>
            </Carousel.Item>
          ))}
        </Carousel>

        {/* Heading Section */}
        <Container className="py-5 text-center">
          <motion.h2 
            className="mb-4"
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >
            Why Choose Us?
          </motion.h2>

          {/* Thought Experiment Section */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1.2 }}
            className="mb-5"
          >
            <p>We bring together passionate and driven individuals to create something amazing!</p>
            <div className="d-flex flex-column align-items-center">
              {[1, 2, 3].map((num, index) => (
                <motion.div 
                  key={index} 
                  className="mb-3" 
                  whileHover={{ scale: 1.1 }}
                  data-aos="zoom-in"
                >
                  <span className="badge bg-danger rounded-circle p-3">{num}</span>
                  <p className="mt-2">
                    {num === 1 ? "We unite passionate, driven people." : num === 2 ? "We give them the freedom and resources to innovate." : "That creates groundbreaking results!"}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Image Section */}
          <motion.img
            src="/choose.png"
            alt="Why Choose Us"
            className="img-fluid mb-4"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
            style={{height:"350px",width:"450px"}}
          />

          {/* Call to Action Section */}
          <Row className="text-start">
            <Col md={6} data-aos="fade-right">
              <p>
                Whether you're a technical guru, marketing mastermind, creative genius, or a jack of all trades, we have a place for you!
              </p>
            </Col>
            <Col md={6} data-aos="fade-left">
              <p>
                Our dynamic and collaborative work environment encourages growth, learning, and professional development.
              </p>
              <motion.button 
                className="btn btn-success px-4 py-2"
                whileHover={{ scale: 1.1 }}
              >
                Join Our Team
              </motion.button>
            </Col>
          </Row>
        </Container>
        <hr />

        {/* Three Circles Section */}
        <Container className="text-center mb-5">
          <Row className="justify-content-center">
            {[1, 2, 3].map((_, index) => (
              <Col md={4} sm={12} key={index} className="d-flex flex-column align-items-center mb-4" data-aos="flip-up">
                <div className="rounded-circle bg-light d-flex justify-content-center align-items-center circle-container">
                  <img src={`d${index + 1}.png`} alt="Circle" className="w-100 h-100 object-fit-cover"/>
                </div>
                <h4 className="mt-3">Heading {index + 1}</h4>
                <p className="text-muted">
                  Donec sed odio dui. Etiam porta sem malesuada magna mollis euismod.
                </p>
                <Button variant="dark">View details »</Button>
              </Col>
            ))}
          </Row>
        </Container>

        {/* Featurette Sections */}
        <Container>
          {[1, 2].map((feature, index) => (
            <Row key={index} className="align-items-center mb-5">
              <Col md={index % 2 === 0 ? 7 : 5} data-aos={index % 2 === 0 ? "fade-right" : "fade-left"}>
                {index % 2 === 0 ? (
                  <>
                    <h2>Featurette heading. <span className="text-primary">It'll blow your mind.</span></h2>
                    <p className="lead">
                      Donec ullamcorper nulla non metus auctor fringilla. Vestibulum id ligula porta felis euismod semper.
                    </p>
                  </>
                ) : (
                  <div className="feature-img">
                    <img src={`d${feature}.png`} alt={`Feature ${feature}`} className="img-fluid"/>
                  </div>
                )}
              </Col>
              <Col md={index % 2 === 0 ? 5 : 7} data-aos={index % 2 === 0 ? "fade-left" : "fade-right"}>
                {index % 2 !== 0 ? (
                  <>
                    <h2>Oh yeah, it's that good. <span className="text-primary">See for yourself.</span></h2>
                    <p className="lead">
                      Donec ullamcorper nulla non metus auctor fringilla. Vestibulum id ligula porta felis euismod semper.
                    </p>
                  </>
                ) : (
                  <div className="feature-img">
                    <img src={`d${feature}.png`} alt={`Feature ${feature}`} className="img-fluid"/>
                  </div>
                )}
              </Col>
            </Row>
          ))}
        </Container>
      </div>
      <Footer />
    </>
  );
};

export default WhyChooseUs;





// import React from "react";
// import { Carousel, Container, Row, Col, Button } from "react-bootstrap";
// import "bootstrap/dist/css/bootstrap.min.css";
// import "./WhyChooseUs.css"
// import Navbar from "../../Components/Navbar";
// import Footer from "../../Components/Footer";
// import { motion } from "framer-motion";
// // Import CSS file for additional styles

// const WhyChooseUs = () => {
//   return (
//     <>
//     <Navbar />
//     <div>
//       {/* Carousel Section */}
//       <Carousel className="mb-5">
//         <Carousel.Item>
//           <div className="carousel-bg" style={{ backgroundImage: "url('/team.png')" }}>
//             <div className="carousel-content">
//               <h3>One more for good measure.</h3>
//               <p>Cras justo odio, dapibus ac facilisis in, egestas eget quam.</p>
//               <Button variant="primary">Browse gallery</Button>
//             </div>
//           </div>
//         </Carousel.Item>
//         <Carousel.Item>
//           <div className="carousel-bg" style={{ backgroundImage: "url('/team.png')" }}>
//             <div className="carousel-content">
//               <h3>Second Slide Heading</h3>
//               <p>Another supporting text for the slide. Enjoy browsing the gallery!</p>
//               <Button variant="primary">Learn more</Button>
//             </div>
//           </div>
//         </Carousel.Item>
//       </Carousel>

//       <div className="container py-5 text-center">
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
// <hr />




//       {/* Three Circles Section */}
//       <Container className="text-center mb-5">
//         <Row className="justify-content-center">
//           {[1, 2, 3].map((_, index) => (
//             <Col md={4} key={index} className="d-flex flex-column align-items-center">
//               <div className="rounded-circle bg-light d-flex justify-content-center align-items-center" style={{ width: "120px", height: "120px", overflow: "hidden" }}>
//                 <img src={`d${index + 1}.png`} alt="Circle" className="w-100 h-100 object-fit-cover"/>
//               </div>
//               <h4 className="mt-3">Heading</h4>
//               <p className="text-muted">
//                 Donec sed odio dui. Etiam porta sem malesuada magna mollis euismod.
//               </p>
//               <Button variant="dark">View details »</Button>
//             </Col>
//           ))}
//         </Row>
//       </Container>

//       {/* Featurette Sections */}
//       <Container>
//         <Row className="align-items-center mb-5">
//           <Col md={7}>
//             <h2>First featurette heading. <span className="text-primary">It'll blow your mind.</span></h2>
//             <p className="lead">
//               Donec ullamcorper nulla non metus auctor fringilla. Vestibulum id ligula porta felis euismod semper.
//             </p>
//           </Col>
//           <Col md={5}>
//             <div className="feature-img">
//               <img src="d1.png" alt="Feature 1" className="img-fluid"/>
//             </div>
//           </Col>
//         </Row>

//         <Row className="align-items-center mb-5">
//           <Col md={5}>
//             <div className="feature-img">
//               <img src="d2.png" alt="Feature 2" className="img-fluid"/>
//             </div>
//           </Col>
//           <Col md={7}>
//             <h2>Oh yeah, it's that good. <span className="text-primary">See for yourself.</span></h2>
//             <p className="lead">
//               Donec ullamcorper nulla non metus auctor fringilla. Vestibulum id ligula porta felis euismod semper.
//             </p>
//           </Col>
//         </Row>
//       </Container>
//     </div>
//     <Footer />
//     </>
//   );
// };

// export default WhyChooseUs;
