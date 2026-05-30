const { Sequelize } = require('sequelize');
require('dotenv').config();

const sequelize = new Sequelize(
  process.env.DB_NAME,
  process.env.DB_USER,
  process.env.DB_PASSWORD,
  {
    host: process.env.DB_HOST,
    dialect: process.env.DB_DIALECT,
    dialectOptions: {
      ssl: {
        require: true,
        rejectUnauthorized: false
      }
    }
  }
);

async function conectar(){
  try{
    await sequelize.authenticate();
    console.log('Conexion exitosa a la base de datos.');
  }catch(error){
    console.error('Error de conexion', error);
  }
}

conectar();
module.exports = sequelize;