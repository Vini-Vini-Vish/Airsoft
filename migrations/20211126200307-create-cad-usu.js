'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('CadUsus', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      emailUser: {
        type: Sequelize.STRING
      },
      nomeUser: {
        type: Sequelize.STRING
      },
      cpfUser: {
        type: Sequelize.INTEGER
      },
      numTelUser: {
        type: Sequelize.INTEGER
      },
      senhaUser: {
        type: Sequelize.STRING
      },
      confSenhaUser: {
        type: Sequelize.STRING
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
    await queryInterface.dropTable('CadUsus');
  }
};