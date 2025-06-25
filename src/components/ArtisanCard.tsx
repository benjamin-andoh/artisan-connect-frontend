// src/components/ArtisanCard.tsx
import React from 'react';

type Props = {
  artisan: {
    id: number;
    name: string;
    rating: number;
    bio?: string;
    image?: string;
    location?: string;
  };
};

const ArtisanCard: React.FC<Props> = ({ artisan }) => {
  return (
    <div className="artisan-card">
      <img
        src={artisan.image || '/default-avatar.jpg'}
        alt={artisan.name}
        className="artisan-avatar"
      />
      <h3 className="artisan-name1">{artisan.name}</h3>
      <p className="artisan-rating">⭐ {artisan.rating.toFixed(1)}</p>
      <p className="artisan-bio">{artisan.bio}</p>
      <p className="artisan-location">{artisan.location}</p>
    </div>
  );
};

export default ArtisanCard;
