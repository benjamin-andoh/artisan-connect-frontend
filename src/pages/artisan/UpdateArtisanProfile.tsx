import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext';
import API from '../../utils/api';
import '../../styles/UpdateArtisanProfile.css'

const UpdateArtisanProfile = () => {
  const { user, token } = useAuth();
  const navigate = useNavigate();

  const [bio, setBio] = useState('');
  const [skills, setSkills] = useState<string[]>([]);
  const [location, setLocation] = useState('');
  const [loading, setLoading] = useState(true);

  // Redirect if not artisan
  useEffect(() => {
    if (!user || user.userType !== 'artisan') {
      navigate('/not-authorized');
    }

    if (user && user.profileCompleted) {
      navigate('/artisan');
    }
  }, [user]);

  // Fetch existing profile (optional)
  useEffect(() => {
    const fetchProfile = async () => {
      try {
        const { data } = await API.get(`/artisan-profile`);
        setBio(data.bio);
        setSkills(data.skills || []);
        setLocation(data.location);
      } catch (error) {
        console.error('Could not fetch artisan profile');
      } finally {
        setLoading(false);
      }
    };

    fetchProfile();
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      await API.put(`/artisan-profile/${user?.id}`, {
        bio,
        skills,
        location,
      });

      // Update local user state if you want (optional)
      navigate('/dashboard');
    } catch (error: any) {
      console.error('Update failed:', error.response?.data?.message);
    }
  };

  const handleSkillsChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const skill = e.target.value;
    setSkills(skill.split(',').map(s => s.trim()));
  };

  if (loading) return <p>Loading...</p>;

  return (
    <div className="artisan-update-comtainer">
      <h2 className="artisan-update-title">Complete Your Artisan Profile</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
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

        <button
          type="submit"
          className="save-profile-btn"
        >
          Save Profile
        </button>
      </form>
    </div>
  );
};

export default UpdateArtisanProfile;
