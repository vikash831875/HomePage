const express = require('express');
const HeroSection = require('../models/HeroSection');

const router = express.Router();

router.get('/', async (req, res) => {
  try {
    const heroSection = await HeroSection.findOne();
    return res.json(heroSection);
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: 'Unable to load hero section' });
  }
});

router.put('/', async (req, res) => {
  try {
    const heroSection = await HeroSection.findOneAndUpdate({}, req.body, {
      new: true,
      upsert: true,
      runValidators: true,
    });
    return res.json(heroSection);
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: 'Unable to update hero section' });
  }
});

module.exports = router;
