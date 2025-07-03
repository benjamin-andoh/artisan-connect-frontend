import { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import API from '../../utils/api';
import '../../styles/landingPage/SearchResultPage.css'

type Artisan = {
  id: number;
  bio: string;
  skills: string[];
  location: string;
  user: {
    username: string;
    email: string;
  };
};

const SearchResultsPage = () => {
  const [searchParams] = useSearchParams();
  const [results, setResults] = useState<Artisan[]>([]);
  const query = searchParams.get('q');

  useEffect(() => {
    if (query) {
      API.get(`/artisan-profile/search?query=${query}`)
        .then(res => setResults(res.data))
        .catch(err => console.error(err));
    }
  }, [query]);

  return (
    <div className="artisan-page-container">
      <h2 className="page-title">Search Results for "{query}"</h2>
      <div className="artisan-grid">
        {results.map((artisan) => (
          <div key={artisan.id} className="artisan-card">
            <p><strong>{artisan.user?.username}</strong></p>
            <p>{artisan.skills.join(', ')}</p>
            <p>{artisan.location}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SearchResultsPage;
