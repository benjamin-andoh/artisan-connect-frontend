const categories = [
  {
    name: 'Carpentry',
    image: '/carpentry.jpeg',
    description: 'Fine woodwork operations',
  },
  {
    name: 'Masonry',
    image: '/masonry.jpeg',
    description: 'Brick and stonework projects',
  },
  {
    name: 'Roofing',
    image: '/roofing.jpg',
    description: 'Professional roofing services',
  },
  {
    name: 'Plumbing',
    image: '/plumbing.jpg',
    description: 'Licensed plumbers',
  },
  {
    name: 'Electrical',
    image: '/electrical.jpeg',
    description: 'Experienced electricians',
  },
];

const TopCategories = () => {
  return (
    <section className="category-container">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-3xl font-bold text-gray-900 mb-4">
          Top-Rated Categories
        </h2>
        <div className="w-20 h-1 mx-auto bg-orange-500 rounded-full mb-12"></div>

        <div>
          {categories.map((cat, index) => (
            <div key={index}>
              <div className="category-img">
                <img
                  src={cat.image}
                  alt={cat.name}
                />
              </div>
              <div className="cagtegory-info">
                <h3 className="category-name">
                  {cat.name}
                </h3>
                <p className="category-description">{cat.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TopCategories;
