const mongoose = require('mongoose');

const heroSectionSchema = new mongoose.Schema(
  {
    backgroundImage: { type: String, required: true, default: '/images/hero-bg.png' },
    headline: { type: String, required: true, default: 'Shaping Bright Futures Through Quality Education' },
    subtitle: {
      type: String,
      required: true,
      default: 'Empowering young minds with knowledge, values, and innovation to create responsible global citizens.',
    },
    buttonPrimaryText: { type: String, required: true, default: 'Apply for Admission' },
    buttonSecondaryText: { type: String, required: true, default: 'Explore our Campus' },
    topPillText: { type: String, default: 'V.P.O Salhapur, Nakur, Saharanpur-247342, Uttar Pradesh' },
    topPillAction: { type: String, default: 'Admission Open for 2026-27 →' },
  },
  { timestamps: true },
);

module.exports = mongoose.model('HeroSection', heroSectionSchema);
