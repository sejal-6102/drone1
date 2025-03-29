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




