import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import "bootstrap/dist/css/bootstrap.min.css";
import n1 from "../assets/img/n1.png";
import n2 from "../assets/img/n2.png";
import n3 from "../assets/img/n3.png";
import "../index.css";

const newsArticles = [
  {
    title: "Marut Drones bags $6.2 million in Series-A funding from Lok Capital",
    date: "November 5, 2024",
    description:
      "The startup plans to use the funds raised to fuel its growth to a turnover of Rs 1,000 crore in the next five years by developing advanced agricultural drones tailored...",
    image: n1,
  },
  {
    title: "Dronetech firm Marut Drones bags $6.2M in Series A funding from Lok Capital",
    date: "November 5, 2024",
    description:
      "Drone technology firm Marut Drones has bagged $6.2 million in Series A funding from investment firm Lok Capital developing advanced agricultural drones tailored...",
    image: n2,
  },
  {
    title: "Hyderabad firm Marut Drones raises $6.2 million, to spread wings",
    date: "November 5, 2024",
    description:
      "Marut Dronetech has raised $6.2 million, a Series A funding from Lok Capital that is expected to aid the expected to aid the Hyderabad-based...",
    image: n3,
  },
];

const NewsSection = () => {
  useEffect(() => {
    AOS.init({
      duration: 1500,
      easing: "ease-in-out",
      once: false,
      mirror: true,
    });
  }, []);

  return (
    <div className="container py-5">
      <h2 className="text-center fw-bold" data-aos="flip-left">News & Articles</h2>
      <div className="row justify-content-center mt-4">
        {newsArticles.map((news, index) => (
          <div
            key={index}
            className="col-12 col-sm-6 col-md-4"
            data-aos="flip-right"
            data-aos-delay={index * 300}
          >
            <div className="card news-card" data-aos="zoom-in-up" data-aos-delay={index * 400}>
              <div className="news-img-container">
                <img src={news.image} className="card-img-top" alt={news.title} />
                <span className="news-tag">NEWS & ARTICLES</span>
              </div>
              <div className="card-body">
                <small className="text-muted">{news.date}</small>
                <h5 className="card-title mt-2">{news.title}</h5>
                <p className="card-text">{news.description}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default NewsSection;




