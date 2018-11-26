/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('periodoLongo', {
    id: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
      field: 'id'
    },
    codCasa: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      references: {
        model: 'casa',
        key: 'cod_casa'
      },
      field: 'cod_casa'
    },
    inicio: {
      type: DataTypes.STRING(12),
      allowNull: false,
      field: 'inicio'
    },
    fim: {
      type: DataTypes.STRING(12),
      allowNull: false,
      field: 'fim'
    },
    precoMes: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      field: 'preco_mes'
    },
    estadiaMinima: {
      type: DataTypes.STRING(50),
      allowNull: false,
      field: 'estadia_minima'
    }
  }, {
    tableName: 'periodo_longo'
  });
};
