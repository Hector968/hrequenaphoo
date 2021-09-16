'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('Options', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      scale: {
        type: Sequelize.INTEGER
      },
      question_id: {
        type: Sequelize.INTEGER
      },
      survey_id:{
        type: Sequelize.INTEGER
      },
      decription: {
        type: Sequelize.STRING
      }  
    }, 
    {
      timestamps: false
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('Options');
  }
};