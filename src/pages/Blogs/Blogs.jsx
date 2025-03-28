import React, { useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "aos/dist/aos.css";
import AOS from "aos";
import Navbar from "../../Components/Navbar";
import Footer from "../../Components/Footer";

const Blogs = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000, // Animation duration
      easing: "ease-in-out",
      once: true, // Run animation only once
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
        {/* Hero Section */}
        <section className="text-center py-5" data-aos="fade-down">
          <h1 className="fw-bold">Blogs</h1>
          <p className="lead">
            Something short and leading about the collection below—its contents,
            the creator, etc. Make it short and sweet, but not too short so folks
            don’t simply skip over it entirely.
          </p>
        </section>

        {/* Blog Section */}
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

        {/* Feature Section - Image & Text */}
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

        {/* Second Feature Section */}
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





// import React from "react";
// import "bootstrap/dist/css/bootstrap.min.css";
// import Navbar from "../../Components/Navbar";
// import Footer from "../../Components/Footer";

// const Blogs = () => {
//   const blogImages = [
//     "/b1.png",
//     "/b2.png",
//     "/b3.png",
//     "/b1.png",
//     "/b2.png",
//     "/b3.png", 
   
//   ];

//   return (
//     <>
//       <Navbar />
//       <div>
//         {/* Hero Section */}
//         <section className="text-center py-5">
//           <h1 className="fw-bold">Blogs</h1>
//           <p className="lead">
//             Something short and leading about the collection below—its contents,
//             the creator, etc. Make it short and sweet, but not too short so folks
//             don’t simply skip over it entirely.
//           </p>
//         </section>

//         {/* Blog Section */}
//         <div className="container">
//           <h2 className="text-center my-4">Latest Blogs</h2>
//           <div className="row">
//             {blogImages.map((image, index) => (
//               <div key={index} className="col-md-4">
//                 <div className="card mb-4 shadow-sm">
//                   <img
//                     src={image}
//                     className="card-img-top"
//                     alt={`Blog Thumbnail ${index + 1}`}
//                   />
//                   <div className="card-body">
//                     <p className="card-text">
//                       This is a wider card with supporting text below as a natural
//                       lead-in to additional content. This content is a little bit
//                       longer.
//                     </p>
//                     <div className="d-flex justify-content-between align-items-center">
//                       <div className="btn-group">
//                         <button className="btn btn-sm btn-outline-secondary">View</button>
//                         <button className="btn btn-sm btn-outline-secondary">Edit</button>
//                       </div>
//                       <small className="text-muted">9 mins</small>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>

//         {/* Feature Section - Image & Text */}
//         <div className="container my-5">
//           <div className="row align-items-center">
//             <div className="col-md-6">
//               <h2>First Featurette Heading. <span className="text-muted">It’ll blow your mind.</span></h2>
//               <p>
//                 Donec ullamcorper nulla non metus auctor fringilla. Vestibulum id ligula
//                 porta felis euismod semper. Praesent commodo cursus magna, vel scelerisque nisl consectetur.
//               </p>
//             </div>
//             <div className="col-md-6">
//               <img src="/b1.png" className="img-fluid" alt="Feature" />
//             </div>
//           </div>
//         </div>

//         {/* Second Feature Section */}
//         <div className="container my-5">
//           <div className="row align-items-center flex-md-row-reverse">
//             <div className="col-md-6">
//               <h2>Oh yeah, it's that good. <span className="text-muted">See for yourself.</span></h2>
//               <p>
//                 Donec ullamcorper nulla non metus auctor fringilla. Vestibulum id ligula
//                 porta felis euismod semper. Praesent commodo cursus magna, vel scelerisque nisl consectetur.
//               </p>
//             </div>
//             <div className="col-md-6">
//               <img src="b2.png" className="img-fluid" alt="Feature" />
//             </div>
//           </div>
//         </div>
//       </div>
//       <Footer />
//     </>
//   );
// };

// export default Blogs;




// import React from "react";
// import "bootstrap/dist/css/bootstrap.min.css";
// import Navbar from "../../Components/Navbar";
// import Footer from "../../Components/Footer";

// const Blogs = () => {
//   return (
//     <>
//     <Navbar />
//     <div>
//       {/* Hero Section */}
//       <section className="text-center py-5">
//         <h1 className="fw-bold">Blogs</h1>
//         <p className="lead">
//           Something short and leading about the collection below—its contents,
//           the creator, etc. Make it short and sweet, but not too short so folks
//           don’t simply skip over it entirely.
//         </p>
//         {/* <div>
//           <button className="btn btn-primary m-2">Main Call to Action</button>
//           <button className="btn btn-secondary">Secondary Action</button>
//         </div> */}
//       </section>

//       {/* Blog Section */}
//       <div className="container">
//         <h2 className="text-center my-4">Latest Blogs</h2>
//         <div className="row">
//           {Array.from({ length: 6 }).map((_, index) => (
//             <div key={index} className="col-md-4">
//               <div className="card mb-4 shadow-sm">
//                 <div className="card-img-top bg-secondary text-white d-flex align-items-center justify-content-center" style={{ height: "225px" }}>
//                   <h5>Thumbnail</h5>
//                 </div>
//                 <div className="card-body">
//                   <p className="card-text">
//                     This is a wider card with supporting text below as a natural
//                     lead-in to additional content. This content is a little bit
//                     longer.
//                   </p>
//                   <div className="d-flex justify-content-between align-items-center">
//                     <div className="btn-group">
//                       <button className="btn btn-sm btn-outline-secondary">View</button>
//                       <button className="btn btn-sm btn-outline-secondary">Edit</button>
//                     </div>
//                     <small className="text-muted">9 mins</small>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>

//       {/* Feature Section - Image & Text */}
//       <div className="container my-5">
//         <div className="row align-items-center">
//           <div className="col-md-6">
//             <h2>First Featurette Heading. <span className="text-muted">It’ll blow your mind.</span></h2>
//             <p>
//               Donec ullamcorper nulla non metus auctor fringilla. Vestibulum id ligula
//               porta felis euismod semper. Praesent commodo cursus magna, vel scelerisque nisl consectetur.
//             </p>
//           </div>
//           <div className="col-md-6">
//             <img src="https://via.placeholder.com/500" className="img-fluid" alt="Feature" />
//           </div>
//         </div>
//       </div>

//       {/* Second Feature Section */}
//       <div className="container my-5">
//         <div className="row align-items-center flex-md-row-reverse">
//           <div className="col-md-6">
//             <h2>Oh yeah, it's that good. <span className="text-muted">See for yourself.</span></h2>
//             <p>
//               Donec ullamcorper nulla non metus auctor fringilla. Vestibulum id ligula
//               porta felis euismod semper. Praesent commodo cursus magna, vel scelerisque nisl consectetur.
//             </p>
//           </div>
//           <div className="col-md-6">
//             <img src="https://via.placeholder.com/500" className="img-fluid" alt="Feature" />
//           </div>
//         </div>
//       </div>
//     </div>
//     <Footer />
//     </>
//   );
// };

// export default Blogs;
