/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('visita', {
    id: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
      field: 'id'
    },
    cliente: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      field: 'cliente'
    },
    codCasa: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      field: 'cod_casa'
    },
    data: {
      type: DataTypes.STRING(12),
      allowNull: false,
      field: 'data'
    },
    hora: {
      type: DataTypes.STRING(10),
      allowNull: false,
      field: 'hora'
    }
  }, {
    tableName: 'visita'
  });
};
