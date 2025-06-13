import { Link } from 'react-router-dom';

export default function Navbar() {
  return (
    <nav className="bg-blue-500 text-white p-4">
      <ul className="flex gap-6">
        <li><Link to="/admin/dashboard">Admin</Link></li>
        <li><Link to="/artisan/dashboard">Artisan</Link></li>
        <li><Link to="/customer/dashboard">Customer</Link></li>
      </ul>
    </nav>
  );
}
