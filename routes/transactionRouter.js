const Router = require('express');
const { Transaction } = require('../models');

const transactionRouter = Router();

transactionRouter.post('/', async (req, res) => {
  const { transId, userId, productId } = req.body;
  const transaction = await Transaction.create({
    trans_id: transId,
    user_id: userId,
    product_id: productId,
  });
  res.json({ transaction });
});

module.exports = transactionRouter;
