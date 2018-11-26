/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('message', {
    id: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      defaultValue: '0',
      primaryKey: true,
      references: {
        model: 'SourceMessage',
        key: 'id'
      },
      field: 'id'
    },
    language: {
      type: DataTypes.STRING(16),
      allowNull: false,
      defaultValue: '',
      primaryKey: true,
      field: 'language'
    },
    translation: {
      type: DataTypes.TEXT,
      allowNull: true,
      field: 'translation'
    }
  }, {
    tableName: 'Message'
  });
};
