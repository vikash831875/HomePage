import { useEffect, useState } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import './App.css';

// Components
import Header from './components/Header';
import Navigation from './components/Navigation';
import HeroSection from './components/HeroSection';
import QuickLinks from './components/QuickLinks';
import Stats from './components/Stats';
import AboutSection from './components/AboutSection';
import WhyChooseSection from './components/WhyChooseSection';
import AcademicPrograms from './components/AcademicPrograms';
import Activities from './components/Activities';
import Facilities from './components/Facilities';
import Events from './components/Events';
import News from './components/News';
import Testimonials from './components/Testimonials';
import Footer from './Footer';

// Admin Components
import AdminLogin from './admin/AdminLogin.jsx';
import AdminDashboard from './admin/AdminDashboard.jsx';

// Data
import { academicPrograms, facilities, events, news, testimonials } from './data/constants';

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
      <Header
        contactPhone={homeData?.contactPhone || '+91 123 456 7890'}
        contactEmail={homeData?.contactEmail || 'info@devrishischool.edu'}
      />

      <Navigation />

      <HeroSection
        hero={hero}
        topPillText={topPillText}
        topPillAction={topPillAction}
      />

      <QuickLinks />

      <Stats />

      <main className="container">
        <AboutSection about={about} />

        <WhyChooseSection cards={whyChooseCards} />

        <AcademicPrograms programs={academicPrograms} />

        <Activities />

        <Facilities facilities={facilities} />

        <Events events={events} />

        <News news={news} />

        <Testimonials testimonials={testimonials} />
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
