export default function EventCard({ date, title, text, image }) {
  return (
    <article className="event-card">
      <img src={image} alt={title} />
      <small>{date}</small>
      <h5>{title}</h5>
      <p>{text}</p>
    </article>
  );
}
