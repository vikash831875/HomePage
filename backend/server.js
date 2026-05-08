const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');

dotenv.config();

const Admin = require('./models/Admin');
const SchoolSettings = require('./models/SchoolSettings');
const HeroSection = require('./models/HeroSection');
const WhyChooseCard = require('./models/WhyChooseCard');
const authenticate = require('./middleware/authenticate');

const authRoutes = require('./routes/auth');
const schoolSettingsRoutes = require('./routes/schoolSettings');
const heroSectionRoutes = require('./routes/heroSection');
const whyChooseCardsRoutes = require('./routes/whyChooseCards');
const homepageRoutes = require('./routes/homepage');

const app = express();
const PORT = process.env.PORT || 5000;
const MONGO_URI = process.env.MONGO_URI;

app.use(
  cors({
    origin: process.env.CLIENT_ORIGIN || 'http://localhost:5173',
  }),
);
app.use(express.json());

const connectDatabase = async () => {
  if (!MONGO_URI) {
    console.warn('MONGO_URI not provided. Running without database connection.');
    return;
  }

  try {
    await mongoose.connect(MONGO_URI);
    console.log('MongoDB connected');
    await seedDefaultData();
  } catch (error) {
    console.error('MongoDB connection failed:', error.message);
  }
};

const seedDefaultData = async () => {
  try {
    const adminCount = await Admin.countDocuments();
    if (adminCount === 0) {
      const username = process.env.ADMIN_USERNAME || 'admin';
      const password = process.env.ADMIN_PASSWORD || 'admin123';
      const hash = await bcrypt.hash(password, 10);
      await Admin.create({ username, password: hash });
      console.log(`Created default admin user: ${username}`);
    }

    const settingsCount = await SchoolSettings.countDocuments();
    if (settingsCount === 0) {
      await SchoolSettings.create({});
      console.log('Created default school settings');
    }

    const heroCount = await HeroSection.countDocuments();
    if (heroCount === 0) {
      await HeroSection.create({});
      console.log('Created default hero section');
    }

    const cardsCount = await WhyChooseCard.countDocuments();
    if (cardsCount === 0) {
      await WhyChooseCard.create([
        { title: 'Quality Education', text: 'CBSE affiliated curriculum with focus on holistic development', icon: '📘' },
        { title: 'Expert Faculty', text: 'Highly qualified and experienced teachers dedicated to student success', icon: '👩‍🏫' },
        { title: 'Excellence in Sports', text: 'State-of-the-art sports facilities and professional coaching', icon: '🏅' },
        { title: 'Modern Infrastructure', text: 'Well-equipped classrooms, labs, and digital learning resources', icon: '🏫' },
      ]);
      console.log('Created default why choose cards');
    }
  } catch (error) {
    console.error('Failed to seed default data:', error.message);
  }
};

app.use('/api/admin/auth', authRoutes);
app.use('/api/admin/school-settings', authenticate, schoolSettingsRoutes);
app.use('/api/admin/hero-section', authenticate, heroSectionRoutes);
app.use('/api/admin/why-choose-cards', authenticate, whyChooseCardsRoutes);
app.use('/api', homepageRoutes);

app.listen(PORT, () => {
  console.log(`Server listening on http://localhost:${PORT}`);
  connectDatabase();
});
