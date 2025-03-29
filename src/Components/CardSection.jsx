import React, { useState, useEffect } from "react";
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import AOS from "aos";
import "aos/dist/aos.css";
import "./CardSection.css";
import c1 from "../assets/img/c1.png";
import c2 from "../assets/img/c2.png";
import c3 from "../assets/img/c3.png";

const cardData = [
  {
    title: "Become a Dealer",
    img: c3,
    btnText: "Reach Us",
  },
  {
    title: "Loan Eligibility",
    img: c2,
    btnText: "Contact Us",
  },
  {
    title: "Crop Specific SOP",
    img: c3,
    btnText: "Download",
  },
];

const CardSection = () => {
  const [clicked, setClicked] = useState(null);

  useEffect(() => {
    AOS.init({
      duration: 1000,
      easing: "ease-in-out",
      once: false,
      mirror: true,
    });
  }, []);

  const handleClick = (index) => {
    setClicked(index);
    setTimeout(() => setClicked(null), 300);
  };

  return (
    <Container className="py-4">
      <Row className="g-4 justify-content-center">
        {cardData.map((card, index) => (
          <Col key={index} xs={12} sm={6} md={4} lg={4} data-aos="flip-left" data-aos-delay={index * 200}>
            <Card className="custom-card" data-aos="zoom-in-up" data-aos-delay={index * 300}>
              <div className="image-container" data-aos="tumble-up" data-aos-delay={index * 400}>
                <Card.Img variant="top" src={card.img} className="card-img" alt={card.title} />
              </div>
              <Card.Body className="text-center">
                <Card.Title>{card.title}</Card.Title>
                <Button
                  className={`custom-button ${clicked === index ? "clicked" : ""}`}
                  onClick={() => handleClick(index)}
                >
                  {card.btnText} →
                </Button>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default CardSection;