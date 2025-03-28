import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";



import Navbar from '../../Components/Navbar';
import HeroSection from '../../Components/HeroSection';
import CustomerSatisfaction from '../../Components/CustomerSatisfaction';
import StatsSection from '../../Components/StatsSection';
import ProductsSection from '../../Components/ProductsSection';
import NewsSection from '../../Components/NewsSection';
import PartnersCarousel from '../../Components/PartnersCarousel';
import CardSection from '../../Components/CardSection';
import Footer from '../../Components/Footer';


function Home() {

  const location = useLocation();

  useEffect(() => {
    // Check if the URL contains #our-partners
    if (location.hash === "#our-partners") {
      const element = document.getElementById("our-partners");
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
  }, [location]);
  return (
    <>
      <Navbar />
      <HeroSection />
      <CustomerSatisfaction />
      <StatsSection />
      <ProductsSection />
      <NewsSection />
   
      <PartnersCarousel />
      <CardSection />
      <Footer />
      
    </>

  );
}

export default Home;
