/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('proprietario', {
    propid: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
      field: 'propid'
    },
    proprietario: {
      type: DataTypes.STRING(50),
      allowNull: false,
      field: 'proprietario'
    },
    senha: {
      type: DataTypes.STRING(45),
      allowNull: false,
      field: 'senha'
    },
    senhaRepeat: {
      type: DataTypes.STRING(45),
      allowNull: false,
      field: 'senha_repeat'
    },
    salt: {
      type: DataTypes.STRING(45),
      allowNull: true,
      field: 'salt'
    },
    telefone: {
      type: DataTypes.STRING(45),
      allowNull: false,
      field: 'telefone'
    },
    email: {
      type: DataTypes.STRING(45),
      allowNull: false,
      field: 'email'
    },
    morada: {
      type: DataTypes.STRING(255),
      allowNull: false,
      field: 'morada'
    },
    codPostal: {
      type: DataTypes.STRING(45),
      allowNull: false,
      field: 'cod_postal'
    },
    localidade: {
      type: DataTypes.STRING(45),
      allowNull: false,
      field: 'localidade'
    },
    conflito1: {
      type: DataTypes.STRING(255),
      allowNull: true,
      field: 'conflito1'
    },
    conflito2: {
      type: DataTypes.STRING(255),
      allowNull: true,
      field: 'conflito2'
    },
    conflito3: {
      type: DataTypes.STRING(255),
      allowNull: true,
      field: 'conflito3'
    },
    sessid: {
      type: DataTypes.STRING(45),
      allowNull: true,
      field: 'sessid'
    },
    activo: {
      type: DataTypes.INTEGER(1),
      allowNull: false,
      defaultValue: '0',
      field: 'activo'
    },
    pais: {
      type: DataTypes.STRING(45),
      allowNull: false,
      field: 'pais'
    },
    subscribeNewsletter: {
      type: DataTypes.INTEGER(1),
      allowNull: false,
      field: 'subscribe_newsletter'
    },
    facebookAccount: {
      type: DataTypes.INTEGER(4),
      allowNull: false,
      defaultValue: '0',
      field: 'facebook_account'
    },
    fbId: {
      type: DataTypes.BIGINT,
      allowNull: false,
      field: 'fb_id'
    }
  }, {
    tableName: 'proprietario'
  });
};
