
import React, { useState, useEffect } from "react";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import AOS from "aos";
import "aos/dist/aos.css";
import axios from "axios";
import Navbar from "../../Components/Navbar";
import Footer from "../../Components/Footer";
import "./ContactPage.css";

const ContactPage = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  const backUrl = process.env.REACT_APP_BACK_URL
  console.log(backUrl,"backurl")
  const [formData, setFormData] = useState({
    phone: "",
    state: "",
    language: "",
    interestedProduct: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(`${backUrl}/submit-form`, formData);
      alert(response.data.message);
      setFormData({ phone: "", state: "", language: "", interestedProduct: "" });
    } catch (error) {
      console.error("Form Submission Error:", error);
      alert("Error submitting form");
    }
  };

  return (
    <>
      <Navbar />
      <Container className="py-4 contact-container">
        <Row>
          <Col md={6} data-aos="fade-right">
            <h4>Registered Address</h4>
            <p>
            Registered Address : C-162, 163 Hanuman Nagar,<br />
             Bharat Marg, Vaishali Nagar, Jaipur, <br />
             Jaipur, Rajasthan, 302021<br />
            </p>

            <h4>Communication Address</h4>
            <p>
            B/229, 2nd Floor, Shivraj Niketan Colony,<br />
             Vaishali Nagar, Jaipur 302021
            </p>

            <div className="mb-3">
              <iframe
                title="map"
                src="https://www.google.com/maps/embed?..."
                width="100%"
                height="250"
                style={{ border: "0" }}
                allowFullScreen
                loading="lazy"
              ></iframe>
            </div>

            <h5>For Sales & Business Enquiries</h5>
            <p> 0141 4789966 <br />  info@dronum.in
            </p>

            <h5>For Other Enquiries</h5>
            <p> 0141 4789966 <br />  info@dronum.in
            </p>

            <div className="social-icons">
              <i className="bi bi-facebook"></i>
              <i className="bi bi-instagram"></i>
              <i className="bi bi-linkedin"></i>
              <i className="bi bi-youtube"></i>
              <i className="bi bi-twitter"></i>
            </div>
          </Col>

          <Col md={6} className="d-flex justify-content-center" data-aos="fade-left">
            <div className="form-wrapper">
              <div className="form-container">
                <h4 className="text-center">Contact Form</h4>
                <div className="form-title-underline"></div> 
                <Form onSubmit={handleSubmit}>
                  <Form.Group className="mb-4">
                    <Form.Label>Phone *</Form.Label>
                    <Form.Control
                      type="text"
                      placeholder="+91"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      required
                    />
                  </Form.Group>

                  <Form.Group className="mb-4">
                    <Form.Label>State *</Form.Label>
                    <Form.Select
                      name="state"
                      value={formData.state}
                      onChange={handleChange}
                      required
                      className="select-black-text"
                    >
                      <option value="">Select State</option>
                      <option value="Telangana">Telangana</option>
                      <option value="Andhra Pradesh">Andhra Pradesh</option>
                    </Form.Select>
                  </Form.Group>

                  <Form.Group className="mb-4">
                    <Form.Label>Language *</Form.Label>
                    <Form.Select
                      name="language"
                      value={formData.language}
                      onChange={handleChange}
                      required
                      className="select-black-text"
                    >
                      <option value="">Select Language</option>
                      <option value="English">English</option>
                      <option value="Hindi">Hindi</option>
                    </Form.Select>
                  </Form.Group>

                  <Form.Group className="mb-4">
                    <Form.Label>Interested Products *</Form.Label>
                    <Form.Select
                      name="interestedProduct"
                      value={formData.interestedProduct}
                      onChange={handleChange}
                      required
                      className="select-black-text"
                    >
                      <option value="">-Select-</option>
                      <option value="Product1">Product 1</option>
                      <option value="Product2">Product 2</option>
                    </Form.Select>
                  </Form.Group>

                  <Button variant="primary" type="submit" className="w-100">
                    Submit
                  </Button>
                </Form>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
      <Footer />
    </>
  );
};

export default ContactPage;


