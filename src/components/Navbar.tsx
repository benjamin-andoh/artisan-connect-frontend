import { Link } from 'react-router-dom';

export default function Navbar() {
  return (
    <nav className="nav-bar">
      <ul className="nav-bar-ul">
        <li><Link to="/admin/adminDashboard">Admin</Link></li>
        <li><Link to="/artisan/artisanDashboard">Artisan</Link></li>
        <li><Link to="/customer/customerDashboard">Customer</Link></li>
      </ul>
    </nav>
  );
}
