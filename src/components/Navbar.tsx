import { Link } from 'react-router-dom';

export default function Navbar() {
  return (
    <nav className="bg-blue-500 text-white p-4">
      <ul className="flex gap-6">
        <li><Link to="/admin/adminDashboard">Admin</Link></li>
        <li><Link to="/artisan/artisanDashboard">Artisan</Link></li>
        <li><Link to="/customer/customerDashboard">Customer</Link></li>
      </ul>
    </nav>
  );
}
