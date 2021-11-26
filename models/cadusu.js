'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class CadUsu extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      CadUsu.hasMany(models.CadIten)
      CadUsu.hasMany(models.CadLoc)
    }
  };
  CadUsu.init({
    emailUser: DataTypes.STRING,
    nomeUser: DataTypes.STRING,
    cpfUser: DataTypes.INTEGER,
    numTelUser: DataTypes.INTEGER,
    senhaUser: DataTypes.STRING,
    confSenhaUser: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'CadUsu',
  });
  return CadUsu;
};