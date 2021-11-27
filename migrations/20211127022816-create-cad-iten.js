'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('CadItens', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      nomeIt: {
        type: Sequelize.STRING
      },
      desIt: {
        type: Sequelize.STRING
      },
      anoComIt: {
        type: Sequelize.INTEGER
      },
      desAquiIt: {
        type: Sequelize.STRING
      },
      desNacIt: {
        type: Sequelize.STRING
      },
      condIt: {
        type: Sequelize.STRING
      },
      precoIt: {
        type: Sequelize.FLOAT
      },
      cadUserId: {
        type: Sequelize.INTEGER,
        references: {
          model: 'CadUsuarios',
          key: 'id'
        },
        onUpdate: 'cascade',
        onDelete: 'cascade'      
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
    await queryInterface.dropTable('CadItens');
  }
};