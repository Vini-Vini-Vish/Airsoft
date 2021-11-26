'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class CadLoc extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      CadLoc.belongsTo(models.CadUsu)
    }
  };
  CadLoc.init({
    nomeLoc: DataTypes.STRING,
    desLoc: DataTypes.STRING,
    cidLoc: DataTypes.STRING,
    endLoc: DataTypes.STRING,
    numTelLoc: DataTypes.INTEGER,
    valAluLoc: DataTypes.FLOAT
  }, {
    sequelize,
    modelName: 'CadLoc',
  });
  return CadLoc;
};