import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import CountUp from "react-countup";
import "bootstrap/dist/css/bootstrap.min.css";
import stats from "../assets/img/stats.jpg"; // Replace with correct path

const StatsSection = () => {
  useEffect(() => {
    AOS.init({
      duration: 1200,
      easing: "ease-in-out",
      once: true, // Ensures animation runs only once per scroll
    });
  }, []);

  return (
    <div className="container-fluid bg-info bg-opacity-10 py-5">
      <div className="container">
        <div className="row align-items-center">
          {/* Image Section */}
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

          {/* Stats Section */}
          <div
            className="col-lg-6 col-12 bg-white p-5 rounded shadow-lg text-center"
            data-aos="fade-left"
          >
            <h2 className="fw-bold text-dark mb-4">
              Rooted in Satisfaction, On Path to Scale
            </h2>

            <div className="row">
              {/* Stats Item */}
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




// import React from "react";
// import { motion } from "framer-motion";
// import CountUp from "react-countup";
// import "bootstrap/dist/css/bootstrap.min.css";
// import stats from "../assets/img/stats.jpg"; // Replace with correct path

// const StatsSection = () => {
//   return (
//     <motion.div
//       className="container-fluid bg-info bg-opacity-10 py-5"
//       initial={{ opacity: 0, y: 50 }}
//       animate={{ opacity: 1, y: 0 }}
//       transition={{ duration: 1 }}
//     >
//       <div className="container">
//         <div className="row align-items-center">
//           {/* Image Section with Hover Effect */}
//           <motion.div
//             className="col-md-6 d-flex justify-content-center"
//             initial={{ scale: 1.2, opacity: 0 }}
//             animate={{ scale: 1, opacity: 1 }}
//             transition={{ duration: 1 }}
//             whileHover={{ scale: 0.95 }} // Zoom out on hover
//           >
//             <img
//               src={stats} // Replace with your image URL
//               alt="Drone Exhibition"
//               className="img-fluid rounded"
//               style={{ transition: "transform 0.3s ease-in-out" }}
//             />
//           </motion.div>

//           {/* Content Section */}
//           <motion.div
//             className="col-md-6 bg-white p-5 rounded"
//             initial={{ opacity: 0, y: 50 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 1, delay: 0.3 }}
//           >
//             <h2 className="fw-bold text-dark text-center">
//               Rooted in Satisfaction, On Path to Scale
//             </h2>

//             <div className="row text-center mt-4">
//               {/* Stats - First Row */}
//               <div className="col-12 col-sm-6">
//                 <motion.div
//                   className="p-3"
//                   initial={{ opacity: 0, y: 20 }}
//                   animate={{ opacity: 1, y: 0 }}
//                   transition={{ duration: 1, delay: 0.5 }}
//                 >
//                   <h3 className="fw-bold">
//                     <CountUp start={0} end={600} duration={3} />+
//                   </h3>
//                   <p className="text-secondary">Drones built in House</p>
//                 </motion.div>
//               </div>

//               <div className="col-12 col-sm-6">
//                 <motion.div
//                   className="p-3"
//                   initial={{ opacity: 0, y: 20 }}
//                   animate={{ opacity: 1, y: 0 }}
//                   transition={{ duration: 1, delay: 0.7 }}
//                 >
//                   <h3 className="fw-bold">
//                     <CountUp start={0} end={500000} duration={3} separator="," />+
//                   </h3>
//                   <p className="text-secondary">Acres of Drone Testing</p>
//                 </motion.div>
//               </div>

//               {/* Stats - Second Row */}
//               <div className="col-12 col-sm-6">
//                 <motion.div
//                   className="p-3"
//                   initial={{ opacity: 0, y: 20 }}
//                   animate={{ opacity: 1, y: 0 }}
//                   transition={{ duration: 1, delay: 0.9 }}
//                 >
//                   <h3 className="fw-bold">
//                     <CountUp start={0} end={38} duration={3} />+
//                   </h3>
//                   <p className="text-secondary">Institutional Partnerships</p>
//                 </motion.div>
//               </div>

//               <div className="col-12 col-sm-6">
//                 <motion.div
//                   className="p-3"
//                   initial={{ opacity: 0, y: 20 }}
//                   animate={{ opacity: 1, y: 0 }}
//                   transition={{ duration: 1, delay: 1.1 }}
//                 >
//                   <h3 className="fw-bold">
//                     <CountUp start={0} end={16} duration={3} />+
//                   </h3>
//                   <p className="text-secondary">States Presence</p>
//                 </motion.div>
//               </div>
//             </div>
//           </motion.div>
//         </div>
//       </div>
//     </motion.div>
//   );
// };

// export default StatsSection;
