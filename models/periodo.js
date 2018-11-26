/* jshint indent: 2 */

module.exports = (sequelize, DataTypes) => {
    const Periodo = sequelize.define('periodo', {
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
            inicio: {
                type: DataTypes.STRING(45),
                allowNull: false,
                field: 'inicio'
            },
            fim: {
                type: DataTypes.STRING(45),
                allowNull: false,
                field: 'fim'
            },
            precoSemana: {
                type: DataTypes.STRING(45),
                allowNull: false,
                field: 'preco_semana'
            },
            precoDia: {
                type: DataTypes.STRING(45),
                allowNull: false,
                field: 'preco_dia'
            },
            precoFimsemana: {
                type: DataTypes.STRING(45),
                allowNull: false,
                field: 'preco_fimsemana'
            },
            estadiaMinima: {
                type: DataTypes.STRING(20),
                allowNull: false,
                field: 'estadia_minima'
            },
            descricao: {
                type: DataTypes.STRING(50),
                allowNull: true,
                field: 'descricao'
            },
            observacoes: {
                type: DataTypes.STRING(300),
                allowNull: false,
                field: 'observacoes'
            }
        },
        {
            freezeTableName: true,
            //tableName: 'periodo',
            //underscored: true

        }

    );

    Periodo.associate = (models) => {
        Periodo.belongsTo(models.casa,{foreignKey: 'cod_casa'});
    };

    return Periodo;
}