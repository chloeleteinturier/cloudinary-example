const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const gifSchema = new Schema ({
  title: String,
  description: String,
  image_url: String
})

const Gif = mongoose.model('Gif', gifSchema)

module.exports = Gif;