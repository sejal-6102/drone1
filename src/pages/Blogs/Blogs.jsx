import React, { useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "aos/dist/aos.css";
import AOS from "aos";
import Navbar from "../../Components/Navbar";
import Footer from "../../Components/Footer";

const Blogs = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000, 
      easing: "ease-in-out",
      once: true,
    });
  }, []);

  const blogImages = [
    "/b1.png",
    "/b2.png",
    "/b3.png",
    "/b1.png",
    "/b2.png",
    "/b3.png",
  ];

  return (
    <>
      <Navbar />
      <div>
        <section className="text-center py-5" data-aos="fade-down">
          <h1 className="fw-bold">Blogs</h1>
          <p className="lead">
            Something short and leading about the collection below—its contents,
            the creator, etc. Make it short and sweet, but not too short so folks
            don’t simply skip over it entirely.
          </p>
        </section>

        <div className="container">
          <h2 className="text-center my-4" data-aos="fade-up">Latest Blogs</h2>
          <div className="row">
            {blogImages.map((image, index) => (
              <div key={index} className="col-lg-4 col-md-6 col-sm-12">
                <div
                  className="card mb-4 shadow-sm"
                  data-aos="zoom-in"
                  style={{ transition: "transform 0.3s" }}
                >
                  <img src={image} className="card-img-top" alt={`Blog ${index + 1}`} />
                  <div className="card-body">
                    <p className="card-text">
                      This is a wider card with supporting text below as a natural
                      lead-in to additional content. This content is a little bit
                      longer.
                    </p>
                    <div className="d-flex justify-content-between align-items-center">
                      <div className="btn-group">
                        <button className="btn btn-sm btn-outline-secondary">View</button>
                        <button className="btn btn-sm btn-outline-secondary">Edit</button>
                      </div>
                      <small className="text-muted">9 mins</small>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="container my-5">
          <div className="row align-items-center">
            <div className="col-md-6" data-aos="fade-right">
              <h2>First Featurette Heading. <span className="text-muted">It’ll blow your mind.</span></h2>
              <p>
                Donec ullamcorper nulla non metus auctor fringilla. Vestibulum id ligula
                porta felis euismod semper. Praesent commodo cursus magna, vel scelerisque nisl consectetur.
              </p>
            </div>
            <div className="col-md-6" data-aos="flip-left">
              <img src="/b1.png" className="img-fluid rounded" alt="Feature" />
            </div>
          </div>
        </div>

        <div className="container my-5">
          <div className="row align-items-center flex-md-row-reverse">
            <div className="col-md-6" data-aos="fade-left">
              <h2>Oh yeah, it's that good. <span className="text-muted">See for yourself.</span></h2>
              <p>
                Donec ullamcorper nulla non metus auctor fringilla. Vestibulum id ligula
                porta felis euismod semper. Praesent commodo cursus magna, vel scelerisque nisl consectetur.
              </p>
            </div>
            <div className="col-md-6" data-aos="flip-right">
              <img src="/b2.png" className="img-fluid rounded" alt="Feature" />
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Blogs;





