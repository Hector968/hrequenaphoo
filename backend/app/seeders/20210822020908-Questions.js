'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */
     return queryInterface.bulkInsert('Questions', [
      {
        id:1, survey_id:1,
        question: '¿Cómo sintió el sismo?',
        
      },
      {
        id:2, survey_id:1,
        question: '¿Cómo obervó el comportamiento de objetos?',
      },
      {
        id:3, survey_id:1,
        question: '¿Efectos sobre las contruscciones?',
      },
      {
        id:4, survey_id:1,
        question: '¿Efectos sobre el terreno?',
      }
    ]);
  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
     return queryInterface.bulkDelete('Questions', null, {});

  }
};
