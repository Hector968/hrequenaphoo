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
     return queryInterface.bulkInsert('Options', [
      //question-1
      {
        scale: 1, question_id: 1, survey_id:1,
        decription: "No lo sentí"     
      },
      {
        scale: 2, question_id: 1, survey_id:1,
        decription: "Algunos pocos lo sintieron en pisos altos de edificios"     
      },
      {
        scale: 3, question_id: 1, survey_id:1,
        decription: "Pocos lo sintieron. Sensación semejante al paso de un camion liviano"     
      },
      {
        scale: 4, question_id: 1, survey_id:1,
        decription: "Pocos lo sintieron. Sensación semejante al paso de un camion liviano"     
      },
      {
        scale: 5, question_id: 1, survey_id:1,
        decription: "Sentido por casi todos. Vibración parecida a la que produce un tren pasando muy cerca"     
      },
      {
        scale: 6, question_id: 1, survey_id:1,
        decription: "Sentido por todos, tanto dentro como fuera de las edificaciones"     
      },
      {
        scale: 7, question_id: 1, survey_id:1,
        decription: "Difícil mantenerse en pie. Sentido por personas en vehículos en movimiento"     
      },
      //question-2
      
      {
        scale: 1, question_id: 2, survey_id:1,
        decription: "No observé"     
      },
      {
        scale: 2, question_id: 2, survey_id:1,
        decription: "Objetos colgantes pudieron oscilar"     
      },
      {
        scale: 3, question_id: 2, survey_id:1,
        decription: "Platos, vasos, ventanas y otros objetos vibraron,tintinearon"     
      },
      {
        scale: 4, question_id: 2, survey_id:1,
        decription: "Volcamiento de objetos inestables. Algunos árboles y postes pueden balancearse"     
      },
      {
        scale: 5, question_id: 2, survey_id:1,
        decription: "Libros se caen de sus estantes y algunos muebles pesados se movieron"     
      },
      {
        scale: 6, question_id: 2, survey_id:1,
        decription: " Objetos esbeltos se volvaron y muebles se desplazaron de su sitio"     
      },
      {
        scale: 7, question_id: 2, survey_id:1,
        decription: "Posible caída de paredes,monumentos y otros objetos"     
      },
      //question-3
      
      {
        scale: 1, question_id: 3, survey_id:1,
        decription: "No sabe"     
      },
      {
        scale: 2, question_id: 3, survey_id:1,
        decription: "Crujir de paredes pero no aparecen grietas"     
      },
      {
        scale: 3, question_id: 3, survey_id:1,
        decription: "Posibles grietas menores en frisos"     
      },
      {
        scale: 4, question_id: 3, survey_id:1,
        decription: "Puede haber daño moderado en esructuras de baja calidad de consrucción"     
      },
      {
        scale: 5, question_id: 3, survey_id:1,
        decription: "Daño leve a moderado en estructuras ordinarias. Daños en paredes de mampostería"     
      },
      {
        scale: 6, question_id: 3, survey_id:1,
        decription: "Daño severo en estructuras de baja calidad de construcción y posibles derrumbes parciales"     
      },
      {
        scale: 7, question_id: 3, survey_id:1,
        decription: "Daño moderado en estructuras de buena calidad de construcción"     
      },
      {
        scale: 8, question_id: 3, survey_id:1,
        decription: "Daño severo en muchas estructuras bien construidas"     
      },
      {
        scale: 9, question_id: 3, survey_id:1,
        decription: "Sólo se mantienen de pie las estructuras de buena calidad de construcción"     
      },
      //question-4
      
      {
        scale: 1, question_id: 4, survey_id:1,
        decription: "No sabe"     
      },
      {
        scale: 2, question_id: 4, survey_id:1,
        decription: "Expulsión de lodo en el terreno"     
      },
      {
        scale: 3, question_id: 4, survey_id:1,
        decription: "Grietas en el terreno"     
      },
      {
        scale: 4, question_id: 4, survey_id:1,
        decription: "Agrietaiento notable en el terreno y deslizamiento de tierra"     
      },
      {
        scale: 5, question_id: 4, survey_id:1,
        decription: "Hundimientos y deslizamientos en el terreno"     
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
     return queryInterface.bulkDelete('Options', null, {});

  }
};
