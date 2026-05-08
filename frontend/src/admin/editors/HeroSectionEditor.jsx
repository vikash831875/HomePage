import { useState } from 'react';
import '../editors/Editor.css';

export default function HeroSectionEditor({ data, token, onSave }) {
  const [formState, setFormState] = useState({
    backgroundImage: data?.backgroundImage || '/images/hero-bg.png',
    headline: data?.headline || '',
    subtitle: data?.subtitle || '',
    buttonPrimaryText: data?.buttonPrimaryText || '',
    buttonSecondaryText: data?.buttonSecondaryText || '',
    topPillText: data?.topPillText || '',
    topPillAction: data?.topPillAction || '',
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
      const response = await fetch('http://localhost:5000/api/admin/hero-section', {
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
      setStatus('Unable to save hero section');
    }
  };

  return (
    <section className="editor-card">
      <h2>Hero Section</h2>
      <form onSubmit={handleSubmit} className="editor-form">
        <label>
          Background image path
          <input name="backgroundImage" value={formState.backgroundImage} onChange={handleChange} />
        </label>
        <label>
          Headline
          <input name="headline" value={formState.headline} onChange={handleChange} />
        </label>
        <label>
          Subtitle
          <textarea name="subtitle" value={formState.subtitle} onChange={handleChange} rows="5" />
        </label>
        <label>
          Primary CTA text
          <input name="buttonPrimaryText" value={formState.buttonPrimaryText} onChange={handleChange} />
        </label>
        <label>
          Secondary CTA text
          <input name="buttonSecondaryText" value={formState.buttonSecondaryText} onChange={handleChange} />
        </label>
        <label>
          Top pill text
          <input name="topPillText" value={formState.topPillText} onChange={handleChange} />
        </label>
        <label>
          Top pill action
          <input name="topPillAction" value={formState.topPillAction} onChange={handleChange} />
        </label>
        <button type="submit" className="editor-submit">Save Hero Section</button>
        {status && <p className="editor-status">{status}</p>}
      </form>
    </section>
  );
}
