export default function Footer() {
  return (
    <footer className="footer-section">
      {/* CTA Section */}
      <div className="footer-cta-section">
        <div className="container footer-cta-content">
          <h2>Begin Your Journey with Us</h2>
          <p>Join the Dev Rishi School family and experience an education that transforms lives and shapes tomorrow's leaders.</p>
          <div className="cta-buttons">
            <button type="button" className="cta-solid">Apply for Admission →</button>
            <button type="button" className="cta-outline">Schedule a Visit</button>
          </div>
        </div>
      </div>

      <div className="container">
        {/* Top Navigation Section */}
        <div className="footer-top">
          <div className="footer-column">
            <h5>About the School</h5>
            <ul>
              <li><a href="#about">About Us</a></li>
              <li><a href="#leadership">Chairman's Message</a></li>
              <li><a href="#director">Director's Message</a></li>
              <li><a href="#principal">Principal's Message</a></li>
              <li><a href="#campus">Our Campus</a></li>
            </ul>
          </div>

          <div className="footer-column">
            <h5>Academics</h5>
            <ul>
              <li><a href="#curriculum">Our Curriculum</a></li>
              <li><a href="#programs">Academic Programs</a></li>
              <li><a href="#methodology">Teaching Methodology</a></li>
            </ul>
          </div>

          <div className="footer-column">
            <h5>Admissions</h5>
            <ul>
              <li><a href="#process">Admission Process</a></li>
              <li><a href="#criteria">Eligibility Criteria</a></li>
              <li><a href="#apply">Apply for Admission</a></li>
            </ul>
          </div>

          <div className="footer-column">
            <h5>Student Life</h5>
            <ul>
              <li><a href="#activities">Co-Curricular Activities</a></li>
              <li><a href="#music">Music and Dance</a></li>
              <li><a href="#arts">Art and Craft</a></li>
            </ul>
          </div>

          <div className="footer-column">
            <h5>Quick Links</h5>
            <ul>
              <li><a href="#contact">Contact Us</a></li>
              <li><a href="#infrastructure">Infrastructure & Facilities</a></li>
              <li><a href="#events">Events</a></li>
              <li><a href="#news">News & Blogs</a></li>
              <li><a href="#gallery">Gallery</a></li>
            </ul>
          </div>
        </div>

        {/* Middle Section */}
        <div className="footer-middle">
          <div className="footer-about">
            <div className="footer-logo">
              <img src="/images/logo-mark.png" alt="Dev Rishi School Logo" />
            </div>
            <h4>Dev Rishi International School</h4>
            <p className="footer-tagline">Excellence in Education</p>
            <p className="footer-description">
              At Dev Rishi International School, we provide a holistic learning environment that blends academic excellence with innovation and character development. Our mission is to empower students with knowledge, confidence, and lifelong values.
            </p>
          </div>

          <div className="footer-follow">
            <h5>Follow Us</h5>
            <p>Stay connected with us on social media for latest updates and news.</p>
            <div className="social-links">
              <a href="#facebook" className="social-icon" aria-label="Facebook">
                <svg viewBox="0 0 24 24" fill="currentColor">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                </svg>
              </a>
              <a href="#instagram" className="social-icon" aria-label="Instagram">
                <svg viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 0C8.74 0 8.333.015 7.053.072 5.775.132 4.905.333 4.217.63c-.694.297-1.284.715-1.85 1.28C1.651 3.005 1.023 3.9.72 4.887.42 5.6.224 6.474.157 7.976.09 9.256.084 9.666 0 12c0 3.26.015 3.667.072 4.947.06 1.277.261 2.148.558 2.913.3.763.715 1.364 1.28 1.93 1.079 1.082 1.975 1.71 2.963 2.009.756.296 1.629.499 2.907.558 1.26.061 1.667.071 4.947.071s3.667-.01 4.947-.072c1.28-.06 2.147-.261 2.91-.558.95-.3 1.83-.719 2.9-1.78 1.08-1.08 1.71-1.975 2.008-2.963.299-.765.499-1.636.558-2.913.061-1.28.071-1.687.071-4.947 0-3.259-.01-3.668-.072-4.948-.06-1.276-.262-2.148-.558-2.913-.299-.763-.715-1.364-1.28-1.93-1.079-1.082-1.975-1.71-2.963-2.009-.756-.296-1.629-.499-2.907-.558C15.667.065 15.26.055 12 0zm0 2.16c3.203 0 3.585.009 4.849.070 1.171.054 1.805.244 2.227.408.562.217.96.477 1.382.896.419.42.679.819.896 1.381.164.422.354 1.057.408 2.227.061 1.264.07 1.646.07 4.849 0 3.203-.009 3.585-.07 4.849-.054 1.171-.244 1.805-.408 2.227-.217.562-.477.96-.896 1.382-.42.419-.819.679-1.381.896-.422.164-1.057.354-2.227.408-1.264.061-1.646.07-4.849.07-3.203 0-3.585-.009-4.849-.07-1.171-.054-1.805-.244-2.227-.408-.562-.217-.96-.477-1.382-.896-.419-.42-.679-.819-.896-1.381-.164-.422-.354-1.057-.408-2.227-.061-1.264-.07-1.646-.07-4.849 0-3.203.009-3.585.07-4.849.054-1.171.244-1.805.408-2.227.217-.562.477-.96.896-1.382.42-.419.819-.679 1.381-.896.422-.164 1.057-.354 2.227-.408 1.264-.061 1.646-.07 4.849-.07z"/>
                  <path d="M12 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm4.965-10.322a1.44 1.44 0 110-2.88 1.44 1.44 0 010 2.88z"/>
                </svg>
              </a>
            </div>
          </div>

          <div className="footer-contact">
            <h5>Contact Information</h5>
            <div className="contact-item">
              <span className="contact-icon">📍</span>
              <div>
                <strong>V.P.O Salhapur, Nakur,</strong><br />
                Saharanpur-247342, Uttar Pradesh
              </div>
            </div>
            <div className="contact-item">
              <span className="contact-icon">📞</span>
              <div>
                <a href="tel:+919876543210">+91 123 456 7890</a>
              </div>
            </div>
            <div className="contact-item">
              <span className="contact-icon">✉️</span>
              <div>
                <a href="mailto:info@devrishischool.com">info@devrishischool.com</a>
              </div>
            </div>
            <div className="contact-item">
              <span className="contact-icon">🕐</span>
              <div>
                <strong>Office Hours:</strong><br />
                Monday - Saturday: 9:00 AM - 6:00 PM
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Copyright Strip */}
      <div className="footer-bottom">
        <div className="container footer-bottom-content">
          <span>&copy; 2026 Dev Rishi School. All rights reserved.</span>
          <div className="footer-links">
            <a href="#privacy">Privacy Policy</a>
            <span className="separator">•</span>
            <a href="#terms">Terms & Conditions</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
