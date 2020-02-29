const express = require('express');

const router = express.Router();

router.use('/artists', require('./artists'));

module.exports = router;
