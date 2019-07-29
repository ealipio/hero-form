const mongoose = require('mongoose');

module.exports.characters = mongoose.Schema({
  url: { type: String },
  name: String,
  gender: String,
  culture: { type: String },
  born: { type: String },
  died: { type: String },
  titles: { type: Array, default: ['America TV'] },
  aliases: { type: Array },
  father: { type: String },
  mother: { type: String },
  spouse: { type: String },
  allegiances: { type: Array },
  books: { type: Array },
  povBooks: { type: Array },
  tvSeries: { type: Array, default: ['America TV'] },
  playedBy: { type: Array, default: ['America TV'] }
});

