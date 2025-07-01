import {Routes, Route } from 'react-router-dom';
import AdminDashboard from './pages/admin/AdminDashboard';
import ArtisanDashboard from './pages/artisan/ArtisanDashboard ';
import CustomerDashboard from './pages/customer/CustomerDashboard';
import Login from './pages/Login.tsx';
import Register from './pages/Register';
import VerifyEmail from './pages/VerifyEmail';
import UsersList from './components/UsersList.tsx';
import LandingPage from './pages/LandingPage.tsx';
import CategoryPage from './pages/Category/CategoryPage.tsx';
import ArtisanByCategoryPage from './pages/artisan/ArtisanByCategoryPage.tsx';
import CreateProfilePage from './pages/artisan/CreateProfilePage.tsx';
import PrivateRoute from './components/PrivateRoute.tsx';
import SearchResultsPage from './pages/SearchResultsPage.tsx';
import EmailVerification from './pages/EmailVerification.tsx';
import UpdateArtisanProfile from './pages/artisan/UpdateArtisanProfile.tsx';


export default function App() {
  return (
      <Routes>
        <Route path="/register" element={<Register />} />
        <Route path="/verify-email" element={<VerifyEmail />} />
        <Route path='/email-verification' element={< EmailVerification />}/>
        <Route path="/login" element={<Login />} />
        <Route path='/' element={< LandingPage />} />
        <Route path="/artisan-profile/by-category/:name" element={<ArtisanByCategoryPage />} />
        <Route path="/category/:name" element={<CategoryPage />} />
        <Route path="/users" element={<UsersList />} />
        <Route path="/admin" element={<AdminDashboard />} />
        <Route path="/artisan" element={<ArtisanDashboard />} />
        <Route path="/artisan/update-profile" element={<UpdateArtisanProfile />} />
        <Route path="/customer" element={<CustomerDashboard />} />
        <Route 
          path="/create-profile" 
          element={ 
            <PrivateRoute>
              <CreateProfilePage />
            </PrivateRoute>
          } 
          />
          <Route path="/search" element={<SearchResultsPage />} />

      </Routes>
  );
}



// Inside your <Routes>:

