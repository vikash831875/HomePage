export default function Stats() {
  const statsData = [
    { number: '10+', label: 'Years of Excellence' },
    { number: '50+', label: 'Qualified Teachers' },
    { number: '300+', label: 'Students Enrolled' },
    { number: '50+', label: 'Awards and Recognitions' },
    { number: '15+', label: 'Co-Curricular Activities' },
  ];

  return (
    <section className="container stats">
      {statsData.map((stat) => (
        <article key={stat.label}>
          <h3>{stat.number}</h3>
          <p>{stat.label}</p>
        </article>
      ))}
    </section>
  );
}
