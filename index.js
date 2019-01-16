const express = require('express');
const router = require('./router');

const app = express();
app.use(express.json());
app.use('/', router);

app.listen(5000, () => {
  console.log('Server is running on port', 5000);
});
