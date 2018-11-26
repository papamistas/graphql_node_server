/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('reservaState', {
    id: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
      field: 'id'
    },
    state: {
      type: DataTypes.STRING(25),
      allowNull: false,
      field: 'state'
    }
  }, {
    tableName: 'reserva_state'
  });
};
