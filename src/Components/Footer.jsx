import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { FaInstagram, FaLinkedin, FaYoutube, FaTwitter, FaFacebook } from "react-icons/fa";

const Footer = () => {
  return (
    <footer style={{ background: "#0a1931", padding: "40px 0", color: "#fff" }}>
      <Container>
        <Row>
          <Col md={4}>
            <img 
              src="/logo.png" 
              alt="Marut Drones" 
              style={{ width: "120px", marginBottom: "15px" }} 
            />
            <p style={{ fontSize: "14px", lineHeight: "1.6" }}>
              At dronum, we firmly believe in the transformative potential of technology, 
              and we are dedicated to harnessing it in service of a better, more inclusive future. 
              Through our unwavering commitment to excellence and innovation, we strive to reshape 
              industries, empower communities, and pave the way for a sustainable tomorrow.
            </p>
          </Col>

          <Col md={4}>
            <h5 style={{ fontWeight: "bold", color: "#fff" }}>Quick Links</h5>
            <ul style={{ listStyle: "none", paddingLeft: "0" }}>
              <li><a href="#" style={linkStyle}>Why Choose Us</a></li>
              <li><a href="#" style={linkStyle}>About Us</a></li>
              <li><a href="#" style={linkStyle}>Our Partners</a></li>
              <li><a href="#" style={linkStyle}>Contact Us</a></li>
            </ul>
          </Col>

          <Col md={4}>
            <h5 style={{ fontWeight: "bold", color: "#fff" }}>Address</h5>
            <p style={{ fontSize: "14px", lineHeight: "1.6" }}>
              Dronum India Aviation is a DGCA-certified Remote Pilot <br />
              Training Organisation (RPTO) based in Jaipur, Rajasthan.<br />
              We specialize in providing cutting-edge drone pilot training, <br />
              empowering individuals with the skills and knowledge needed<br />
              to excel in the rapidly growing drone industry.
            </p>
            <p style={{ fontSize: "12px", fontWeight: "bold", color: "#bbb" }}>
              The Corporate Identity Number is U74999TG2019PTC132342
            </p>

            <div style={{ display: "flex", gap: "12px", marginTop: "10px" }}>
              <a href="#" style={iconStyle}><FaInstagram /></a>
              <a href="#" style={iconStyle}><FaLinkedin /></a>
              <a href="#" style={iconStyle}><FaYoutube /></a>
              <a href="#" style={iconStyle}><FaTwitter /></a>
              <a href="#" style={iconStyle}><FaFacebook /></a>
            </div>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};


const linkStyle = {
  color: "#ddd",
  textDecoration: "none",
  fontSize: "14px",
  display: "block",
  marginBottom: "5px"
};

const iconStyle = {
  fontSize: "20px",
  color: "#f8f9fa",
  textDecoration: "none"
};

export default Footer;
