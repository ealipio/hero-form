const mongoose = require('mongoose');

require('dotenv').config();

const connectionURL = process.env.CONNECTION_URL;

mongoose.connect(
  connectionURL,
  {
    useNewUrlParser: true,
    useCreateIndex: true,
  },
  err => {
    if (err) {
      console.log(err);
    } else {
      console.log('connected');
    }
  }
);

const User = mongoose.model('User', {
  email: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
});

const myUser = new User({ email: 'myUser@eisson.pe', password: 'I<3Cats!' });

myUser
  .save()
  .then(myUser => console.log('its all good'))
  .catch(err => console.log(err));
