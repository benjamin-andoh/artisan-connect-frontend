const Hero = () => {
  return (
    <section
      className="hero-container"
      style={{ backgroundImage: 'url(/hero-image.jpeg)' }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-black/40 z-10" />

      {/* Content */}
      <div className="hero-title-container">
        <h1 className="hero-title">
          Find Skilled Artisans Near You
        </h1>

        <p className="hero-subtitle">
          Trusted professionals for carpentry, plumbing, roofing, and more.
        </p>

        <div className="search-bar">
          <input
            type="text"
            placeholder="Search for an artisan..."
            className="seach-input-box"
          />
          <button className="search-button">
            Search
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
