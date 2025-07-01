import { useEffect, useState } from 'react';
import API from '../../utils/api';
import '../../styles/CustomerDashboard.css'

const CustomerDashboard = () => {
  const [customer, setCustomer] = useState<any>(null);

  useEffect(() => {
    const fetchCustomer = async () => {
      try {
        const res = await API.get('/users/me');
        setCustomer(res.data);
        console.log("this is the response: ",res)
      } catch (err) {
        console.error('Failed to load customer:', err);
      }
    };

    fetchCustomer();
  }, []);

  if (!customer) return <div className="dashboard-loading">Loading profile...</div>;

  return (
    <div className="customer-dashboard">
      <div className="dashboard-header">
        <img src="/default-avatar.jpg" alt="Avatar" className="customer-avatar" />
        <div className="customer-info">
          <h2>{customer.username}</h2>
          <p>{customer.email}</p>
        </div>
      </div>

      <div className="dashboard-actions">
        <button className="dashboard-button">Create Service Request</button>
        <button className="dashboard-button secondary">View Past Requests</button>
        <button className="dashboard-button danger">Logout</button>
      </div>

      <div className="dashboard-section">
        <h3>Your Reviews</h3>
        <p>You haven't reviewed any artisans yet.</p>
      </div>
    </div>
  );
};

export default CustomerDashboard;
