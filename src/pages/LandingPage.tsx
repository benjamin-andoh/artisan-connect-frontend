import Hero from '../components/Hero';
import PopularArtisans from '../components/PopularArtisans';
import TopCategories from '../components/TopCategories';
import WhyChooseUs from '../components/WhyChooseUs';

const LandingPage = () => {
  return (
    <div>
      <Hero />
      <TopCategories />
      <WhyChooseUs/>
      <PopularArtisans/>
    </div>
  );
};

export default LandingPage;
