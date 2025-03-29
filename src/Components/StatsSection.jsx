import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import CountUp from "react-countup";
import "bootstrap/dist/css/bootstrap.min.css";
import stats from "../assets/img/stats.jpg"; 

const StatsSection = () => {
  useEffect(() => {
    AOS.init({
      duration: 1200,
      easing: "ease-in-out",
      once: true, 
    });
  }, []);

  return (
    <div className="container-fluid bg-info bg-opacity-10 py-5">
      <div className="container">
        <div className="row align-items-center">
       
          <div
            className="col-lg-6 col-12 d-flex justify-content-center"
            data-aos="fade-right"
          >
            <img
              src={stats}
              alt="Drone Exhibition"
              className="img-fluid rounded shadow-lg"
              style={{ maxWidth: "90%", transition: "transform 0.3s ease-in-out" }}
            />
          </div>

      
          <div
            className="col-lg-6 col-12 bg-white p-5 rounded shadow-lg text-center"
            data-aos="fade-left"
          >
            <h2 className="fw-bold text-dark mb-4">
              Rooted in Satisfaction, On Path to Scale
            </h2>

            <div className="row">
             
              {[
                { number: 600, text: "Drones built in House", delay: "100" },
                { number: 500000, text: "Acres of Drone Testing", delay: "200", separator: "," },
                { number: 38, text: "Institutional Partnerships", delay: "300" },
                { number: 16, text: "States Presence", delay: "400" },
              ].map((stat, index) => (
                <div
                  key={index}
                  className="col-md-6 col-12 my-3"
                  data-aos="zoom-in"
                  data-aos-delay={stat.delay}
                >
                  <div className="p-3 bg-light rounded shadow-sm">
                    <h3 className="fw-bold">
                      <CountUp start={0} end={stat.number} duration={3} separator={stat.separator || ""} />+
                    </h3>
                    <p className="text-secondary">{stat.text}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StatsSection;




