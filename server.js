const express = require('express');
const logger = require('morgan');
const bodyParser = require('body-parser');
const cors = require('cors');

const PORT = process.env.PORT || 3001;

const userRouter = require('./routes/userRouter');
const productRouter = require('./routes/productRouter');
const categoryRouter = require('./routes/categoryRouter');
const transactionRouter = require('./routes/transactionRouter');

const app = express();
app.use(cors());
app.use(bodyParser.json());
app.use(logger('dev'));
app.use('/auth', userRouter);
app.use('/products', productRouter);
app.use('/categories', categoryRouter);
app.use('/transaction', transactionRouter);


app.listen(PORT, () => console.log('up and running'));