import ArtisanLayout from "../../layouts/ArtisanLayout";

export default function ArtisanDashboard() {
  return (
    <ArtisanLayout>
      <h1 className="text-2xl font-bold mb-4">Welcome, Artisan!</h1>
      <div className="grid grid-cols-2 gap-4">
        <div className="bg-white p-4 rounded shadow">Service Requests: 3</div>
        <div className="bg-white p-4 rounded shadow">Average Rating: 4.5</div>
      </div>
    </ArtisanLayout>
  );
}