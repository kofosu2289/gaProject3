const Router = require('express');
const { Product } = require('../models');

const productRouter = Router();

// SHOW ALL PRODUCTS
productRouter.get('/', async (req, res) => {
  const products = await Product.findAll();
  res.json({ products });
});

// SHOW ONE PRODUCT BY ID
productRouter.get('/:id', async (req, res) => {
  const product = await Product.findByPk(req.params.id);
  res.json({ product });
});

// CREATE A PRODUCT
productRouter.post('/', async (req, res) => {
  const product = await Product.create(req.body);
  res.json({ product });
});

// DELETE PRODUCTS BASED ON ID
productRouter.delete('/:id', async (req, res) => {
  await Product.destroy({
    where: {
      id: req.params.id,
    },
  });
  res.json({
    message: `Item with id ${req.params.id} has been deleted!`,
  });
});

productRouter.put('/:id', async (req, res) => {
  const data = req.body;
  const { id } = req.params;
  await Product.update(
    data,
    {
      where: {
        id,
      },
    },
  );
  const product = await Product.findByPk(id);
  res.json({ product });
});

module.exports = productRouter;
