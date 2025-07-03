import { Link } from 'react-router-dom';
import '../../styles/landingPage/LandingPage.css'

const LandingPageNavbar = () => {
    return (
        <nav className='navbar'>
            <div className='navbar-left'>
                <Link to='/' className='navbar-logo'>ArtisanConnect</Link>
            </div>
            <div className='navbar-right'>
                <Link to='/login' className='btn btn-outline' aria-label="Login">Login</Link>
                <Link to='/register' className='btn btn-primary' aria-label="Register">Register</Link>
            </div>
        </nav>
    );
};

export default LandingPageNavbar;
