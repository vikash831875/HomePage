export default function HeroSection({ hero, topPillText, topPillAction }) {
  return (
    <section
      className="hero-section"
      id="hero"
      style={{
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.26), rgba(0, 0, 0, 0.26)), url('${hero.backgroundImage}')`,
      }}
    >
      <div className="container hero-content">
        <div className="hero-address-pill">
          <span>
            <svg viewBox="0 0 24 24" aria-hidden="true">
              <path d="M12 2a7 7 0 0 1 7 7c0 5.25-7 13-7 13S5 14.25 5 9a7 7 0 0 1 7-7Zm0 2a5 5 0 0 0-5 5c0 3.27 3.84 8.56 5 10.08C13.16 17.56 17 12.27 17 9a5 5 0 0 0-5-5Zm0 2.5A2.5 2.5 0 1 1 9.5 9 2.5 2.5 0 0 1 12 6.5Z" />
            </svg>
            {topPillText}
          </span>
          <span>{topPillAction}</span>
        </div>
        <h2>{hero.headline}</h2>
        <p>{hero.subtitle}</p>
        <div className="hero-actions">
          <button type="button" className="solid">{hero.buttonPrimaryText}</button>
          <button type="button" className="outline">{hero.buttonSecondaryText}</button>
        </div>
      </div>
      <button type="button" className="hero-arrow left" aria-label="Previous slide">❮</button>
      <button type="button" className="hero-arrow right" aria-label="Next slide">❯</button>
    </section>
  );
}
