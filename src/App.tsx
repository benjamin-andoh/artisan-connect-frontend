import {Routes, Route } from 'react-router-dom';
import AdminDashboard from './pages/admin/AdminDashboard';
import ArtisanDashboard from './pages/artisan/ArtisanDashboard ';
import CustomerDashboard from './pages/customer/CustomerDashboard';
import Register from './pages/landingPage/Register.tsx';
import UsersList from './components/UsersList.tsx';
import LandingPage from './pages/landingPage/LandingPage.tsx';
import CategoryPage from './pages/Category/CategoryPage.tsx';
import ArtisanByCategoryPage from './pages/artisan/ArtisanByCategoryPage.tsx';
import CreateProfilePage from './pages/artisan/CreateProfilePage.tsx';
import PrivateRoute from './components/PrivateRoute.tsx';
import SearchResultsPage from './pages/landingPage/SearchResultsPage.tsx';
import EmailVerification from './pages/landingPage/EmailVerification.tsx';
import UpdateArtisanProfile from './pages/artisan/UpdateArtisanProfile.tsx';
import UpdateCustomerProfile from './pages/customer/UpdateCustomerProfile.tsx';
import Login from './pages/landingPage/Login.tsx';
import VerifyEmail from './pages/landingPage/VerifyEmail.tsx';


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
        <Route path="/artisan-dashboard" element={<ArtisanDashboard />} />
        <Route path="/artisan/update-profile" element={<UpdateArtisanProfile />} />
        <Route path="/customer-dashboard" element={<CustomerDashboard />} />
        <Route path="/customer/update-profile" element={<UpdateCustomerProfile />} />
        <Route path="/landing-page" element={< LandingPage/>}/>
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

