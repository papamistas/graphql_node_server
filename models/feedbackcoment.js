/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('feedbackcoment', {
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
    coment: {
      type: DataTypes.STRING(255),
      allowNull: true,
      field: 'coment'
    },
    valorVoto: {
      type: DataTypes.INTEGER(11),
      allowNull: true,
      field: 'valor_voto'
    },
    reserva: {
      type: DataTypes.INTEGER(11),
      allowNull: true,
      field: 'reserva'
    },
    nome: {
      type: DataTypes.STRING(45),
      allowNull: true,
      field: 'nome'
    }
  }, {
    tableName: 'feedbackcoment'
  });
};
