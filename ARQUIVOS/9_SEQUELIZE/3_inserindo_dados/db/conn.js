const { Sequelize } = require("sequelize");

const sequelize = new Sequelize("nodesequelize","root","admin",{
  host:"localhost",
  dialect:"mysql"
});

try {
  sequelize.authenticate();
  console.log("Sequelize conectou ao banco de dados MySQL!")
  
} catch (error) {
  console.log("Não foi possível conectar ao banco de dados MySQL:",error);
};

module.exports = sequelize;