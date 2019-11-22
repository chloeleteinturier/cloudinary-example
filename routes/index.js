const express = require('express');
const router = express.Router();

const Gif = require('./../models/gif')

const gifRouter = require('./gif')

router.use('/gif', gifRouter)

/* GET home page. */
router.get('/', function(req, res, next) {
  Gif.find({})
    .then( (gifs) => {
      console.log('gifs:', gifs);
      
      res.render('index', { title: 'My Gifs', gifs })
    })
    .catch( (err) =>console.log(err))
});

module.exports = router;
