/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('tipoAlojamento', {
    idTipoAlojamento: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
      field: 'id_tipo_alojamento'
    },
    tipoAlojamento: {
      type: DataTypes.STRING(50),
      allowNull: false,
      field: 'tipo_alojamento'
    }
  }, {
    tableName: 'tipo_alojamento'
  });
};
