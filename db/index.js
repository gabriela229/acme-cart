var Sequelize = require('sequelize');
var db = require('./conn');
var Product = require('./Product');
var Order = require('./Order');
var LineItem = require('./LineItem');

Product.belongsTo(Order);
Order.hasMany(Product);
LineItem.belongsTo(Product, {as: 'LIProd'});
LineItem.belongsTo(Order);
Order.hasMany(LineItem);

var models = {
  Product,
  Order,
  LineItem
};

const sync = function(){
  return db.sync({force: true, logging: console.log});
};

const seed = function(){
  var _seed = require('./seed');
  return _seed(models);
};


module.exports = {
  sync,
  seed,
  models
};
