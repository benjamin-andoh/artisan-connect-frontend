import { useParams } from 'react-router-dom';
import { useEffect, useState, type SetStateAction } from 'react';
import API from '../../utils/api';

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
        })
        .catch((err: any) => {
          console.error(err);
          setError("Failed to fetch artisans. Please check category name.");
        });
    }
  }, [name]);

  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-4">Artisans in {name}</h2>
      {error && <p className="text-red-500">{error}</p>}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {artisans.map((artisan) => (
          <div key={artisan.id} className="p-4 border rounded shadow">
            <p><strong>Username:</strong> {artisan.user?.username}</p>
            <p><strong>Email:</strong> {artisan.user?.email}</p>
            <p><strong>Skills:</strong> {artisan.skills.join(', ')}</p>
            <p><strong>Location:</strong> {artisan.location}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ArtisanByCategoryPage;
