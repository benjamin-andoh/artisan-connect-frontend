import { useEffect, useState } from 'react';
import API from '../../utils/api';
import '../../styles/artisan/ArtisanDashboard.css'



export default function ArtisanDashboard() {
  const [artisan, setArtisan] = useState<any>(null);

  useEffect(() => {
    const fetchProfile = async () => {
      try {
        const response = await API.get('/artisan-profile/me');
        setArtisan(response.data);
        console.log("response from the frontend ", response)
      } catch (error) {
        console.error('Failed to load artisan profile:', error);
      }
    };

    fetchProfile();
  }, []);

  if (!artisan) return <div className="dashboard-loading">Loading profile...</div>;

  return (
    <div className="artisan-dashboard">
      <div className="dashboard-header">
        <img src="/default-avatar.jpg" alt="Avatar" className="artisan-avatar" />
        <div className="artisan-info">
          <h2>{artisan.user?.username}</h2>
          <p>{artisan.user?.email}</p>
          <p className="location">{artisan.location}</p>
        </div>
      </div>

      <div className="dashboard-section">
        <h3>Bio</h3>
        <p>{artisan.bio}</p>
      </div>

      <div className="dashboard-section">
        <h3>Skills</h3>
        <p>{artisan.skills?.join(', ')}</p>
      </div>

      <div className="dashboard-section">
        <h3>Categories</h3>
        <p>{artisan.categories?.map((cat: any) => cat.name).join(', ')}</p>
      </div>

      <div className="dashboard-metrics">
        <div>
          <strong>Service Requests</strong>
          <p>3</p>
        </div>
        <div>
          <strong>Average Rating</strong>
          <p>4.5 ★</p>
        </div>
      </div>

      <div className="dashboard-actions">
        <button className="edit-button">Edit Profile</button>
        <button className="logout-button">Logout</button>
      </div>
    </div>
  );
}
