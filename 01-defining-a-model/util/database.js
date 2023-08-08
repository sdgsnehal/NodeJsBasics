const Sequelize = require('sequelize');

const sequelize = new Sequelize('node_complete', 'root', 'spiceqt60!', {
  dialect: 'mysql',
  host: 'localhost',
  
});

module.exports = sequelize;
