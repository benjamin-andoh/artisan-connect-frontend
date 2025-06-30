import CustomerLayout from "../../layouts/CustomerLayout";

export default function CustomerDashboard() {
  return (
    <CustomerLayout>
      <h1 className="Welcome">Welcome</h1>
      <div>
        <div className="Dashboard">Dashboard</div>
        <div>Completed Services: 5</div>
      </div>
    </CustomerLayout>
  );

}