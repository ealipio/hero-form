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

async function saveCharacter() {
  const result = await character.save();
  console.log(result);
}

async function findCharacters() {
  const result = await Characters.find({
    url: 'https://www.anapioficeandfire.com/api/characters/10'
  })
  .select({name: 1, gender: 1, culture: 1})
  .sort({name: 1})
  .limit(10);
  console.log(result);
}


findCharacters();