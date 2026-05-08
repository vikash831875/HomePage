export default function AcademicPrograms({ programs }) {
  return (
    <section id="programs" className="section section-alt">
      <h3>Academic</h3>
      <h4>Our Academic Programs</h4>
      <p>
        Our comprehensive academic programs follow a CBSE-aligned curriculum designed to foster
        critical thinking, creativity, and intellectual growth in a nurturing learning environment.
      </p>
      <div className="program-grid">
        {programs.map(([grade, title, desc]) => (
          <article key={grade} className="program-card">
            <span>{grade}</span>
            <h5>{title}</h5>
            <p>{desc}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
