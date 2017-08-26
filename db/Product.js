// var Sequelize = require('sequelize');
var db = require('./conn');

const Product = db.define('product', {
  name: {
    type: Sequelize.STRING
  }
});


module.exports = {
  Product
};
