import { FaStar, FaCogs, FaWrench, FaUsers } from 'react-icons/fa';

const features = [
  {
    icon: <FaStar className="text-orange-500 text-2xl" />,
    title: 'Top-Rated Artisans',
    description: 'We only partner with the best in the industry.',
  },
  {
    icon: <FaCogs className="text-orange-500 text-2xl" />,
    title: 'Wide Range of Services',
    description: 'From landscaping to HVAC — we cover it all.',
  },
  {
    icon: <FaWrench className="text-orange-500 text-2xl" />,
    title: 'Customized Solutions',
    description: 'Tailored projects with flexible options.',
  },
  {
    icon: <FaUsers className="text-orange-500 text-2xl" />,
    title: 'Trusted by Many',
    description: 'More than 5,000 satisfied clients.',
  },
];

const WhyChooseUs = () => {
  return (
    <section className="why-choose-us-container">
      <h2 className="header">Why Choose Us?</h2>
      <div>
        {features.map((feature, idx) => (
          <div
            key={idx}
            className="bg-white p-6 rounded-lg shadow hover:shadow-md transition duration-300 text-center"
          >
            <div className="mb-4 flex justify-center">{feature.icon}</div>
            <h3 className="text-lg font-semibold text-gray-800">{feature.title}</h3>
            <p className="text-sm text-gray-600 mt-2">{feature.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default WhyChooseUs;
