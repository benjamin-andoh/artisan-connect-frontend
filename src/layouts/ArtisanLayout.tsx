import type { ReactNode } from 'react';
import { Link } from 'react-router-dom';

export default function ArtisnLayout({ children }: { children: ReactNode }) {
  return (
    <div className="flex min-h-screen">
      <aside className="w-64 bg-gray-800 text-white p-4">
        <ul className="space-y-2">
          <li><Link to="/artisan/dashboard">Artisan Dashboard</Link></li>
          <li><Link to="/artisan/categories">Manage Categories</Link></li>
        </ul>
      </aside>
      <main className="flex-1 p-6 bg-gray-100">
        {children}
      </main>
    </div>
  );
}
