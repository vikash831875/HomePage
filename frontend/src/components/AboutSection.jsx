export default function AboutSection({ about }) {
  return (
    <section id="about" className="about section">
      <img className="about-image" src="/images/about.png" alt="About Dev Rishi International School" />
      <div>
        <h3>{about.title}</h3>
        <h4>{about.heading}</h4>
        <p>{about.description}</p>
      </div>
    </section>
  );
}
