export default function Facilities({ facilities }) {
  return (
    <section id="facilities" className="section">
      <h4 className="section-title">Campus Facilities</h4>
      <div className="facility-grid">
        {facilities.map(([title, text]) => (
          <div className="facility-item" key={title}>
            <h5>{title}</h5>
            <p>{text}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
