import { Link } from "react-router-dom"


const LandingPageNavbar = () => {
    return (
        <nav className='nav-container'>
            <div className='nav-title'>
                <Link to='/'> ArtisanConnect</Link>
            </div>
            <div className="land-page-login">
                <Link to='/login' className="login-link">Login</Link>
            </div>
            <div>
                <Link to='/register' className="register-link">Register</Link>
            </div>
        </nav>
    )
}

export default LandingPageNavbar;