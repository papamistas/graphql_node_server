/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('sourceMessage', {
    id: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
      field: 'id'
    },
    category: {
      type: DataTypes.STRING(32),
      allowNull: true,
      field: 'category'
    },
    message: {
      type: DataTypes.TEXT,
      allowNull: true,
      field: 'message'
    }
  }, {
    tableName: 'SourceMessage'
  });
};
