/* jshint indent: 2 */
module.exports = (sequelize, DataTypes) => {
    const Feedback = sequelize.define('feedback', {
            id: {
                type: DataTypes.INTEGER(11),
                allowNull: false,
                primaryKey: true,
                autoIncrement: true,
                field: 'id'
            },
            codCasa: {
                type: DataTypes.INTEGER(11),
                allowNull: false,
                field: 'cod_casa'
            },
            valorVoto: {
                type: DataTypes.INTEGER(11),
                allowNull: false,
                field: 'valor_voto'
            },
            comment: {
                type: DataTypes.STRING(500),
                allowNull: false,
                field: 'comment'
            },
            idCliente: {
                type: DataTypes.INTEGER(50),
                allowNull: false,
                field: 'id_cliente'
            },
            reserva: {
                type: DataTypes.INTEGER(11),
                allowNull: false,
                field: 'reserva'
            },
            revisto: {
                type: DataTypes.INTEGER(4),
                allowNull: false,
                field: 'revisto'
            },
            aproved: {
                type: DataTypes.INTEGER(4),
                allowNull: false,
                field: 'aproved'
            }
        },
        {
            freezeTableName: true,

        }

    );

    Feedback.associate = (models) => {
        Feedback.belongsTo(models.casa,{foreignKey: 'cod_casa'});
    };

    return Feedback;
}

