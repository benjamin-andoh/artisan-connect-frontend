// src/pages/CategoryPage.tsx
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import API from '../../utils/api';
import ArtisanCard from '../../components/ArtisanCard';

type Artisan = {
  id: number;
  name: string;
  rating: number;
  bio?: string;
  image?: string;
  location?: string;
};

const CategoryPage = () => {
  const { name } = useParams<{ name: string }>();
  const [artisans, setArtisans] = useState<Artisan[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchArtisans = async () => {
      try {
        const response = await API.get(`/artisans?category=${name}`);
        setArtisans(response.data);
      } catch (err) {
        setError('Failed to load artisans');
      } finally {
        setLoading(false);
      }
    };

    fetchArtisans();
  }, [name]);

  if (loading) return <p className="text-center py-10">Loading artisans...</p>;
  if (error) return <p className="text-center text-red-600 py-10">{error}</p>;

  return (
    <section className="artisan-page-container">
      <h2 className="page-title">Artisans in {name}</h2>
      <div className="artisan-grid">
        {artisans.length === 0 ? (
          <p>No artisans found in this category.</p>
        ) : (
          artisans.map((artisan) => (
            <ArtisanCard key={artisan.id} artisan={artisan} />
          ))
        )}
      </div>
    </section>
  );
};

export default CategoryPage;
