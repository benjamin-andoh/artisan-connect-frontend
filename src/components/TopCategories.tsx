import React, { useEffect, useState } from 'react';
import API from '../utils/api';
import { Link } from 'react-router-dom';

type Category = {
  id: number;
  name: string;
  description: string;
  image: string;
};

const TopCategories = () => {
  const [categories, setCategories] = useState<Category[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const response = await API.get('/categories');
        setCategories(response.data);
      } catch (err) {
        setError('Failed to load categories');
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    fetchCategories();
  }, []);

  if (loading) return <p className="text-center py-10">Loading categories...</p>;
  if (error) return <p className="text-center text-red-600 py-10">{error}</p>;

  return (
    <section className="category-container">
      <div className="category-title-container">
        <h2 className="category-title">Top-Rated Categories</h2>

        <div className="category-list">
          {categories.map((cat) => (
           <Link to={`/category/${cat.name.toLowerCase()}`}>
              <div key={cat.id} className="category-card">
                <div className="category-img">
                  <img src={cat.image} alt={cat.name} />
                </div>
                <div className="category-info">
                  <h3 className="category-name">{cat.name}</h3>
                  <p className="category-description">{cat.description}</p>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TopCategories;
