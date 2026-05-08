import { useState } from 'react';
import '../editors/Editor.css';

export default function SchoolSettingsEditor({ data, token, onSave }) {
  const [formState, setFormState] = useState({
    schoolName: data?.schoolName || '',
    tagline: data?.tagline || '',
    aboutTitle: data?.aboutTitle || '',
    aboutHeading: data?.aboutHeading || '',
    aboutDescription: data?.aboutDescription || '',
    topPillText: data?.topPillText || '',
    topPillAction: data?.topPillAction || '',
    contactPhone: data?.contactPhone || '',
    contactEmail: data?.contactEmail || '',
  });
  const [status, setStatus] = useState('');

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormState((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    setStatus('Saving...');
    try {
      const response = await fetch('http://localhost:5000/api/admin/school-settings', {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify(formState),
      });
      const result = await response.json();
      if (!response.ok) {
        setStatus(result.message || 'Update failed');
        return;
      }
      onSave(result);
      setStatus('Saved successfully');
    } catch (error) {
      console.error(error);
      setStatus('Unable to save settings');
    }
  };

  return (
    <section className="editor-card">
      <h2>School Settings</h2>
      <form onSubmit={handleSubmit} className="editor-form">
        <label>
          School Name
          <input name="schoolName" value={formState.schoolName} onChange={handleChange} />
        </label>
        <label>
          Tagline
          <input name="tagline" value={formState.tagline} onChange={handleChange} />
        </label>
        <label>
          About Section Title
          <input name="aboutTitle" value={formState.aboutTitle} onChange={handleChange} />
        </label>
        <label>
          About Heading
          <input name="aboutHeading" value={formState.aboutHeading} onChange={handleChange} />
        </label>
        <label>
          About Description
          <textarea name="aboutDescription" value={formState.aboutDescription} onChange={handleChange} rows="6" />
        </label>
        <label>
          Top pill text
          <input name="topPillText" value={formState.topPillText} onChange={handleChange} />
        </label>
        <label>
          Top pill action text
          <input name="topPillAction" value={formState.topPillAction} onChange={handleChange} />
        </label>
        <label>
          Contact Phone
          <input name="contactPhone" value={formState.contactPhone} onChange={handleChange} />
        </label>
        <label>
          Contact Email
          <input name="contactEmail" value={formState.contactEmail} onChange={handleChange} />
        </label>
        <button type="submit" className="editor-submit">Save School Settings</button>
        {status && <p className="editor-status">{status}</p>}
      </form>
    </section>
  );
}
