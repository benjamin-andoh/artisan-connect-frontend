import Hero from '../components/Hero';
import LandingPageNavbar from '../components/NavBarLandingPage';
import PopularArtisans from '../components/PopularArtisans';
import TopCategories from '../components/TopCategories';
import WhyChooseUs from '../components/WhyChooseUs';

const LandingPage = () => {
  return (
    <div>
      <LandingPageNavbar />
      <Hero />
      <TopCategories />
      <WhyChooseUs/>
      <PopularArtisans/>
    </div>
  );
};

export default LandingPage;
