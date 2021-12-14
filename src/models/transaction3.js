'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class transaction3 extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  transaction3.init({
    tipooperacion: DataTypes.BIGINT,
    mensajeid: DataTypes.BIGINT,
    bancoorigen: DataTypes.BIGINT,
    cuentaorigen: DataTypes.BIGINT,
    bancodestino: DataTypes.BIGINT,
    cuentadestino: DataTypes.BIGINT,
    monto: DataTypes.BIGINT,
    algo: DataTypes.BIGINT,
    algodos: DataTypes.TEXT
  }, {
    sequelize,
    modelName: 'transaction3',
  });
  return transaction3;
};