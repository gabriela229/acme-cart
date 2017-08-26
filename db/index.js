var db = require('conn');
var Product = require('Product');
var Order = require('Order');
var LineItem = require('LineItem');

Product.belongsTo(Order);
Order.hasMany(Product);
LineItem.belongsTo(Product);
LineItem.belongsTo(Order);
Order.hasMany(LineItem);

const sync = function(){
  db.sync({force: true});
};

const seed = function(){

}
