// var Sequelize = require('sequelize');
var db = require('./conn');

const LineItem = db.define('lineItem', {
  quantity: {
    type: Sequelize.INTEGER
  }
});


module.exports = {
  LineItem
};
