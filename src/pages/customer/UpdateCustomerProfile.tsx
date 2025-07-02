import React, { useEffect, useState } from 'react';
import { useAuth } from '../../context/AuthContext';
import { useNavigate } from 'react-router-dom';
import API from '../../utils/api';
import '../../styles/UpdateCustomerProfile.css'

const UpdateCustomerProfile = () => {
  const { user } = useAuth();
  const navigate = useNavigate();

  const [fullName, setFullName] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [address, setAddress] = useState('');
  const [city, setCity] = useState('');
  const [avatar, setAvatar] = useState('');
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!user || user.userType !== 'customer') {
      navigate('/not-authorized');
    }

    if (user?.profileCompleted) {
      navigate('/customer-dashboard');
    }
  }, [user]);

  useEffect(() => {
    const fetchProfile = async () => {
      try {
        const res = await API.get(`/customer-profile`);
        const profile = res.data;

        setFullName(profile.fullName || '');
        setPhoneNumber(profile.phoneNumber || '');
        setAddress(profile.address || '');
        setCity(profile.city || '');
        setAvatar(profile.avatar || '');
      } catch (err) {
        console.error('Error fetching customer profile:', err);
      } finally {
        setLoading(false);
      }
    };

    fetchProfile();
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      await API.put(`/customer-profile/${user?.id}`, {
        fullName,
        phoneNumber,
        address,
        city,
        avatar,
      });

      navigate('/customer-dashboard');
    } catch (err: any) {
      console.error('Update failed:', err.response?.data?.message);
    }
  };

  if (loading) return <p>Loading...</p>;

  return (
    <div className="customer-update-container">
      <h2 className="customer-update-title">Complete Your Profile</h2>
      <form onSubmit={handleSubmit} className="space-y-4 customer-update-form">
        <div>
          <label>Full Name</label>
          <input
            type="text"
            value={fullName}
            onChange={(e) => setFullName(e.target.value)}
            required
          />
        </div>

        <div>
          <label>Phone Number</label>
          <input
            type="tel"
            value={phoneNumber}
            onChange={(e) => setPhoneNumber(e.target.value)}
          />
        </div>

        <div>
          <label>Address</label>
          <input
            type="text"
            value={address}
            onChange={(e) => setAddress(e.target.value)}
          />
        </div>

        <div>
          <label>City</label>
          <input
            type="text"
            value={city}
            onChange={(e) => setCity(e.target.value)}
          />
        </div>

        <div>
          <label>Avatar URL</label>
          <input
            type="text"
            value={avatar}
            onChange={(e) => setAvatar(e.target.value)}
          />
        </div>

        <button type="submit" className="save-profile-btn">
          Save Profile
        </button>
      </form>
    </div>
  );
};

export default UpdateCustomerProfile;
