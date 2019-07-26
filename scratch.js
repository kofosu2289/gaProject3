const axios = require('axios');
const uuidv4 = require('uuid/v4');
const { Transaction, Product, User } = require('./models');

const BASE_URL = 'https://agile-falls-46666.herokuapp.com';
const newProduct = async (name, description, url, price) => {
  const res = await axios.post(`${BASE_URL}/products`, {
    name,
    description,
    image_url: url,
    price,
  });
};

const newCategory = async (name, url) => {
  const res = await axios.post(`${BASE_URL}/categories`, {
    name,
    image_url: url,
  });
};

const newTransaction = async (transId, userId, productId) => {
  const res = await axios.post(`${BASE_URL}/transaction`, {
    transId,
    userId,
    productId,
  });
};

const main = async () => {
  const transactionId = uuidv4();
  const newUser = await User.findOne({
    where: {
      id: 1,
    },
  });
  const product1 = await Product.findOne({
    where: {
      id: 1,
    },
  });
  const product1Id = product1.dataValues.id;
  const product2 = await Product.findOne({
    where: {
      id: 2,
    },
  });
  const product2Id = product2.dataValues.id;

  newTransaction(transactionId, newUser.dataValues.id, product1.dataValues.id);
  newTransaction(transactionId, newUser.dataValues.id, product2.dataValues.id);
};

main();