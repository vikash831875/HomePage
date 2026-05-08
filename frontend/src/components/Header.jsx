export default function Header({ contactPhone, contactEmail }) {
  return (
    <header className="top-strip">
      <div className="container strip-content">
        <div className="strip-left">
          <span>
            <svg viewBox="0 0 24 24" aria-hidden="true">
              <path d="M6.62 10.79a15.05 15.05 0 0 0 6.59 6.59l2.2-2.2a1 1 0 0 1 1.02-.24c1.12.37 2.32.56 3.57.56a1 1 0 0 1 1 1V20a1 1 0 0 1-1 1C10.3 21 3 13.7 3 4a1 1 0 0 1 1-1h3.5a1 1 0 0 1 1 1c0 1.25.19 2.45.56 3.57a1 1 0 0 1-.24 1.02l-2.2 2.2Z" />
            </svg>
            {contactPhone}
          </span>
          <span>
            <svg viewBox="0 0 24 24" aria-hidden="true">
              <path d="M4 5h16a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V6a1 1 0 0 1 1-1Zm8 7 8-5H4l8 5Zm0 2L4 9v8h16V9l-8 5Z" />
            </svg>
            {contactEmail}
          </span>
        </div>
        <div className="strip-right">
          <a href="#" aria-label="Facebook">f</a>
          <a href="#" aria-label="Instagram">◎</a>
          <a href="#" aria-label="X">X</a>
        </div>
      </div>
    </header>
  );
}
