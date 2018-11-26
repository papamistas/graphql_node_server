/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('mylist', {
    id: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
      field: 'id'
    },
    codCasa: {
      type: DataTypes.INTEGER(11),
      allowNull: true,
      field: 'cod_casa'
    },
    mylistcol: {
      type: DataTypes.STRING(45),
      allowNull: true,
      field: 'mylistcol'
    },
    sessid: {
      type: DataTypes.STRING(45),
      allowNull: true,
      field: 'sessid'
    },
    cliente: {
      type: DataTypes.STRING(45),
      allowNull: true,
      field: 'cliente'
    },
    data: {
      type: DataTypes.STRING(45),
      allowNull: true,
      field: 'data'
    }
  }, {
    tableName: 'mylist'
  });
};
