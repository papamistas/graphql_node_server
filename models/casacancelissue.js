/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('casacancelissue', {
    id: {
      type: DataTypes.INTEGER(11),
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
    },
    codCasa: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      field: 'cod_casa'
    }
  }, {
    tableName: 'casacancelissue'
  });
};
