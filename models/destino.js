/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('destino', {
    idDestino: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
      field: 'id_destino'
    },
    destino: {
      type: DataTypes.STRING(30),
      allowNull: false,
      field: 'destino'
    }
  }, {
    tableName: 'destino'
  });
};
