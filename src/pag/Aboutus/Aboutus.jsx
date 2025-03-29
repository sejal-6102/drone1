import React from "react";
import { Container } from "react-bootstrap";
import "./Aboutus.css";

const AboutUs = () => {
  return (
    <section className="about-us-section">
      <Container className="text-center text-white">
        <p className="subheading">About Us</p>
        <h1 className="heading">What started as an Idea is <br /> now more than that</h1>
      </Container>
    </section>
  );
};

export default AboutUs;
