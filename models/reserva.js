/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('reserva', {
    id: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
      field: 'id'
    },
    nPrereserva: {
      type: DataTypes.INTEGER(11),
      allowNull: true,
      field: 'n_prereserva'
    },
    codCasa: {
      type: DataTypes.STRING(45),
      allowNull: true,
      field: 'codCasa'
    },
    reservado: {
      type: DataTypes.BOOLEAN,
      allowNull: true,
      field: 'reservado'
    },
    valor: {
      type: DataTypes.STRING(45),
      allowNull: true,
      field: 'valor'
    },
    nCheque: {
      type: DataTypes.STRING(45),
      allowNull: true,
      field: 'n_cheque'
    },
    valorSinal: {
      type: DataTypes.STRING(45),
      allowNull: true,
      field: 'valorSinal'
    },
    idcliente: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      field: 'idcliente'
    },
    idpreco: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      field: 'idpreco'
    },
    tipopagamento: {
      type: DataTypes.INTEGER(11),
      allowNull: true,
      field: 'tipopagamento'
    },
    nPagamento: {
      type: DataTypes.INTEGER(11),
      allowNull: true,
      field: 'n_pagamento'
    },
    reservaState: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      field: 'reserva_state'
    },
    data: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: sequelize.literal('CURRENT_TIMESTAMP'),
      field: 'data'
    },
    user: {
      type: DataTypes.STRING(50),
      allowNull: false,
      defaultValue: 'User',
      field: 'user'
    },
    eventid: {
      type: DataTypes.STRING(50),
      allowNull: true,
      field: 'eventid'
    }
  }, {
    tableName: 'reserva'
  });
  Reserva.associate = (models) => {
    Reserva.belongsTo(models.casa,{foreignKey: 'codCasa'});
  };

  return Periodo;
};
