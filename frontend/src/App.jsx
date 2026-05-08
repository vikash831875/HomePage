import { useEffect, useState } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import './App.css';
import Footer from './Footer';
import AdminLogin from './admin/AdminLogin.jsx';
import AdminDashboard from './admin/AdminDashboard.jsx';

const defaultWhyChooseCards = [
  {
    title: 'Quality Education',
    text: 'CBSE affiliated curriculum with focus on holistic development',
    icon: '📘',
  },
  {
    title: 'Expert Faculty',
    text: 'Highly qualified and experienced teachers dedicated to student success',
    icon: '👩‍🏫',
  },
  {
    title: 'Excellence in Sports',
    text: 'State-of-the-art sports facilities and professional coaching',
    icon: '🏅',
  },
  {
    title: 'Modern Infrastructure',
    text: 'Well-equipped classrooms, labs, and digital learning resources',
    icon: '🏫',
  },
];

const academicPrograms = [
  ['Ages 3-5', 'Pre-Primary Wing', 'Play-based learning for ages 3-5, focusing on foundational skills and social development.'],
  ['Classes I-V', 'Primary School', 'Classes I-V with emphasis on core subjects and creative exploration.'],
  ['Classes VI-VIII', 'Middle School', 'Classes VI-VIII with enhanced curriculum and subject specialization.'],
  ['Classes IX-X', 'Secondary School', 'Classes IX-X preparing students for board examinations.'],
  ['Classes XI-XII', 'Senior Secondary', 'Classes XI-XII with Science, Commerce, and Humanities streams.'],
];

const facilities = [
  ['Smart Classrooms', 'Interactive digital learning environment'],
  ['Science & Computer Labs', 'Fully equipped modern laboratories'],
  ['Library & Resource Center', 'Vast collection of books and digital resources'],
  ['Sports Complex', 'Indoor and outdoor sports facilities'],
  ['Auditorium', 'State-of-the-art performance venue'],
  ['Medical Room', '24/7 medical support and first aid'],
  ['Transportation', 'Safe and reliable school bus service'],
  ['CCTV Surveillance', 'Complete campus security monitoring'],
];

const events = [
  ['April 25, 2026', 'Yoga and Meditation', 'Grand celebration featuring student performances and achievements.', '/images/event-1.png'],
  ['May 10, 2026', 'Science Exhibition', 'Students showcase innovative science projects and experiments.', '/images/event-2.png'],
  ['May 20, 2026', 'Sports Day', 'Annual athletic meet with track and field competitions.', '/images/event-3.png'],
  ['June 5, 2026', 'Cultural Fest', 'Vibrant celebration of arts, music, and cultural performances.', '/images/event-4.png'],
];

const news = [
  ['January 15, 2026', 'Admissions Open for Academic Session 2026-27', 'Dev Rishi School has officially opened admissions for the new academic year.', '/images/news-1.png'],
  ['December 20, 2025', 'Annual Sports Day Celebrated with Enthusiasm', 'Students displayed remarkable sportsmanship and athletic excellence.', '/images/news-2.png'],
  ['January 15, 2026', 'International Yoga Day Observed with Great Zeal', 'Parents are invited to apply and secure a bright future for their children.', '/images/news-3.png'],
];

const testimonials = [
  ['Dev Rishi International School has provided my child with an excellent academic foundation along with strong moral values.', 'Mrs. Anjali Sharma', '/images/parent-1.png'],
  ['We are extremely satisfied with the quality of education and facilities offered by the school.', 'Mrs. Sneha Gupta', '/images/parent-2.png'],
  ['The school maintains a perfect balance between discipline and creativity.', 'Mr. Rajesh Sharma', '/images/parent-3.png'],
  ['Dev Rishi International School stands out for its modern infrastructure and commitment to excellence.', 'Mr. Amit Patel', '/images/parent-4.png'],
];

function HomePage() {
  const [homeData, setHomeData] = useState(null);

  useEffect(() => {
    fetch('http://localhost:5000/api/homepage')
      .then((response) => response.json())
      .then((data) => setHomeData(data))
      .catch(() => {
        setHomeData({
          schoolName: 'Dev Rishi International School',
          tagline: 'Nurturing excellence with modern education, strong values, and holistic development.',
        });
      });
  }, []);

  const hero = homeData?.hero ?? {
    backgroundImage: '/images/hero-bg.png',
    headline: 'Shaping Bright Futures Through Quality Education',
    subtitle: 'Empowering young minds with knowledge, values, and innovation to create responsible global citizens.',
    buttonPrimaryText: 'Apply for Admission',
    buttonSecondaryText: 'Explore our Campus',
  };

  const about = homeData?.about ?? {
    title: 'About us',
    heading: 'Dev Rishi International School',
    description:
      'Dev Rishi School is a premier educational institution dedicated to fostering academic excellence, strong moral values, and holistic development. By blending traditional values with modern teaching methodologies, we prepare learners to excel in a rapidly evolving global landscape.',
  };

  const whyChooseCards = homeData?.whyChooseCards ?? defaultWhyChooseCards;
  const topPillText = homeData?.topPillText ?? 'V.P.O Salhapur, Nakur, Saharanpur-247342, Uttar Pradesh';
  const topPillAction = homeData?.topPillAction ?? 'Admission Open for 2026-27 →';

  return (
    <div className="page">
      <header className="top-strip">
        <div className="container strip-content">
          <div className="strip-left">
            <span>
              <svg viewBox="0 0 24 24" aria-hidden="true">
                <path d="M6.62 10.79a15.05 15.05 0 0 0 6.59 6.59l2.2-2.2a1 1 0 0 1 1.02-.24c1.12.37 2.32.56 3.57.56a1 1 0 0 1 1 1V20a1 1 0 0 1-1 1C10.3 21 3 13.7 3 4a1 1 0 0 1 1-1h3.5a1 1 0 0 1 1 1c0 1.25.19 2.45.56 3.57a1 1 0 0 1-.24 1.02l-2.2 2.2Z" />
              </svg>
              {homeData?.contactPhone || '+91 123 456 7890'}
            </span>
            <span>
              <svg viewBox="0 0 24 24" aria-hidden="true">
                <path d="M4 5h16a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V6a1 1 0 0 1 1-1Zm8 7 8-5H4l8 5Zm0 2L4 9v8h16V9l-8 5Z" />
              </svg>
              {homeData?.contactEmail || 'info@devrishischool.edu'}
            </span>
          </div>
          <div className="strip-right">
            <a href="#" aria-label="Facebook">f</a>
            <a href="#" aria-label="Instagram">◎</a>
            <a href="#" aria-label="X">X</a>
          </div>
        </div>
      </header>

      <header className="top-bar">
        <div className="container nav">
          <h1>
            <img src="/images/logo-mark.png" alt="" />
          </h1>
          <nav>
            <a href="#hero">Home</a>
            <a href="#about">About us</a>
            <a href="#about">Leadership</a>
            <a href="#contact">Admissions</a>
            <a href="#programs">Curriculum</a>
            <a href="#facilities">Infrastructure</a>
            <a href="#activities">Activities</a>
            <a href="#events">Events</a>
            <a href="#news">Gallery</a>
            <a href="#news">Blog</a>
            <a href="#contact">Contact us</a>
          </nav>
        </div>
      </header>

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

      <section className="container quick-links">
        <div>Apply for Admission</div>
        <div>Our Campus</div>
        <div>Explore Gallery</div>
        <div>Co-Curricular Activities</div>
      </section>

      <section className="container stats">
        <article><h3>10+</h3><p>Years of Excellence</p></article>
        <article><h3>50+</h3><p>Qualified Teachers</p></article>
        <article><h3>300+</h3><p>Students Enrolled</p></article>
        <article><h3>50+</h3><p>Awards and Recognitions</p></article>
        <article><h3>15+</h3><p>Co-Curricular Activities</p></article>
      </section>

      <main className="container">
        <section id="about" className="about section">
          <img className="about-image" src="/images/about.png" alt="About Dev Rishi International School" />
          <div>
            <h3>{about.title}</h3>
            <h4>{about.heading}</h4>
            <p>{about.description}</p>
          </div>
        </section>

        <section className="section">
          <h4 className="section-title">Why Choose Dev Rishi International School?</h4>
          <p className="section-subtitle">
            We provide a comprehensive learning environment that prepares students for success in academics and life.
          </p>
          <div className="feature-grid">
            {whyChooseCards.map((item) => (
              <article className="feature-card" key={item.title}>
                <span className="icon" aria-hidden="true">{item.icon}</span>
                <h5>{item.title}</h5>
                <p>{item.text}</p>
              </article>
            ))}
          </div>
        </section>

        <section id="programs" className="section section-alt">
          <h3>Academic</h3>
          <h4>Our Academic Programs</h4>
          <p>
            Our comprehensive academic programs follow a CBSE-aligned curriculum designed to foster critical thinking, creativity, and intellectual growth in a nurturing learning environment.
          </p>
          <div className="program-grid">
            {academicPrograms.map(([grade, title, desc]) => (
              <article key={grade} className="program-card">
                <span>{grade}</span>
                <h5>{title}</h5>
                <p>{desc}</p>
              </article>
            ))}
          </div>
        </section>

        <section id="activities" className="section section-alt">
          <h3>Activities</h3>
          <h4>Co-Curricular Activities</h4>
          <p>
            Our co-curricular programs nurture creativity, confidence, and teamwork. Students explore diverse activities that foster holistic development.
          </p>
        </section>

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

        <section id="events" className="section section-alt">
          <h3>Events</h3>
          <h4 className="section-title">Upcoming Events</h4>
          <p className="section-subtitle">
            Keep up with academic celebrations, annual programs, and student activities happening on campus.
          </p>
          <div className="event-grid">
            {events.map(([date, title, text, image]) => (
              <article key={title} className="event-card">
                <img src={image} alt={title} />
                <small>{date}</small>
                <h5>{title}</h5>
                <p>{text}</p>
              </article>
            ))}
          </div>
        </section>

        <section id="news" className="section">
          <h3>News</h3>
          <h4 className="section-title">Latest News & Insights</h4>
          <p className="section-subtitle">
            Explore the latest updates, achievements, and educational insights from Dev Rishi School.
          </p>
          <div className="event-grid news-grid">
            {news.map(([date, title, text, image]) => (
              <article key={title} className="event-card">
                <img src={image} alt={title} />
                <small>{date}</small>
                <h5>{title}</h5>
                <p>{text}</p>
              </article>
            ))}
          </div>
        </section>

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
      </main>

      <Footer />
    </div>
  );
}

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/admin/login" element={<AdminLogin />} />
      <Route path="/admin/dashboard" element={<AdminDashboard />} />
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  );
}
