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


