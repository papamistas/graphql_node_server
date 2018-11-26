/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('estadiaMinima', {
    id: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
      field: 'id'
    },
    estadiaMin: {
      type: DataTypes.STRING(30),
      allowNull: false,
      field: 'estadia_min'
    }
  }, {
    tableName: 'estadia_minima'
  });
};
