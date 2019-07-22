const Sequelize = require('sequelize');

const sequelize = new Sequelize({
  database: 'benjamins_db',
  dialect: 'postgres',
  define: {
    underscored: true,
  },
});

const User = sequelize.define('user', {
  username: Sequelize.STRING,
  email: Sequelize.STRING,
  pw_hash: Sequelize.STRING,
});

const Category = sequelize.define('category', {
  name: Sequelize.STRING,
  image_url: Sequelize.STRING,
});

const Product = sequelize.define('product', {
  name: Sequelize.STRING,
  description: Sequelize.STRING(1000),
  image_url: Sequelize.STRING,
  price: Sequelize.INTEGER,
});


// JOIN TABLE
Product.belongsTo(User, { through: 'shopping_cart' });


User.hasMany(Category);
Category.belongsTo(User);
Category.hasMany(Product, { onDelete: 'cascade' });
Product.belongsTo(Category);

module.exports = {
  sequelize,
  User,
  Category,
  Product,
};
