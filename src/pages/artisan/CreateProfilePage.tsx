// src/pages/CreateProfilePage.tsx
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../../styles/CreateProfilePage.css';
import API from '../../utils/api';

interface Category {
  id: number;
  name: string;
}

const CreateProfilePage = () => {
  const [bio, setBio] = useState('');
  const [skills, setSkills] = useState('');
  const [location, setLocation] = useState('');
  const [selectedCategoryId, setSelectedCategoryId] = useState<number | null>(null);
  const [categories, setCategories] = useState<Category[]>([]);
  const [error, setError] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    API.get('/categories')
      .then((res) => setCategories(res.data))
      .catch(() => setError('Failed to load categories'));
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');

    if (!selectedCategoryId) {
      setError('Please select a category');
      return;
    }

    try {
      await API.post('/artisan-profile', {
        bio,
        skills: skills.split(',').map((s) => s.trim()),
        location,
        categoryIds: [selectedCategoryId],
      });

      navigate('/dashboard'); // Or wherever makes sense
    } catch (err: any) {
      setError(err.response?.data?.error || 'Something went wrong');
    }
  };

  return (
    <div className="form-container">
      <h2>Create Artisan Profile</h2>

      <form onSubmit={handleSubmit}>
        <label>
          Bio
          <textarea value={bio} onChange={(e) => setBio(e.target.value)} required />
        </label>

        <label>
          Skills (comma-separated)
          <input value={skills} onChange={(e) => setSkills(e.target.value)} required />
        </label>

        <label>
          Location
          <input value={location} onChange={(e) => setLocation(e.target.value)} required />
        </label>

        <label>
          Select Category
          <select
            value={selectedCategoryId || ''}
            onChange={(e) => setSelectedCategoryId(Number(e.target.value))}
            required
          >
            <option value="" disabled>
              -- Choose a category --
            </option>
            {categories.map((cat) => (
              <option key={cat.id} value={cat.id}>
                {cat.name}
              </option>
            ))}
          </select>
        </label>

        {error && <p className="error">{error}</p>}

        <button type="submit">Create Profile</button>
      </form>
    </div>
  );
};

export default CreateProfilePage;
