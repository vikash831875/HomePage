const Testimonials = ({ testimonials }) => {
  return (
    <section className="section">
      <h3>Testimonials</h3>
      <h4 className="section-title">What Parents Say About Us</h4>
      <div className="testimonial-grid">
        {testimonials.map(([quote, name, image]) => (
          <article key={name} className="testimonial-card">
            <p>{quote}</p>
            <div>
              <img src={image} alt={name} />
              <span>{name}</span>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
};

export default Testimonials;