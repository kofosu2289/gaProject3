const express = require('express');
const logger = require('morgan');
const bodyParser = require('body-parser');
const cors = require('cors');

const PORT = process.env.PORT || 3001;

const productRouter = require('./routes/productRouter');
const categoryRouter = require('./routes/categoryRouter');

const app = express();
app.use(cors());
app.use(bodyParser.json());
app.use(logger('dev'));
app.use('/products', productRouter);
app.use('/categories', categoryRouter);


app.listen(PORT, () => console.log('up and running'));