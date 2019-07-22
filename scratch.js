const axios = require('axios');

const BASE_URL = 'http://localhost:3001';

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

const main = async () => {
  newProduct(`24K Gold Mens's Racing Bike`, `Made with an aluminum frame, this bike boasts a meticulosly applied layer of 24K deep Gold from the handlebars to every ridge of the gear chain, with a soft suede saddle and SR4 Tyres. Not only does the bicycle resemble a striking work of modern art to look at, but it is even more beautiful in motion, as sunlight bounces off the spinning spokes`, `https://s3.scoopwhoop.com/anj/sjsj/956b9665-a2ab-4d1d-a40e-d5eea819dcbf.jpg`, 327970);
  // newCategory('Transportation', `http://www.gulfstream.com/images/uploads/hp_sub_features/paris_preview.jpg`);
};

main();