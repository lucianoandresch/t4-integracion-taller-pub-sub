'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('transaction3s', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      tipooperacion: {
        type: Sequelize.BIGINT
      },
      mensajeid: {
        type: Sequelize.BIGINT
      },
      bancoorigen: {
        type: Sequelize.BIGINT
      },
      cuentaorigen: {
        type: Sequelize.BIGINT
      },
      bancodestino: {
        type: Sequelize.BIGINT
      },
      cuentadestino: {
        type: Sequelize.BIGINT
      },
      monto: {
        type: Sequelize.BIGINT
      },
      algo: {
        type: Sequelize.BIGINT
      },
      algodos: {
        type: Sequelize.TEXT
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
    await queryInterface.dropTable('transaction3s');
  }
};