// var Sequelize = require('sequelize');
var db = require('./conn');

const Order = db.define('order', {
  isCart: {
    type: Sequelize.BOOLEAN
  },
  address: {
    type: Sequelize.STRING
  }
});


module.exports = {
  Order
};
