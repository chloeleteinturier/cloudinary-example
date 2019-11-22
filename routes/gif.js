const express = require('express');
const router = express.Router();

const parser = require('./../config/cloudinary')

const Gif = require('./../models/gif')

router.post('/', parser.single('photo'), (req,res,next)=>{
  
  const {title, description} = req.body
  const image_url = req.file.secure_url
  
  const newGif = new Gif({
    title,
    description,
    image_url
  })

  newGif.save()
    .then(()=> res.redirect('/'))
    .catch((err)=> console.log(err))
    
})

module.exports = router;