'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class CadUsuario extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      CadUsuario.hasMany(models.CadIten)
      CadUsuario.hasMany(models.CadLoc)
      CadUsuario.hasMany(models.CadPro)
    }
  };
  CadUsuario.init({
    emailUser: DataTypes.STRING,
    nomeUser: DataTypes.STRING,
    cpfUser: DataTypes.INTEGER,
    numTelUser: DataTypes.INTEGER,
    senhaUser: DataTypes.STRING,
    confSenhaUser: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'CadUsuario',
  });
  return CadUsuario;
};