require('dotenv').config();
const mongoose = require('mongoose');

const mongooseURI = process.env.MONGO_URI

mongoose.connect(mongooseURI, {
  useNewUrlParser: true, 
  useUnifiedTopology: true
});

module.exports.Place = require('./places');
module.exports.Comment = require('./comment');