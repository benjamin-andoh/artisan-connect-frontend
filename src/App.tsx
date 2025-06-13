import { Routes, Route } from 'react-router-dom';
import AdminDashboard from './pages/admin/AdminDashboard';
import ArtisanDashboard from './pages/artisan/ArtisanDashboard ';
import CustomerDashboard from './pages/customer/CustomerDashboard';

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<AdminDashboard />} />
      <Route path="/artisan/dashboard" element={<ArtisanDashboard />} />
      <Route path="/customer/dashboard" element={<CustomerDashboard />} />
    </Routes>
  );
}

