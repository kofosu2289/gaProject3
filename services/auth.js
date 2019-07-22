const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const SALT = 10;
const SECRET = 'unlikely benjamins';

const hashPassword = async (password) => {
  const digest = await bcrypt.hash(password, SALT);
  return digest;
};

const genToken = (data) => {
  const token = jwt.sign(data, SECRET);
  return token;
};

const checkPassword = async (password, hash) => {
  const validate = await bcrypt.compare(password, hash);
  return validate;
};

module.exports = {
  hashPassword,
  checkPassword,
  genToken,
};