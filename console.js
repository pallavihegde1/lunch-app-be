var repl = require("repl");

const {mongoose} = require('./config/db');
const Category = require('./models/category')
const a= 1;
var replServer = repl.start({
  prompt: "my-app > ",
});
