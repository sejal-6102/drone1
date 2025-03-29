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
     
        <div
          className="hero-section text-center text-white d-flex flex-column justify-content-center align-items-center position-relative"
          style={{
            backgroundImage: `url('/public/team.png')`,
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





