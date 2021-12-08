'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class CadPro extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      CadPro.belongsTo(models.CadUsuario)
    }
  };
  CadPro.init({
    nomeIt: DataTypes.STRING,
    desIt: DataTypes.STRING,
    anoComIt: DataTypes.INTEGER,
    desAquiIt: DataTypes.STRING,
    desNacIt: DataTypes.STRING,
    condIt: DataTypes.STRING,
    precoIt: DataTypes.FLOAT,
    cadUserId: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'CadPro',
  });
  return CadPro;
};