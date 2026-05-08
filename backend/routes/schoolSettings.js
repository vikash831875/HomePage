const express = require('express');
const SchoolSettings = require('../models/SchoolSettings');

const router = express.Router();

router.get('/', async (req, res) => {
  try {
    const settings = await SchoolSettings.findOne();
    return res.json(settings);
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: 'Unable to load school settings' });
  }
});

router.put('/', async (req, res) => {
  try {
    const settings = await SchoolSettings.findOneAndUpdate({}, req.body, {
      new: true,
      upsert: true,
      runValidators: true,
    });
    return res.json(settings);
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: 'Unable to update school settings' });
  }
});

module.exports = router;
