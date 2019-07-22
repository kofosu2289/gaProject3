const Router = require('express');
const { Category } = require('../models');

const categoryRouter = Router();

// SHOW ALL CATEGORIES
categoryRouter.get('/', async (req, res) => {
  const categories = await Category.findAll();
  res.json({ categories });
});

// SHOW ONLY ONE CATEGORY ITEM BY ID
categoryRouter.get('/:id', async (req, res) => {
  const category = await Category.findByPk(req.params.id);
  res.json({ category });
});

// CREATE CATEGORY
categoryRouter.post('/', async (req, res) => {
  const categories = await Category.create(req.body);
  res.json({ categories });
});

// DELETE CATEGORY
categoryRouter.delete('/:id', async (req, res) => {
  const categories = await Category.destroy({
    where: {
      id: req.params.id,
    },
  });
  res.json({
    message: `Category with id ${req.params.id} is now deleted`,
  });
});

// UPDATE CATEGORY
categoryRouter.put('/:id', async (req, res) => {
  const { id } = req.params;
  const data = req.body;

  await Category.update(
    data,
    {
      where: {
        id,
      },
    },
  );
  const categories = await Category.findByPk(id);
  res.json({ categories });
});

module.exports = categoryRouter;
