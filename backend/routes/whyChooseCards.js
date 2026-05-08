const express = require('express');
const WhyChooseCard = require('../models/WhyChooseCard');

const router = express.Router();

router.get('/', async (req, res) => {
  try {
    const cards = await WhyChooseCard.find().sort({ createdAt: 1 });
    return res.json(cards);
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: 'Unable to load cards' });
  }
});

router.put('/', async (req, res) => {
  try {
    const { cards } = req.body;
    if (!Array.isArray(cards)) {
      return res.status(400).json({ message: 'Cards array is required' });
    }

    await WhyChooseCard.deleteMany({});
    const createdCards = await WhyChooseCard.create(cards);
    return res.json(createdCards);
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: 'Unable to update cards' });
  }
});

module.exports = router;
