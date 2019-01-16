const {mongoose, Schema} = require('../config/db');

const categorySchema = new Schema({
  name: {type: String, unique: true, index: true},
  desc: String
})

const Category = mongoose.model('Category', categorySchema);

module.exports = Category
