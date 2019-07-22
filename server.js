const express = require('express');
const logger = require('morgan');
const bodyParser = require('body-parser');
const cors = require('cors');
const PORT = process.env.PORT || 3001;


const app = express();
app.use(cors());
app.use(bodyParser.json());
app.use(logger('dev'));


app.listen(PORT, () => console.log('up and running'))