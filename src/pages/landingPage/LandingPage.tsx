import Hero from '../../components/landingPage/Hero';
import LandingPageNavbar from '../../components/landingPage/NavBarLandingPage';
import PopularArtisans from '../../components/PopularArtisans';
import TopCategories from '../../components/TopCategories';
import WhyChooseUs from '../../components/landingPage/WhyChooseUs';

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
