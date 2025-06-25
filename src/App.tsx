import {Routes, Route } from 'react-router-dom';
import AdminDashboard from './pages/admin/AdminDashboard';
import ArtisanDashboard from './pages/artisan/ArtisanDashboard ';
import CustomerDashboard from './pages/customer/CustomerDashboard';
import Login from './components/Login';
import Register from './pages/Register';
import VerifyEmail from './pages/VerifyEmail';
import UsersList from './components/UsersList.tsx';
import LandingPage from './pages/LandingPage.tsx';
import CategoryPage from './pages/Category/CategoryPage.tsx';

export default function App() {
  return (
      <Routes>
        <Route path="/register" element={<Register />} />
        <Route path="/verify-email" element={<VerifyEmail />} />
        <Route path="/login" element={<Login />} />
        <Route path='/landing-page' element={< LandingPage />} />
        <Route path="/category/:name" element={<CategoryPage />} />
        <Route path="/users" element={<UsersList />} />
        <Route path="/admin" element={<AdminDashboard />} />
        <Route path="/artisan" element={<ArtisanDashboard />} />
        <Route path="/customer" element={<CustomerDashboard />} />
      </Routes>
  );
}



// Inside your <Routes>:

