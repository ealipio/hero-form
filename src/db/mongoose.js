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
const Characters = mongoose.model('Characters', {
  url: { type: String },
  name: { type: String },
  gender: { type: String },
  culture: { type: String },
  born: { type: String },
  died: { type: String },
  titles: { type: Array },
  aliases: { type: Array },
  father: { type: String },
  mother: { type: String },
  spouse: { type: String },
  allegiances: { type: Array },
  books: { type: Array },
  povBooks: { type: Array },
  tvSeries: {type: Array},
  playedBy: {type: Array},
});

const character = new Characters({
  url: 'https://www.anapioficeandfire.com/api/characters/1',
  name: 'la gringa de la academy',
  gender: 'Female',
  culture: 'Braavosi',
  born: '',
  died: '',
  titles: [''],
  aliases: ['The Daughter of the Dusk'],
  father: '',
  mother: '',
  spouse: '',
  allegiances: [],
  books: ['https://www.anapioficeandfire.com/api/books/5'],
  povBooks: [],
  tvSeries: [''],
  playedBy: ['']
});

character
  .save()
  .then(console.log)
  .catch(console.log);
