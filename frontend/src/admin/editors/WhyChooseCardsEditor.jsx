import { useState } from 'react';
import '../editors/Editor.css';

export default function WhyChooseCardsEditor({ data, token, onSave }) {
  const [cards, setCards] = useState(
    data?.length
      ? data.map((card) => ({ title: card.title, text: card.text, icon: card.icon }))
      : [
          { title: 'Quality Education', text: 'CBSE affiliated curriculum with focus on holistic development', icon: '📘' },
          { title: 'Expert Faculty', text: 'Highly qualified and experienced teachers dedicated to student success', icon: '👩‍🏫' },
          { title: 'Excellence in Sports', text: 'State-of-the-art sports facilities and professional coaching', icon: '🏅' },
          { title: 'Modern Infrastructure', text: 'Well-equipped classrooms, labs, and digital learning resources', icon: '🏫' },
        ],
  );
  const [status, setStatus] = useState('');

  const handleChange = (index, event) => {
    const { name, value } = event.target;
    setCards((currentCards) =>
      currentCards.map((card, cardIndex) =>
        cardIndex === index ? { ...card, [name]: value } : card,
      ),
    );
  };

  const addCard = () => {
    setCards((current) => [...current, { title: '', text: '', icon: '✨' }]);
  };

  const removeCard = (index) => {
    setCards((current) => current.filter((_, cardIndex) => cardIndex !== index));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    setStatus('Saving...');

    try {
      const response = await fetch('http://localhost:5000/api/admin/why-choose-cards', {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({ cards }),
      });
      const result = await response.json();
      if (!response.ok) {
        setStatus(result.message || 'Update failed');
        return;
      }
      setCards(result.map((card) => ({ title: card.title, text: card.text, icon: card.icon })));
      onSave(result);
      setStatus('Saved successfully');
    } catch (error) {
      console.error(error);
      setStatus('Unable to save cards');
    }
  };

  return (
    <section className="editor-card">
      <h2>Why Choose Cards</h2>
      <form onSubmit={handleSubmit} className="editor-form">
        {cards.map((card, index) => (
          <div key={index} className="editor-card-row">
            <div>
              <label>
                Icon
                <input name="icon" value={card.icon} onChange={(event) => handleChange(index, event)} />
              </label>
              <label>
                Title
                <input name="title" value={card.title} onChange={(event) => handleChange(index, event)} />
              </label>
              <label>
                Description
                <textarea name="text" value={card.text} onChange={(event) => handleChange(index, event)} rows="4" />
              </label>
            </div>
            <button type="button" className="editor-remove" onClick={() => removeCard(index)}>
              Remove
            </button>
          </div>
        ))}

        <button type="button" className="editor-action" onClick={addCard}>
          + Add Card
        </button>
        <button type="submit" className="editor-submit">Save Cards</button>
        {status && <p className="editor-status">{status}</p>}
      </form>
    </section>
  );
}
