var db = require('./conn');
var Sequelize = db.Sequelize;


const Product = db.define('product', {
  name: {
    type: Sequelize.STRING
  }
});

Product.findProductViewModel = function(){
  return Product.findAll();
};

module.exports = Product;
