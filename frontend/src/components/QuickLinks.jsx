export default function QuickLinks() {
  const links = [
    'Apply for Admission',
    'Our Campus',
    'Explore Gallery',
    'Co-Curricular Activities',
  ];

  return (
    <section className="container quick-links">
      {links.map((link) => (
        <div key={link}>{link}</div>
      ))}
    </section>
  );
}
