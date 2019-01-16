const mongoose = require('mongoose');

const Schema = mongoose.Schema;

mongoose.set('useCreateIndex', true);
mongoose.set('useFindAndModify', false);

mongoose.connect('mongodb://localhost/lunchApp', { useNewUrlParser: true})
  .then(() => console.log('connected to mongo db'))
  .catch(err => console.error('could not connect to mongo db'));

module.exports = { mongoose, Schema};
