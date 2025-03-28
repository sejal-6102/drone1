
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
