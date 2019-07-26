const Router = require('express');
const { Product, Category } = require('../models');

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

// SHOW ALL PRODUCTS IN A CATEGORY
productRouter.get('/category/:categoryId', async (req, res) => {
  const products = await Product.findAll({
    where: {
      category_id: req.params.categoryId,
    },
  });
  res.json({ products });
});

// CREATE A PRODUCT
productRouter.post('/', async (req, res) => {
  const product = await Product.create(req.body);
  res.json({ product });
});

productRouter.post('/category/:categoryId', async (req, res) => {
  const category = await Category.findByPk(req.params.categoryId);
  const product = await Product.create(req.body);
  product.setCategory(category);
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
