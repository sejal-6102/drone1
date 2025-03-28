import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const logos = [
  {
    image: <img src="/par1.png" alt="MANAGE" className="img-fluid" style={{ maxWidth: '100%', maxHeight: '100px' }} />,
    alt: 'MANAGE',
  },
  {
    image: <img src="/par3.png" alt="Land Accelerator" className="img-fluid" style={{ maxWidth: '100%', maxHeight: '100px' }} />,
    alt: 'Land Accelerator',
  },
  {
    image: <img src="/par3.png" alt="KVK" className="img-fluid" style={{ maxWidth: '100%', maxHeight: '100px' }} />,
    alt: 'KVK',
  },
  {
    image: <img src="/par4.png" alt="Kaveri Seeds" className="img-fluid" style={{ maxWidth: '100%', maxHeight: '100px' }} />,
    alt: 'Kaveri Seeds',
  },
  {
    image: <img src="/par5.png" alt="ITC Limited" className="img-fluid" style={{ maxWidth: '100%', maxHeight: '100px' }} />,
    alt: 'ITC Limited',
  },
  {
    image: <img src="/par6.png" alt="CPRI" className="img-fluid" style={{ maxWidth: '100%', maxHeight: '100px' }} />,
    alt: 'CPRI',
  },
  {
    image: <img src="/par7.png" alt="SDAU Center" className="img-fluid" style={{ maxWidth: '100%', maxHeight: '100px' }} />,
    alt: 'SDAU Center',
  },
  {
    image: <img src="/par8.png" alt="Rural Business Incubation" className="img-fluid" style={{ maxWidth: '100%', maxHeight: '100px' }} />,
    alt: 'Rural Business Incubation',
  },
  {
    image: <img src="/par1.png" alt="Bayer" className="img-fluid" style={{ maxWidth: '100%', maxHeight: '100px' }} />,
    alt: 'Bayer',
  },
  {
    image: <img src="/par3.png" alt="IIIT" className="img-fluid" style={{ maxWidth: '100%', maxHeight: '100px' }} />,
    alt: 'IIIT',
  },
];

const PartnersCarousel = () => {
  const [topRow, setTopRow] = useState(logos.slice(0, 5));
  const [bottomRow, setBottomRow] = useState(logos.slice(5, 10));

  useEffect(() => {
    const interval = setInterval(() => {
      setTopRow(prevRow => {
        const last = prevRow[prevRow.length - 1];
        const newRow = [last, ...prevRow.slice(0, prevRow.length - 1)];
        return newRow;
      });

      setBottomRow(prevRow => {
        const first = prevRow[0];
        const newRow = [...prevRow.slice(1), first];
        return newRow;
      });
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  return (
    <>
    <div className="container text-center" id="our-partners">
      <h2 className="mb-4">Partnerships & Associations</h2>
      <div className="row justify-content-center mb-4">
        {topRow.map((logo, index) => (
          <div key={index} className="col-6 col-md-2 d-flex justify-content-center align-items-center">
            {logo.image}
          </div>
        ))}
      </div>
      <div className="row justify-content-center">
        {bottomRow.map((logo, index) => (
          <div key={index} className="col-6 col-md-2 d-flex justify-content-center align-items-center">
            {logo.image}
          </div>
        ))}
      </div>
    </div>
    </>
  );
};

export default PartnersCarousel;


// import React, { useState, useEffect } from 'react';
// import 'bootstrap/dist/css/bootstrap.min.css';

// const logos = [
//   { src: '/par1.png', alt: 'MANAGE' },
//   { src: '/logo2.png', alt: 'Land Accelerator' },
//   { src: '/logo3.png', alt: 'KVK' },
//   { src: '/logo4.png', alt: 'Kaveri Seeds' },
//   { src: '/logo5.png', alt: 'ITC Limited' },
//   { src: '/logo6.png', alt: 'CPRI' },
//   { src: '/logo7.png', alt: 'SDAU Center' },
//   { src: '/logo8.png', alt: 'Rural Business Incubation' },
//   { src: '/logo9.png', alt: 'Bayer' },
//   { src: '/logo10.png', alt: 'IIIT' },
// ];

// const PartnersCarousel = () => {
//   const [topRow, setTopRow] = useState(logos.slice(0, 5));
//   const [bottomRow, setBottomRow] = useState(logos.slice(5, 10));

//   useEffect(() => {
//     const interval = setInterval(() => {
//       setTopRow(prevRow => {
//         const last = prevRow[prevRow.length - 1];
//         const newRow = [last, ...prevRow.slice(0, prevRow.length - 1)];
//         return newRow;
//       });

//       setBottomRow(prevRow => {
//         const first = prevRow[0];
//         const newRow = [...prevRow.slice(1), first];
//         return newRow;
//       });
//     }, 2000);

//     return () => clearInterval(interval);
//   }, []);

//   return (
//     <div className="container text-center">
//       <h2 className="mb-4">Partnerships & Associations</h2>
//       <div className="row justify-content-center mb-4">
//         {topRow.map((logo, index) => (
//           logo && logo.src ? (
//             <div key={index} className="col-6 col-md-2 d-flex justify-content-center align-items-center">
//               <img src={logo.src} alt={logo.alt} className="img-fluid" style={{ maxWidth: '100%', maxHeight: '100px' }} />
//             </div>
//           ) : null
//         ))}
//       </div>
//       <div className="row justify-content-center">
//         {bottomRow.map((logo, index) => (
//           logo && logo.src ? (
//             <div key={index} className="col-6 col-md-2 d-flex justify-content-center align-items-center">
//               <img src={logo.src} alt={logo.alt} className="img-fluid" style={{ maxWidth: '100%', maxHeight: '100px' }} />
//             </div>
//           ) : null
//         ))}
//       </div>
//     </div>
//   );
// };

// export default PartnersCarousel;



// import React, { useState, useEffect } from 'react';
// import 'bootstrap/dist/css/bootstrap.min.css';

// const logos = [
//   { src: '/path/to/logo1.png', alt: 'MANAGE' },
//   { src: '/path/to/logo2.png', alt: 'Land Accelerator' },
//   { src: '/path/to/logo3.png', alt: 'KVK' },
//   { src: '/path/to/logo4.png', alt: 'Kaveri Seeds' },
//   { src: '/path/to/logo5.png', alt: 'ITC Limited' },
//   { src: '/path/to/logo6.png', alt: 'CPRI' },
//   { src: '/path/to/logo7.png', alt: 'SDAU Center' },
//   { src: '/path/to/logo8.png', alt: 'Rural Business Incubation' },
//   { src: '/path/to/logo9.png', alt: 'Bayer' },
//   { src: '/path/to/logo10.png', alt: 'IIIT' },
// ];

// const PartnersCarousel = () => {
//   const [topRow, setTopRow] = useState(logos.slice(0, 5));
//   const [bottomRow, setBottomRow] = useState(logos.slice(5, 10));

//   useEffect(() => {
//     const interval = setInterval(() => {
//       setTopRow(prevRow => {
//         const last = prevRow[prevRow.length - 1]; // Get last element
//         const newRow = [last, ...prevRow.slice(0, prevRow.length - 1)]; // Move last to the front
//         return newRow;
//       });

//       setBottomRow(prevRow => {
//         const first = prevRow[0]; // Get first element
//         const newRow = [...prevRow.slice(1), first]; // Move first to the end
//         return newRow;
//       });
//     }, 2000);

//     return () => clearInterval(interval);
//   }, []);

//   return (
//     <div className="container text-center">
//       <h2 className="mb-4">Partnerships & Associations</h2>
//       <div className="row justify-content-center mb-4">
//         {topRow.map((logo, index) => (
//           logo && logo.src ? ( // Check if logo and logo.src exist
//             <div key={index} className="col-2">
//               <img src={logo.src} alt={logo.alt} className="img-fluid" />
//             </div>
//           ) : null // Render nothing if logo or logo.src is undefined
//         ))}
//       </div>
//       <div className="row justify-content-center">
//         {bottomRow.map((logo, index) => (
//           logo && logo.src ? ( // Check if logo and logo.src exist
//             <div key={index} className="col-2">
//               <img src={logo.src} alt={logo.alt} className="img-fluid" />
//             </div>
//           ) : null // Render nothing if logo or logo.src is undefined
//         ))}
//       </div>
//     </div>
//   );
// };

// export default PartnersCarousel;



// import React, { useState, useEffect } from "react";
// import { motion } from "framer-motion";
// import "./PartnersCarousel.css";

// // Example logo URLs (Replace with actual URLs)
// const topRowLogos = [
//   "https://upload.wikimedia.org/wikipedia/en/thumb/7/73/NABARD_Logo.svg/1200px-NABARD_Logo.svg.png",
//   "https://upload.wikimedia.org/wikipedia/commons/thumb/2/28/Nasscom_logo.svg/2560px-Nasscom_logo.svg.png",
//   "https://www.manage.gov.in/images/ManageLogo.png",
//   "https://landaccelerator.org/wp-content/uploads/2020/04/land-accelerator-logo-2020.png",
//   "https://krishi.rajasthan.gov.in/krishivigyanportal/images/KVKLogo.png",
// ];

// const bottomRowLogos = [
//   "https://upload.wikimedia.org/wikipedia/commons/1/1b/ICAR_Logo.png",
//   "https://gubbaventures.com/images/gubba-logo.png",
//   "https://www.gwmc.gov.in/img/logo.png",
//   "https://upload.wikimedia.org/wikipedia/en/4/49/Government_of_Madhya_Pradesh_Seal.png",
//   "https://www.dehaat.com/static/media/dehaat-logo.50cfad2b.svg",
// ];

// const PartnersCarousel = () => {
//   const [topLogos, setTopLogos] = useState(topRowLogos);
//   const [bottomLogos, setBottomLogos] = useState(bottomRowLogos);

//   useEffect(() => {
//     const interval = setInterval(() => {
//       setTopLogos((prev) => [...prev.slice(1), prev[0]]);
//       setBottomLogos((prev) => [prev[prev.length - 1], ...prev.slice(0, -1)]);
//     }, 2000); // Hold for 2 seconds before shifting
//     return () => clearInterval(interval);
//   }, []);

//   return (
//     <div className="partners-container">
//       <h2 className="title">Partnerships & Associations</h2>

//       {/* Top Row - Moves Right */}
//       <div className="logos top-row">
//         {topLogos.map((logo, index) => (
//           <motion.img
//             key={index}
//             src={logo}
//             alt="Partner Logo"
//             className="logo"
//             animate={{ x: ["0%", "100%", "0%"] }}
//             transition={{ duration: 2, ease: "linear" }}
//           />
//         ))}
//       </div>

//       {/* Bottom Row - Moves Left */}
//       <div className="logos bottom-row">
//         {bottomLogos.map((logo, index) => (
//           <motion.img
//             key={index}
//             src={logo}
//             alt="Partner Logo"
//             className="logo"
//             animate={{ x: ["0%", "-100%", "0%"] }}
//             transition={{ duration: 2, ease: "linear" }}
//           />
//         ))}
//       </div>
//     </div>
//   );
// };

// export default PartnersCarousel;
