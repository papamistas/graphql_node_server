/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('alert', {
    id: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
      field: 'id'
    },
    idCliente: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      field: 'id_cliente'
    },
    idTipoAlojamento: {
      type: DataTypes.STRING(20),
      allowNull: false,
      field: 'id_tipo_alojamento'
    },
    idTipo: {
      type: DataTypes.STRING(20),
      allowNull: false,
      field: 'id_tipo'
    },
    valor: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      field: 'valor'
    },
    pessoas: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      field: 'pessoas'
    },
    destino: {
      type: DataTypes.STRING(20),
      allowNull: false,
      field: 'destino'
    },
    forRent: {
      type: DataTypes.INTEGER(1),
      allowNull: false,
      field: 'for_rent'
    },
    forSale: {
      type: DataTypes.INTEGER(1),
      allowNull: false,
      field: 'for_sale'
    },
    forArrenda: {
      type: DataTypes.INTEGER(1),
      allowNull: false,
      field: 'for_arrenda'
    },
    valorArrenda: {
      type: DataTypes.INTEGER(11),
      allowNull: true,
      field: 'valor_arrenda'
    },
    valorVenda: {
      type: DataTypes.INTEGER(11),
      allowNull: true,
      field: 'valor_venda'
    },
    valorRent: {
      type: DataTypes.INTEGER(11),
      allowNull: true,
      field: 'valor_rent'
    },
    inicio: {
      type: DataTypes.STRING(12),
      allowNull: true,
      field: 'inicio'
    },
    fim: {
      type: DataTypes.STRING(12),
      allowNull: true,
      field: 'fim'
    }
  }, {
    tableName: 'alert'
  });
};
