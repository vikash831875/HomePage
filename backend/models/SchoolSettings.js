const mongoose = require('mongoose');

const schoolSettingsSchema = new mongoose.Schema(
  {
    schoolName: { type: String, required: true, default: 'Dev Rishi International School' },
    tagline: { type: String, required: true, default: 'Nurturing excellence with modern education, strong values, and holistic development.' },
    aboutTitle: { type: String, required: true, default: 'About us' },
    aboutHeading: { type: String, required: true, default: 'Dev Rishi International School' },
    aboutDescription: {
      type: String,
      required: true,
      default:
        'Dev Rishi School is a premier educational institution dedicated to fostering academic excellence, strong moral values, and holistic development. By blending traditional values with modern teaching methodologies, we prepare learners to excel in a rapidly evolving global landscape.',
    },
    topPillText: { type: String, default: 'V.P.O Salhapur, Nakur, Saharanpur-247342, Uttar Pradesh' },
    topPillAction: { type: String, default: 'Admission Open for 2026-27 →' },
    contactPhone: { type: String, default: '+91 123 456 7890' },
    contactEmail: { type: String, default: 'info@devrishischool.edu' },
  },
  { timestamps: true },
);

module.exports = mongoose.model('SchoolSettings', schoolSettingsSchema);
