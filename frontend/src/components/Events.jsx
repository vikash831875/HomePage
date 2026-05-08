import EventCard from './EventCard';

export default function Events({ events }) {
  return (
    <section id="events" className="section section-alt">
      <h3>Events</h3>
      <h4 className="section-title">Upcoming Events</h4>
      <p className="section-subtitle">
        Keep up with academic celebrations, annual programs, and student activities happening on campus.
      </p>
      <div className="event-grid">
        {events.map(([date, title, text, image]) => (
          <EventCard key={title} date={date} title={title} text={text} image={image} />
        ))}
      </div>
    </section>
  );
}
