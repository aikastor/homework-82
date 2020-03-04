const express = require('express');

const User = require('../models/User');
const TrackHistory = require('../models/TrackHistory');

const router = express.Router();

router.post('/', async (req, res) => {
  const trackHistory = new TrackHistory();

  const token = req.get('token');

  const user = await User.findOne({token});
  console.log(user);
});