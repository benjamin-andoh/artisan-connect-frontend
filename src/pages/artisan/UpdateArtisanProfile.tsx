import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext';

import API from '../../utils/api';

const UpdateArtisanProfile = () => {
  const { user } = useAuth();
  const navigate = useNavigate();

  const [bio, setBio] = useState('');
  const [skills, setSkills] = useState<string[]>([]);
  const [location, setLocation] = useState('');
  const [categoryIds, setCategoryIds] = useState<number[]>([]);
  const [categories, setCategories] = useState<{ id: number; name: string }[]>([]);
  const [loading, setLoading] = useState(true);

  // Redirect if not artisan or already completed
  useEffect(() => {
    if (!user || user.userType !== 'artisan') {
      navigate('/');
    }

    if (user && user.profileCompleted) {
      navigate('/artisan');
    }
  }, [user]);

  // Fetch available categories and existing profile
  useEffect(() => {
    const fetchData = async () => {
      try {
        const [categoryRes, profileRes] = await Promise.all([
          API.get('/categories'),
          API.get('/artisan-profile')
        ]);

        setCategories(categoryRes.data);
        setBio(profileRes.data.bio);
        setSkills(profileRes.data.skills || []);
        setLocation(profileRes.data.location);
        setCategoryIds(profileRes.data.categories?.map((c: any) => c.id) || []);
      } catch (error) {
        console.error('Error fetching data', error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  const handleSkillsChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const skill = e.target.value;
    setSkills(skill.split(',').map(s => s.trim()));
  };

  const handleCategoryChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const id = parseInt(e.target.value);
    if (e.target.checked) {
      setCategoryIds([...categoryIds, id]);
    } else {
      setCategoryIds(categoryIds.filter(cid => cid !== id));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await API.put(`/artisan-profile/${user?.id}`, {
        bio,
        skills,
        location,
        categoryIds,
      });

      navigate('/artisan-bashboard');
    } catch (error: any) {
      console.error('Update failed:', error.response?.data?.message || error.message);
    }
  };

  if (loading) return <p>Loading...</p>;

  return (
    <div className="artisan-update-comtainer">
      <h2 className="artisan-update-title">Complete Your Artisan Profile</h2>
      <form onSubmit={handleSubmit} className="update-profile-form">
        <div>
          <label>Bio</label>
          <textarea
            className="bio"
            value={bio}
            onChange={(e) => setBio(e.target.value)}
            required
          />
        </div>

        <div>
          <label>Skills (comma-separated)</label>
          <input
            type="text"
            className="skill"
            value={skills.join(', ')}
            onChange={handleSkillsChange}
            required
          />
        </div>

        <div>
          <label>Location</label>
          <input
            type="text"
            className="location"
            value={location}
            onChange={(e) => setLocation(e.target.value)}
            required
          />
        </div>

        <div>
          <label className="select">Select Categories</label>
          <div className="checkbox">
            {categories.map((cat) => (
              <label key={cat.id} className="checkbox-lable">
                <input
                  type="checkbox"
                  value={cat.id}
                  checked={categoryIds.includes(cat.id)}
                  onChange={handleCategoryChange}
                />
                {cat.name}
              </label>
            ))}
          </div>
        </div>

        <button type="submit" className="save-profile-btn">
          Save Profile
        </button>
      </form>
    </div>
  );
};

export default UpdateArtisanProfile;
