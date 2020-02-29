const express = require('express');
const path = require('path');
const multer = require('multer');
const nanoid = require('nanoid');

const config = require('../config');
const Album = require('../models/Album');


const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, config.uploadPath);
  },
  filename: (req, file, cb) => {
    cb(null, nanoid() + path.extname(file.originalname));
  }
});

const upload = multer({storage});
const router = express.Router();

router.get('/', async (req, res) => {
  const artist = req.query.artist;
  let response;

  artist ?
      response = await Album.find()
      :
      response = await Album.find({artist: artist})

  res.send(response);
  
});