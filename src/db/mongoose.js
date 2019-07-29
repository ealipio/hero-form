const mongoose = require('mongoose');

require('dotenv').config();

const connectionURL = process.env.CONNECTION_URL;

mongoose.connect(
  connectionURL,
  {
    useNewUrlParser: true,
    useCreateIndex: true
  },
  err => {
    if (err) {
      console.log(err);
    } else {
      console.log('connected');
    }
  }
);
// https://blog.cloudboost.io/everything-you-need-to-know-about-mongoose-63fcf8564d52
const Hero = mongoose.model('Hero', {
  url: {
    type: String
  },
  name: {
    type: String
  },
  gender: {
    type: String
  },
  culture: {
    type: String
  },
  born: {
    type: String
  },
  died: {
    type: Boolean
  },
  aliases: {
    type: Array,
    required: false
  },
  playedBy: {
    type: String,
    required: true
  },
  tvSeries: {
    type: String,
    required: true
  }
});

const myUser = new User({
  email: '28juliomyUser@eisson.pe',
  password: 'I<3Cats!'
});

myUser
  .save()
  .then(myUser => console.log('its all good'))
  .catch(err => console.log(err));
