const express = require('express');
const SchoolSettings = require('../models/SchoolSettings');
const HeroSection = require('../models/HeroSection');
const WhyChooseCard = require('../models/WhyChooseCard');

const router = express.Router();

router.get('/homepage', async (req, res) => {
  try {
    const [settings, heroSection, cards] = await Promise.all([
      SchoolSettings.findOne(),
      HeroSection.findOne(),
      WhyChooseCard.find().sort({ createdAt: 1 }),
    ]);

    return res.json({
      schoolName: settings?.schoolName || 'Dev Rishi International School',
      tagline:
        settings?.tagline ||
        'Nurturing excellence with modern education, strong values, and holistic development.',
      topPillText: heroSection?.topPillText || settings?.topPillText || 'V.P.O Salhapur, Nakur, Saharanpur-247342, Uttar Pradesh',
      topPillAction: heroSection?.topPillAction || settings?.topPillAction || 'Admission Open for 2026-27 →',
      hero: {
        backgroundImage: heroSection?.backgroundImage || '/images/hero-bg.png',
        headline: heroSection?.headline || 'Shaping Bright Futures Through Quality Education',
        subtitle:
          heroSection?.subtitle ||
          'Empowering young minds with knowledge, values, and innovation to create responsible global citizens.',
        buttonPrimaryText: heroSection?.buttonPrimaryText || 'Apply for Admission',
        buttonSecondaryText: heroSection?.buttonSecondaryText || 'Explore our Campus',
      },
      about: {
        title: settings?.aboutTitle || 'About us',
        heading: settings?.aboutHeading || 'Dev Rishi International School',
        description:
          settings?.aboutDescription ||
          'Dev Rishi School is a premier educational institution dedicated to fostering academic excellence, strong moral values, and holistic development. By blending traditional values with modern teaching methodologies, we prepare learners to excel in a rapidly evolving global landscape.',
      },
      whyChooseCards: cards.length
        ? cards.map((card) => ({ title: card.title, text: card.text, icon: card.icon }))
        : [
            { title: 'Quality Education', text: 'CBSE affiliated curriculum with focus on holistic development', icon: '📘' },
            { title: 'Expert Faculty', text: 'Highly qualified and experienced teachers dedicated to student success', icon: '👩‍🏫' },
            { title: 'Excellence in Sports', text: 'State-of-the-art sports facilities and professional coaching', icon: '🏅' },
            { title: 'Modern Infrastructure', text: 'Well-equipped classrooms, labs, and digital learning resources', icon: '🏫' },
          ],
    });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: 'Unable to load homepage content' });
  }
});

module.exports = router;
