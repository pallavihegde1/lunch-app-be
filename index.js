const cors = require('cors');
const express = require('express');
const router = require('./router');
const morgan = require('morgan');
const app = express();

// Enables cors
app.use(
  cors({
    exposedHeaders: ['x-access-token', 'x-refresh-token'],
  })
);
app.options('*', cors());
app.use(express.json());
if(app.get('env') === 'development') {
  app.use(morgan('dev'));
  console.log('Morgan enabled');
}
app.use('/', router);

app.listen(5000, () => {
  console.log('Server is running on port', 5000);
});
