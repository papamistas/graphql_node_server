/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('prereserva', {
    nPrereserva: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
      field: 'n_prereserva'
    },
    data: {
      type: DataTypes.STRING(45),
      allowNull: true,
      field: 'data'
    },
    expira: {
      type: DataTypes.STRING(45),
      allowNull: true,
      field: 'expira'
    },
    id: {
      type: DataTypes.STRING(45),
      allowNull: true,
      field: 'id'
    },
    codCasa: {
      type: DataTypes.STRING(45),
      allowNull: true,
      field: 'cod_casa'
    },
    nmMes: {
      type: DataTypes.STRING(45),
      allowNull: true,
      field: 'nm_mes'
    },
    nSemana: {
      type: DataTypes.STRING(45),
      allowNull: true,
      field: 'n_semana'
    },
    inicio: {
      type: DataTypes.STRING(45),
      allowNull: true,
      field: 'inicio'
    },
    fim: {
      type: DataTypes.STRING(45),
      allowNull: true,
      field: 'fim'
    },
    preco: {
      type: DataTypes.STRING(45),
      allowNull: true,
      field: 'preco'
    },
    quinzena: {
      type: DataTypes.STRING(45),
      allowNull: true,
      field: 'quinzena'
    },
    nome: {
      type: DataTypes.STRING(45),
      allowNull: true,
      field: 'Nome'
    },
    morada: {
      type: DataTypes.STRING(45),
      allowNull: true,
      field: 'morada'
    },
    email: {
      type: DataTypes.STRING(45),
      allowNull: true,
      field: 'email'
    },
    telefone: {
      type: DataTypes.STRING(45),
      allowNull: true,
      field: 'telefone'
    },
    perguntas: {
      type: DataTypes.STRING(45),
      allowNull: true,
      field: 'perguntas'
    },
    sugestoes: {
      type: DataTypes.STRING(45),
      allowNull: true,
      field: 'sugestoes'
    },
    comentarios: {
      type: DataTypes.STRING(45),
      allowNull: true,
      field: 'Comentarios'
    },
    situacao: {
      type: DataTypes.STRING(45),
      allowNull: true,
      field: 'situacao'
    },
    formaPagamento: {
      type: DataTypes.INTEGER(11),
      allowNull: true,
      field: 'forma_pagamento'
    },
    valor: {
      type: DataTypes.INTEGER(11),
      allowNull: true,
      field: 'valor'
    },
    sessionid: {
      type: DataTypes.STRING(45),
      allowNull: true,
      field: 'sessionid'
    },
    voto: {
      type: DataTypes.BOOLEAN,
      allowNull: true,
      field: 'voto'
    }
  }, {
    tableName: 'prereserva'
  });
};
