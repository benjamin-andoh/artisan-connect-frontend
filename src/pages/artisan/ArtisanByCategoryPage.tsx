import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import API from '../../utils/api';
import '../../styles/artisan/ArtisansByCategoryPage.css';
import JobRequestForm from '../../components/JobRequestForm';

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
  const [selectedArtisanId, setSelectedArtisanId] = useState<number | null>(null);

  useEffect(() => {
    if (name) {
      API.get(`/artisan-profile/by-category/${name}`)
        .then((res) => {
          setArtisans(res.data);
          setError(null);
        })
        .catch((err) => {
          console.error(err);
          setError('Failed to fetch artisans. Please check category name.');
        });
    }
  }, [name]);

  const openJobRequestForm = (artisanId: number) => {
    setSelectedArtisanId(artisanId);
  };

  const closeJobRequestForm = () => {
    setSelectedArtisanId(null);
  };

  return (
    <div className="artisans-category-container">
      <h2 className="artisans-category-title">Artisans in {name}</h2>
      {error && <p className="error-message">{error}</p>}
      <div className="artisan-grid">
        {artisans.map((artisan) => (
          <div key={artisan.id} className="artisan-card">
            <div className="artisan-info">
              <img src='../../images/default-avatar.jpeg' alt='default-avatar' />
              <p><strong>Username:</strong> {artisan.user?.username || 'N/A'}</p>
              <p><strong>Email:</strong> {artisan.user?.email || 'N/A'}</p>
              <p><strong>Bio:</strong> {artisan.bio}</p>
              <p><strong>Skills:</strong> {artisan.skills.join(', ')}</p>
              <p><strong>Location:</strong> {artisan.location}</p>
              <button
                className="contact-artisan-button"
                onClick={() => openJobRequestForm(artisan.id)}
              >
                Contact Artisan
              </button>
            </div>
          </div>
        ))}
      </div>

      {selectedArtisanId !== null && (
        <div className="modal">
          <div className="modal-overlay" onClick={closeJobRequestForm}></div>
          <div className="modal-content">
            <JobRequestForm artisanId={selectedArtisanId} onClose={closeJobRequestForm} />
          </div>
        </div>
      )}
    </div>
  );
};

export default ArtisanByCategoryPage;
