const popularArtisans = [
  { name: 'Plumbing', image: '/images/plumbing.jpg' },
  { name: 'Carpentry', image: '/images/carpentry.jpeg' },
  { name: 'Masonry', image: '/images/masonry.jpeg' },
  { name: 'Roofing', image: '/images/roofing.jpg' },
  { name: 'Painting', image: '/images/painting.jpg' },
  { name: 'Electrical', image: '/images/electrical.jpeg' },
  { name: 'HVAC', image: '/images/hvac.jpg' },
  { name: 'Landscaping', image: '/images/landscaping.jpg' },
];

const PopularArtisans = () => {
  return (
    <section className="pupolar-artisan-container">
      <h2 className="text-2xl font-bold text-center text-gray-800 mb-10">
        Explore Categories
      </h2>
      <div className="artisan-ul">
        {popularArtisans.map((artisan, idx) => (
          <div key={idx} className="artisan-info">
            <img
              src={artisan.image}
              alt={artisan.name}
              className="artisan-image"
            />
            <div className="artisan-name">
              <h3 className="text-md font-semibold text-gray-800">{artisan.name}</h3>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default PopularArtisans;
