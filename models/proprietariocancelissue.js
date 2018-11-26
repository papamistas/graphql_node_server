/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('proprietariocancelissue', {
    id: {
      type: DataTypes.INTEGER(10),
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
      field: 'id'
    },
    propid: {
      type: DataTypes.INTEGER(11),
      allowNull: true,
      field: 'propid'
    },
    descricao: {
      type: DataTypes.STRING(255),
      allowNull: true,
      field: 'descricao'
    }
  }, {
    tableName: 'proprietariocancelissue'
  });
};
