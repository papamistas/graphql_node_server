/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('preco', {
    id: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
      field: 'id'
    },
    ano: {
      type: DataTypes.INTEGER(11),
      allowNull: true,
      field: 'ano'
    },
    nmMes: {
      type: DataTypes.STRING(45),
      allowNull: true,
      field: 'nm_mes'
    },
    nSemana: {
      type: DataTypes.INTEGER(11),
      allowNull: true,
      field: 'n_semana'
    },
    codCasa: {
      type: DataTypes.INTEGER(11),
      allowNull: true,
      field: 'cod_casa'
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
    livre: {
      type: DataTypes.INTEGER(1),
      allowNull: true,
      field: 'livre'
    },
    reservar: {
      type: DataTypes.STRING(45),
      allowNull: true,
      field: 'reservar'
    },
    promo: {
      type: DataTypes.INTEGER(1),
      allowNull: true,
      field: 'promo'
    },
    paga: {
      type: DataTypes.BOOLEAN,
      allowNull: true,
      field: 'paga'
    }
  }, {
    tableName: 'preco'
  });
};
