require('dotenv').config();

const connectionURL = process.env.CONNECTION_URL;

const mongoose = require('mongoose');

const charactersSchema = require('./characters.schema');
const characterSample = require('./characterSample')

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

const Characters = mongoose.model('Characters', charactersSchema.characters);

const character = new Characters(characterSample.data);

character
  .save()
  .then(console.log)
  .catch(console.log);
