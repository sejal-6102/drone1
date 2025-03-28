import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import "bootstrap/dist/css/bootstrap.min.css";
import p1 from "../assets/img/p1.png";
import p2 from "../assets/img/p2.png";
import p3 from "../assets/img/p3.png";
import p4 from "../assets/img/p4.png";
import p5 from "../assets/img/p5.png";

const products = [
  { name: "Kisan Drones", image: p1 },
  { name: "Training Drones", image: p2 },
  { name: "Afforestation Drones", image: p3 },
  { name: "Mosquito Eradication Drones", image: p4 },
  { name: "Healthcare Logistics Drones", image: p5 },
];

const ProductsSection = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      easing: "ease-out-back",
      once: false,
      mirror: true,
    });
  }, []);

  return (
    <div className="container text-center py-5">
      <h2 className="fw-bold" data-aos="fade-up">Products</h2>
      <div className="row justify-content-center mt-4">
        {products.map((product, index) => (
          <div
            key={index}
            className="col-6 col-sm-4 col-md-3 col-lg-2 d-flex flex-column align-items-center"
            data-aos="fade-up"
            data-aos-delay={index * 200}
          >
            <img
              src={product.image}
              alt={product.name}
              className="img-fluid mb-2"
              style={{ maxHeight: "120px" }}
            />
            <p className="fw-semibold">{product.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductsSection;


// import React from "react";
// import { motion } from "framer-motion";
// import "bootstrap/dist/css/bootstrap.min.css";
// import p1 from "../assets/img/p1.png";
// import p2 from "../assets/img/p2.png";
// import p3 from "../assets/img/p3.png";
// import p4 from "../assets/img/p4.png";
// import p5 from "../assets/img/p5.png"; // Replace with correct path



// const products = [
//   { name: "Kisan Drones", image: p1 },
//   { name: "Training Drones", image: p2 },
//   { name: "Afforestation Drones", image: p3 },
//   { name: "Mosquito Eradication Drones", image: p4 },
//   { name: "Healthcare Logistics Drones", image: p5 },
// ];

// const ProductsSection = () => {
//   return (
//     <div className="container text-center py-5">
//       <h2 className="fw-bold">Products</h2>
//       <div className="row justify-content-center mt-4">
//         {products.map((product, index) => (
//           <motion.div
//             key={index}
//             className="col-6 col-md-2 d-flex flex-column align-items-center"
//             initial={{ opacity: 0, y: 50 }} // Starts below
//             animate={{ opacity: 1, y: 0 }} // Moves up smoothly
//             transition={{ duration: 0.8, delay: index * 0.2 }} // Staggered animation
//           >
//             <img
//               src={product.image}
//               alt={product.name}
//               className="img-fluid mb-2"
//               style={{ maxHeight: "120px" }} // Adjust size if needed
//             />
//             <p className="fw-semibold">{product.name}</p>
//           </motion.div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default ProductsSection;
