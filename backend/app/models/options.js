'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Options extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  Options.init({
    scale: DataTypes.INTEGER,
    question_id: DataTypes.INTEGER,
    survey_id:DataTypes.INTEGER,
    decription: DataTypes.STRING,
  }, {
    sequelize,
    timestamps: false,
    modelName: 'Options',
  });
  return Options;
};