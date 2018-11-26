/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('reservaPayment', {
    id: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
      field: 'id'
    },
    idPagamento: {
      type: DataTypes.STRING(20),
      allowNull: false,
      field: 'id_pagamento'
    },
    idTipoPagamento: {
      type: DataTypes.STRING(25),
      allowNull: false,
      field: 'id_tipo_pagamento'
    },
    valor: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      field: 'valor'
    },
    idpreco: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      field: 'idpreco'
    },
    idreserva: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      field: 'idreserva'
    },
    data: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: sequelize.literal('CURRENT_TIMESTAMP'),
      field: 'data'
    }
  }, {
    tableName: 'reserva_payment'
  });
};
