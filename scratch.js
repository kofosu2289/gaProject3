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
  console.log(res);
};

const newCategory = async (name, url) => {
  const res = await axios.post(`${BASE_URL}/categories`, {
    name,
    image_url: url,
  });
  console.log(res);
};

const newTransaction = async (transId, userId, productId) => {
  const res = await axios.post(`${BASE_URL}/transaction`, {
    transId,
    userId,
    productId,
  });
  console.log(res);
};

const main = async () => {
  // await Transaction.destroy({
  //   where: {
  //     id: 2,
  //   },
  // });

  // await Transaction.destroy({
  //   where: {
  //     id: 3,
  //   },
  // });
  const transactionId = uuidv4();
  const newUser = await User.findOne({
    where: {
      id: 1,
    },
  });
  console.log(newUser.dataValues.id);
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
  console.log({ transactionId, product1Id, product2Id });

  newTransaction(transactionId, newUser.dataValues.id, product1.dataValues.id);
  newTransaction(transactionId, newUser.dataValues.id, product2.dataValues.id);

  // newProduct(`24K Gold Mens's Racing Bike`, `Made with an aluminum frame, this bike boasts a meticulosly applied layer of 24K deep Gold from the handlebars to every ridge of the gear chain, with a soft suede saddle and SR4 Tyres. Not only does the bicycle resemble a striking work of modern art to look at, but it is even more beautiful in motion, as sunlight bounces off the spinning spokes`, `https://s3.scoopwhoop.com/anj/sjsj/956b9665-a2ab-4d1d-a40e-d5eea819dcbf.jpg`, 327970);
  // newProduct('Something expensive', 'Like REALLY expensive', 'http://www.google.com', 1000000)
  // newCategory('Transportation', `http://www.gulfstream.com/images/uploads/hp_sub_features/paris_preview.jpg`);
};

main();