import ArtisanLayout from "../../layouts/ArtisanLayout";

export default function ArtisanDashboard() {
  return (
    <ArtisanLayout>
      <h1>Artisan</h1>
      <div>
        <div className="Dashboard">Dashboard</div>
        <div>Service Requests: 3</div>
        <div>Average Rating: 4.5</div>
      </div>
    </ArtisanLayout>
  );
}