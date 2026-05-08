import EventCard from './EventCard';

export default function News({ news }) {
  return (
    <section id="news" className="section">
      <h3>News</h3>
      <h4 className="section-title">Latest News & Insights</h4>
      <p className="section-subtitle">
        Explore the latest updates, achievements, and educational insights from Dev Rishi School.
      </p>
      <div className="event-grid news-grid">
        {news.map(([date, title, text, image]) => (
          <EventCard key={title} date={date} title={title} text={text} image={image} />
        ))}
      </div>
    </section>
  );
}
