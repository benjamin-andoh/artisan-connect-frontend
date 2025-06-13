import CustomerLayout from "../../layouts/CustomerLayout";

export default function CustomerDashboard() {
  return (
    <CustomerLayout>
      <h1 className="text-2xl font-bold mb-4">Welcome, Customer!</h1>
      <div className="grid grid-cols-2 gap-4">
        <div className="bg-white p-4 rounded shadow">Your Requests: 2</div>
        <div className="bg-white p-4 rounded shadow">Completed Services: 5</div>
      </div>
    </CustomerLayout>
  );

}