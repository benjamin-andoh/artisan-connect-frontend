import { useParams } from 'react-router-dom';
import { useEffect, useState, type SetStateAction } from 'react';
import API from '../../utils/api';
import '../../styles/artisan/ArtisansByCategoryPage.css'


type Artisan = {
  id: number;
  bio: string;
  skills: string[];
  location: string;
  user?: {
    username: string;
    email: string;
  };
};

const ArtisanByCategoryPage = () => {
  const { name } = useParams();
  const [artisans, setArtisans] = useState<Artisan[]>([]);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (name) {
      API.get(`/artisan-profile/by-category/${name}`)
        .then((res: { data: SetStateAction<Artisan[]>; }) => {
          setArtisans(res.data);
          setError(null);
          console.log("list of artisans: ",res)
        })
        .catch((err: any) => {
          console.error(err);
          setError("Failed to fetch artisans. Please check category name.");
        });
    }
  }, [name]);

return (
  <div className="artisans-category-container">
    <h2 className="artisans-category-title">Artisans in {name}</h2>
    {error && <p className="error-message">{error}</p>}
    <div className="artisan-grid">
      {artisans.map((artisan) => (
        <div key={artisan.id} className="artisan-card">
          <div className="artisan-info">
            <p><strong>Username:</strong> {artisan.user?.username}</p>
            <p><strong>Email:</strong> {artisan.user?.email}</p>
            <p><strong>Bio:</strong> {artisan.bio}</p>
            <p><strong>Skills:</strong> {artisan.skills.join(', ')}</p>
            <p><strong>Location:</strong> {artisan.location}</p>
          </div>
        </div>
      ))}
    </div>
  </div>
);

};

export default ArtisanByCategoryPage;
