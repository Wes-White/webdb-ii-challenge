const express = require('express');

const db = require('../data/dbConfig');

const router = express.Router();

router.get('/', async (req, res) => {
  try {
    const cars = await db('cars');
    res.status(200).json(cars);
  } catch (err) {
    res.status(500).json({ success: false, message: err });
  }
});

router.post('/', async (req, res) => {
  const carData = req.body;

  try {
    const { id } = await db('cars').insert(carData);
    const newCar = await db('cars').where({ id });
    res.status(201).json(newCar);
  } catch (err) {
    res
      .status(500)
      .json({ message: 'We were unable to create the new car', error: err });
  }
});

module.exports = router;
