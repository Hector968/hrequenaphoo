'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('Users', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      firstName: {
        allowNull: false,
        type: Sequelize.STRING
      },
      lastName: {
        allowNull: false,
        type: Sequelize.STRING
      },
      email:{
        allowNull: false,
        type: Sequelize.STRING
      },
      phone_number:{
        allowNull: false,
        type: Sequelize.STRING(10)
      },
      state:{
        allowNull: false,
        type: Sequelize.STRING
      },
      municipality:{
        allowNull: false,
        type: Sequelize.STRING
      },
      parish:{
        allowNull: false,
        type: Sequelize.STRING
      },
      survey_code:{
        allowNull: false,
        type: Sequelize.INTEGER(10)
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
        defaultValue: Sequelize.NOW 
      },
      updatedAt: {
        allowNull: true,
        type: Sequelize.DATE
      }
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('Users');
  }
};