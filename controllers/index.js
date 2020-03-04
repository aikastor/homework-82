const express = require('express');

const router = express.Router();

router.use('/artists', require('./artists'));
router.use('/albums', require('./albums'));
router.use('/tracks', require('./tracks'));
router.use('/users', require('./users'));

module.exports = router;
