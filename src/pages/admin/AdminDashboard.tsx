import AdminLayout from "../../layouts/AdminLayout";

export default function AdminDashboard() {
  return (
    <AdminLayout>
      <h1 className="text-2xl font-bold mb-4">Admin</h1>
      <div className="grid grid-cols-3 gap-4">
        <div className="Dashboard">Dashboard</div>
        <div className="bg-white p-4 rounded shadow">Pending Approvals: 5</div>
        <div className="bg-white p-4 rounded shadow">Total Categories: 10</div>
      </div>
    </AdminLayout>
  );
}

