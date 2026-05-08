import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import SchoolSettingsEditor from './editors/SchoolSettingsEditor';
import HeroSectionEditor from './editors/HeroSectionEditor';
import WhyChooseCardsEditor from './editors/WhyChooseCardsEditor';
import './AdminDashboard.css';

function getAdminToken() {
  return localStorage.getItem('adminToken');
}

export default function AdminDashboard() {
  const [schoolSettings, setSchoolSettings] = useState(null);
  const [heroSection, setHeroSection] = useState(null);
  const [whyChooseCards, setWhyChooseCards] = useState([]);
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  const token = getAdminToken();

  useEffect(() => {
    if (!token) {
      navigate('/admin/login');
      return;
    }

    const fetchData = async () => {
      try {
        const [settingsResponse, heroResponse, cardsResponse] = await Promise.all([
          fetch('http://localhost:5000/api/admin/school-settings', {
            headers: { Authorization: `Bearer ${token}` },
          }),
          fetch('http://localhost:5000/api/admin/hero-section', {
            headers: { Authorization: `Bearer ${token}` },
          }),
          fetch('http://localhost:5000/api/admin/why-choose-cards', {
            headers: { Authorization: `Bearer ${token}` },
          }),
        ]);

        if (!settingsResponse.ok || !heroResponse.ok || !cardsResponse.ok) {
          throw new Error('Unable to load admin content');
        }

        setSchoolSettings(await settingsResponse.json());
        setHeroSection(await heroResponse.json());
        setWhyChooseCards(await cardsResponse.json());
      } catch (err) {
        setError('Unable to load admin content. Please login again.');
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [navigate, token]);

  const handleLogout = () => {
    localStorage.removeItem('adminToken');
    localStorage.removeItem('adminUser');
    navigate('/admin/login');
  };

  if (!token) {
    return null;
  }

  return (
    <div className="admin-dashboard-page">
      <div className="admin-dashboard-header">
        <div>
          <h1>Admin Dashboard</h1>
          <p>Update homepage banner, school details, about section, and cards without touching the UI code.</p>
        </div>
        <button type="button" className="logout-button" onClick={handleLogout}>Logout</button>
      </div>

      {loading ? (
        <div className="admin-loading">Loading admin content…</div>
      ) : (
        <div className="admin-dashboard-grid">
          {error && <div className="admin-error">{error}</div>}

          <SchoolSettingsEditor
            data={schoolSettings}
            token={token}
            onSave={setSchoolSettings}
          />

          <HeroSectionEditor
            data={heroSection}
            token={token}
            onSave={setHeroSection}
          />

          <WhyChooseCardsEditor
            data={whyChooseCards}
            token={token}
            onSave={setWhyChooseCards}
          />
        </div>
      )}
    </div>
  );
}
