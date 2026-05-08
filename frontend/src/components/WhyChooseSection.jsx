export default function WhyChooseSection({ cards }) {
  return (
    <section className="section">
      <h4 className="section-title">Why Choose Dev Rishi International School?</h4>
      <p className="section-subtitle">
        We provide a comprehensive learning environment that prepares students for success in academics and life.
      </p>
      <div className="feature-grid">
        {cards.map((item) => (
          <article className="feature-card" key={item.title}>
            <span className="icon" aria-hidden="true">{item.icon}</span>
            <h5>{item.title}</h5>
            <p>{item.text}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
