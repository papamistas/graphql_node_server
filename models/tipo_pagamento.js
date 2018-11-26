/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('tipoPagamento', {
    id: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
      field: 'id'
    },
    tipoPagamento: {
      type: DataTypes.STRING(20),
      allowNull: false,
      field: 'tipo_pagamento'
    }
  }, {
    tableName: 'tipo_pagamento'
  });
};
