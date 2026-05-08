const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const mongoose = require('mongoose');

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;
const MONGO_URI = process.env.MONGO_URI;

app.use(
  cors({
    origin: process.env.CLIENT_ORIGIN || 'http://localhost:5173',
  }),
);
app.use(express.json());

if (MONGO_URI) {
  mongoose
    .connect(MONGO_URI)
    .then(() => {
      console.log('MongoDB connected');
    })
    .catch((error) => {
      console.error('MongoDB connection failed:', error.message);
    });
} else {
  console.log('MONGO_URI not provided. Running without database connection.');
}

app.get('/api/health', (_req, res) => {
  res.json({ status: 'ok', message: 'Backend is running' });
});

app.get('/api/homepage', (_req, res) => {
  res.json({
    schoolName: 'Dev Rishi International School',
    tagline:
      'Nurturing excellence with modern education, strong values, and holistic development.',
    sections: [
      'About Us',
      'Why Choose Us',
      'Academic Programs',
      'Co-Curricular Activities',
      'Campus Facilities',
      'Upcoming Events',
      'Latest News',
      'Testimonials',
    ],
  });
});

app.listen(PORT, () => {
  console.log(`Server listening on http://localhost:${PORT}`);
});
