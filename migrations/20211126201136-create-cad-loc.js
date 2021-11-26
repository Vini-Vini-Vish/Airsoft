'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('CadLocs', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      nomeLoc: {
        type: Sequelize.STRING
      },
      desLoc: {
        type: Sequelize.STRING
      },
      cidLoc: {
        type: Sequelize.STRING
      },
      endLoc: {
        type: Sequelize.STRING
      },
      numTelLoc: {
        type: Sequelize.INTEGER
      },
      valAluLoc: {
        type: Sequelize.FLOAT
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('CadLocs');
  }
};