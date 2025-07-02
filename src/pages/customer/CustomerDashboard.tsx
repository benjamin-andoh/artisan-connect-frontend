import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../../styles/CustomerDashboard.css'; // Import the CSS
import API from '../../utils/api';

const CustomerDashboard = () => {
  const [profile, setProfile] = useState<any>(null);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchCustomerProfile = async () => {
      try {
        const res = await API.get('/customer-profile');
        setProfile(res.data);
        console.log(res)
      } catch (err) {
        console.error('Failed to load customer profile:', err);
      }
    };

    fetchCustomerProfile();
  }, []);

  if (!profile) return <div className="dashboard-loading">Loading profile...</div>;

  return (
    <div className="customer-dashboard-container">
      <div className="customer-profile-card">
        <img
          src={profile.avatar || '/default-avatar.jpg'}
          alt="Customer Avatar"
          className="customer-avatar"
        />
        <div className="customer-details">
          <h2>{profile.fullName}</h2>
          <p><strong>Email:</strong>{} {profile.User?.email}</p>
          <p><strong>Phone:</strong> {profile.phoneNumber || 'N/A'}</p>
          <p><strong>Address:</strong> {profile.address || 'N/A'}</p>
          <p><strong>City:</strong> {profile.city || 'N/A'}</p>
        </div>
      </div>

      <div className="customer-actions">
        <button onClick={() => navigate('/service-request/create')} className="action-button primary">
          + Create Service Request
        </button>
        <button onClick={() => navigate('/service-request/history')} className="action-button secondary">
          View Past Requests
        </button>
        <button onClick={() => navigate('/logout')} className="action-button danger">
          Logout
        </button>
      </div>

      <div className="customer-reviews-section">
        <h3>Your Reviews</h3>
        <p>You haven't reviewed any artisans yet.</p>
      </div>
    </div>
  );
};

export default CustomerDashboard;
