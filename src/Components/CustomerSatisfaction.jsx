import React, { useEffect } from "react";
import { motion } from "framer-motion";
import AOS from "aos";
import "aos/dist/aos.css";
import "bootstrap/dist/css/bootstrap.min.css";

const CustomerSatisfaction = () => {
  useEffect(() => {
    AOS.init({ duration: 1200, once: true });
  }, []);

  return (
    <motion.div
      className="text-white text-center py-5 container-fluid"
      style={{ backgroundColor: "#031B34" }}
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
    >
      <p className="fs-5 text-light" data-aos="fade-up">
        Cultivating Customer Happiness
      </p>

      <h2 className="fw-bold text-white display-6" data-aos="fade-up" data-aos-delay="200">
        Where your satisfaction is our <span className="fst-italic">Seed to Success!</span>
      </h2>

      <p className="fs-5 text-light mt-2" data-aos="fade-up" data-aos-delay="400">
        For Support & Feedback Call
      </p>

      <motion.a
        href="tel:+919052999365"
        className="btn btn-lg fw-medium px-4 py-2 mt-3"
        style={{
          background: "linear-gradient(90deg, rgb(2, 97, 94), rgb(12, 60, 66))",
          border: "none",
          borderRadius: "8px",
          boxShadow: "0px 0px 15px rgb(14, 53, 52), 0px 0px 30px rgb(10, 49, 53)",
          color: "white",
          fontWeight: "bold",
        }}
        whileHover={{
          scale: 1.1,
          boxShadow: "0px 0px 20px #12FFF7, 0px 0px 40px #00E5FF",
        }}
        whileTap={{ scale: 0.95 }}
        data-aos="fade-up"
        data-aos-delay="600"
      >
        +91 7433 876 876 <span className="ms-2">➡</span>
      </motion.a>
    </motion.div>
  );
};

export default CustomerSatisfaction;