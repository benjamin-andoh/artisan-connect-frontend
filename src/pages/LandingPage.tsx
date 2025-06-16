import React, { useEffect, useState } from 'react';
import axios from 'axios';

interface ArtisanCategory {
  id: number;
  name: string;
}

interface Artisan {
  id: number;
  name: string;
  imageUrl: string;
  rating: number;
  platforms?: string[]; // optional if needed
}

const LandingPage: React.FC = () => {
  const [categories, setCategories] = useState<ArtisanCategory[]>([]);
  const [selectedCategory, setSelectedCategory] = useState<number | null>(null);
  const [artisans, setArtisans] = useState<Artisan[]>([]);

  // Fetch categories
  useEffect(() => {
    axios.get('/api/categories')
      .then((res) => {
        if (Array.isArray(res.data)) {
          setCategories(res.data);
          if (res.data.length > 0) {
            setSelectedCategory(res.data[0].id);
          }
        } else {
          console.error('Categories response is not an array:', res.data);
        }
      })
      .catch((err) => console.error('Failed to fetch categories:', err));
  }, []);

  // Fetch artisans when category changes
  useEffect(() => {
    if (selectedCategory !== null) {
      axios.get(`/api/artisans?categoryId=${selectedCategory}`)
        .then((res) => {
          if (Array.isArray(res.data)) {
            setArtisans(res.data);
          } else {
            console.error('Artisans response is not an array:', res.data);
          }
        })
        .catch((err) => console.error('Failed to fetch artisans:', err));
    }
  }, [selectedCategory]);

  return (
    <div className="flex text-white bg-gray-900 min-h-screen">
      {/* Sidebar */}
      <aside className="w-64 p-6 border-r border-gray-700">
        <h2 className="text-xl font-semibold mb-6">Artisan Categories</h2>
        <ul className="space-y-3">
          {categories.map((category) => (
            <li
              key={category.id}
              onClick={() => setSelectedCategory(category.id)}
              className={`cursor-pointer hover:text-blue-400 ${
                selectedCategory === category.id ? 'text-blue-500 font-bold' : ''
              }`}
            >
              {category.name}
            </li>
          ))}
        </ul>
      </aside>

      {/* Main Content */}
      <main className="flex-1 p-8">
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-3xl font-bold">Artisans</h1>
          {/* Future Filter Controls */}
          <div className="flex space-x-4">
            <select className="bg-gray-800 text-white p-2 rounded">
              <option>Order by</option>
            </select>
            <select className="bg-gray-800 text-white p-2 rounded">
              <option>Location</option>
            </select>
          </div>
        </div>

        {/* Artisan Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {artisans.map((artisan) => (
            <div key={artisan.id} className="bg-gray-800 rounded-lg p-4 shadow hover:shadow-lg transition">
              <img
                src={artisan.imageUrl}
                alt={artisan.name}
                className="w-full h-40 object-cover rounded mb-4"
              />
              <h3 className="text-lg font-semibold mb-2">{artisan.name}</h3>
              <div className="flex justify-between items-center text-sm text-gray-400">
                <span>⭐ {artisan.rating}</span>
                <button className="hover:text-red-400">♡</button>
              </div>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
};

export default LandingPage;
