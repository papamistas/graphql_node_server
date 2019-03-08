/* jshint indent: 2 */
module.exports = (sequelize, DataTypes) => {
    const Casa = sequelize.define('casa', {
            cod_casa: {
                type: DataTypes.INTEGER(11),
                allowNull: false,
                primaryKey: true,
                autoIncrement: true,
                field: 'cod_casa'
            },
            adicionado: {
                type: DataTypes.STRING(45),
                allowNull: true,
                field: 'adicionado'
            },
            dataActivo: {
                type: DataTypes.STRING(45),
                allowNull: true,
                field: 'data_activo'
            },
            destino: {
                type: DataTypes.STRING(45),
                allowNull: true,
                field: 'destino'
            },
            proprietario: {
                type: DataTypes.STRING(45),
                allowNull: true,
                field: 'proprietario'
            },
            propid: {
                type: DataTypes.INTEGER(11),
                allowNull: true,
                field: 'propid'
            },
            designacao: {
                type: DataTypes.STRING(45),
                allowNull: true,
                field: 'designacao'
            },
            tipoalojamento: {
                type: DataTypes.STRING(45),
                allowNull: true,
                field: 'tipoalojamento'
            },
            tipo: {
                type: DataTypes.STRING(45),
                allowNull: true,
                field: 'tipo'
            },
            pessoas: {
                type: DataTypes.INTEGER(5),
                allowNull: true,
                defaultValue: '0',
                field: 'pessoas'
            },
            pais: {
                type: DataTypes.STRING(45),
                allowNull: true,
                field: 'pais'
            },
            distrito: {
                type: DataTypes.STRING(45),
                allowNull: true,
                field: 'distrito'
            },
            endereco: {
                type: DataTypes.STRING(250),
                allowNull: true,
                field: 'endereco'
            },
            codpostal: {
                type: DataTypes.STRING(45),
                allowNull: true,
                field: 'codpostal'
            },
            area: {
                type: DataTypes.STRING(45),
                allowNull: true,
                field: 'area'
            },
            lat: {
                type: DataTypes.STRING(45),
                allowNull: true,
                field: 'lat'
            },
            lng: {
                type: DataTypes.STRING(45),
                allowNull: true,
                field: 'lng'
            },
            altitude: {
                type: DataTypes.STRING(45),
                allowNull: true,
                field: 'altitude'
            },
            localidade: {
                type: DataTypes.STRING(45),
                allowNull: true,
                field: 'localidade'
            },
            distCentro: {
                type: DataTypes.STRING(45),
                allowNull: true,
                field: 'dist_centro'
            },
            distPraia: {
                type: DataTypes.STRING(45),
                allowNull: true,
                field: 'dist_praia'
            },
            piscina: {
                type: DataTypes.INTEGER(1),
                allowNull: true,
                field: 'piscina'
            },
            televisao: {
                type: DataTypes.INTEGER(1),
                allowNull: true,
                field: 'televisao'
            },
            arCondicionado: {
                type: DataTypes.INTEGER(1),
                allowNull: true,
                field: 'ar_condicionado'
            },
            img1: {
                type: DataTypes.STRING(255),
                allowNull: true,
                defaultValue: 'images/noimage.jpg',
                field: 'img_1'
            },
            img2: {
                type: DataTypes.STRING(255),
                allowNull: true,
                defaultValue: 'images/noimage.jpg',
                field: 'img_2'
            },
            img3: {
                type: DataTypes.STRING(255),
                allowNull: true,
                defaultValue: 'images/noimage.jpg',
                field: 'img_3'
            },
            img4: {
                type: DataTypes.STRING(255),
                allowNull: true,
                defaultValue: 'images/noimage.jpg',
                field: 'img_4'
            },
            img5: {
                type: DataTypes.STRING(255),
                allowNull: true,
                defaultValue: 'images/noimage.jpg',
                field: 'img_5'
            },
            img6: {
                type: DataTypes.STRING(255),
                allowNull: true,
                defaultValue: 'images/noimage.jpg',
                field: 'img_6'
            },
            img7: {
                type: DataTypes.STRING(255),
                allowNull: true,
                defaultValue: 'images/noimage.jpg',
                field: 'img_7'
            },
            img8: {
                type: DataTypes.STRING(255),
                allowNull: true,
                defaultValue: 'images/noimage.jpg',
                field: 'img_8'
            },
            img9: {
                type: DataTypes.STRING(255),
                allowNull: false,
                defaultValue: 'images/noimage.jpg',
                field: 'img_9'
            },
            img10: {
                type: DataTypes.STRING(255),
                allowNull: false,
                defaultValue: 'images/noimage.jpg',
                field: 'img_10'
            },
            quartos: {
                type: DataTypes.INTEGER(11),
                allowNull: true,
                field: 'quartos'
            },
            camascasal: {
                type: DataTypes.INTEGER(11),
                allowNull: true,
                field: 'camascasal'
            },
            camassingle: {
                type: DataTypes.INTEGER(11),
                allowNull: true,
                field: 'camassingle'
            },
            casasbanho: {
                type: DataTypes.INTEGER(11),
                allowNull: true,
                field: 'casasbanho'
            },
            golf: {
                type: DataTypes.INTEGER(1),
                allowNull: true,
                field: 'golf'
            },
            tenis: {
                type: DataTypes.INTEGER(1),
                allowNull: true,
                field: 'tenis'
            },
            pesca: {
                type: DataTypes.INTEGER(1),
                allowNull: true,
                field: 'pesca'
            },
            natacao: {
                type: DataTypes.INTEGER(1),
                allowNull: true,
                field: 'natacao'
            },
            bowling: {
                type: DataTypes.INTEGER(1),
                allowNull: true,
                field: 'bowling'
            },
            casino: {
                type: DataTypes.INTEGER(1),
                allowNull: true,
                field: 'casino'
            },
            cinema: {
                type: DataTypes.INTEGER(1),
                allowNull: true,
                field: 'cinema'
            },
            discoteca: {
                type: DataTypes.INTEGER(1),
                allowNull: true,
                field: 'discoteca'
            },
            outrasActividprox: {
                type: DataTypes.STRING(255),
                allowNull: true,
                field: 'outras_actividprox'
            },
            roupascama: {
                type: DataTypes.INTEGER(1),
                allowNull: true,
                field: 'roupascama'
            },
            roupasbanho: {
                type: DataTypes.INTEGER(1),
                allowNull: true,
                field: 'roupasbanho'
            },
            limpeza: {
                type: DataTypes.INTEGER(1),
                allowNull: true,
                field: 'limpeza'
            },
            utilcozinha: {
                type: DataTypes.INTEGER(1),
                allowNull: true,
                field: 'utilcozinha'
            },
            fogao: {
                type: DataTypes.INTEGER(1),
                allowNull: true,
                field: 'fogao'
            },
            frigorif: {
                type: DataTypes.INTEGER(1),
                allowNull: true,
                field: 'frigorif'
            },
            congel: {
                type: DataTypes.INTEGER(1),
                allowNull: true,
                field: 'congel'
            },
            forno: {
                type: DataTypes.INTEGER(1),
                allowNull: true,
                field: 'forno'
            },
            barbecue: {
                type: DataTypes.INTEGER(1),
                allowNull: true,
                field: 'barbecue'
            },
            microndas: {
                type: DataTypes.INTEGER(1),
                allowNull: true,
                field: 'microndas'
            },
            mlavaloica: {
                type: DataTypes.INTEGER(1),
                allowNull: true,
                field: 'mlavaloica'
            },
            mlavaroupa: {
                type: DataTypes.INTEGER(1),
                allowNull: true,
                field: 'mlavaroupa'
            },
            aqcentral: {
                type: DataTypes.INTEGER(1),
                allowNull: true,
                field: 'aqcentral'
            },
            satcabo: {
                type: DataTypes.INTEGER(1),
                allowNull: true,
                field: 'satcabo'
            },
            internet: {
                type: DataTypes.INTEGER(1),
                allowNull: true,
                field: 'internet'
            },
            outrosServicos: {
                type: DataTypes.STRING(255),
                allowNull: true,
                field: 'outros_servicos'
            },
            linkInfo: {
                type: DataTypes.STRING(45),
                allowNull: true,
                field: 'link_info'
            },
            linkDispon: {
                type: DataTypes.STRING(45),
                allowNull: true,
                field: 'link_dispon'
            },
            activo: {
                type: DataTypes.INTEGER(1),
                allowNull: true,
                field: 'activo'
            },
            sessid: {
                type: DataTypes.STRING(45),
                allowNull: true,
                field: 'sessid'
            },
            promo: {
                type: DataTypes.BOOLEAN,
                allowNull: true,
                field: 'promo'
            },
            certif: {
                type: DataTypes.INTEGER(1),
                allowNull: true,
                field: 'certif'
            },
            dataAct: {
                type: DataTypes.STRING(45),
                allowNull: true,
                field: 'data_act'
            },
            titulo: {
                type: DataTypes.STRING(600),
                allowNull: true,
                field: 'titulo'
            },
            qtspecialoffer: {
                type: DataTypes.INTEGER(11),
                allowNull: true,
                field: 'qtspecialoffer'
            },
            fengomar: {
                type: DataTypes.INTEGER(1),
                allowNull: true,
                field: 'fengomar'
            },
            estacionamento: {
                type: DataTypes.INTEGER(1),
                allowNull: true,
                field: 'estacionamento'
            },
            telefone: {
                type: DataTypes.INTEGER(1),
                allowNull: true,
                field: 'telefone'
            },
            despertador: {
                type: DataTypes.INTEGER(1),
                allowNull: true,
                field: 'despertador'
            },
            dvd: {
                type: DataTypes.INTEGER(1),
                allowNull: true,
                field: 'dvd'
            },
            torradeira: {
                type: DataTypes.INTEGER(1),
                allowNull: true,
                field: 'torradeira'
            },
            animais: {
                type: DataTypes.INTEGER(1),
                allowNull: true,
                field: 'animais'
            },
            fumadores: {
                type: DataTypes.INTEGER(1),
                allowNull: true,
                field: 'fumadores'
            },
            caucao: {
                type: DataTypes.INTEGER(1),
                allowNull: true,
                field: 'caucao'
            },
            valorcaucao: {
                type: DataTypes.STRING(10),
                allowNull: true,
                field: 'valorcaucao'
            },
            deficientes: {
                type: DataTypes.STRING(45),
                allowNull: true,
                field: 'deficientes'
            },
            concelho: {
                type: DataTypes.STRING(45),
                allowNull: true,
                field: 'concelho'
            },
            altImg1: {
                type: DataTypes.STRING(255),
                allowNull: true,
                field: 'alt_img_1'
            },
            forSale: {
                type: DataTypes.INTEGER(1),
                allowNull: false,
                field: 'for_sale'
            },
            forRent: {
                type: DataTypes.INTEGER(1),
                allowNull: false,
                field: 'for_rent'
            },
            forArrenda: {
                type: DataTypes.INTEGER(1),
                allowNull: false,
                field: 'for_arrenda'
            },
            valorArrendamento: {
                type: DataTypes.INTEGER(11),
                allowNull: true,
                field: 'valor_arrendamento'
            },
            valorVenda: {
                type: DataTypes.INTEGER(20),
                allowNull: true,
                field: 'valor_venda'
            },
            certifEnerg: {
                type: DataTypes.INTEGER(1),
                allowNull: false,
                field: 'certif_energ'
            },
            certifEnergLevel: {
                type: DataTypes.STRING(5),
                allowNull: false,
                field: 'certif_energ_level'
            },
            seoTitle: {
                type: DataTypes.STRING(100),
                allowNull: false,
                field: 'seo_title'
            },
            ano: {
                type: DataTypes.INTEGER(11),
                allowNull: false,
                field: 'ano'
            },
            createdAt: {
                type: DataTypes.INTEGER(11),
                allowNull: false,
                field: 'createdAt'
            },
            updatedAt: {
                type: DataTypes.INTEGER(11),
                allowNull: false,
                field: 'updatedAt'
            }
        },
        {
            freezeTableName: true,
            //tableName: 'casa',
            //underscored: true
        }

    );

    Casa.associate = (models) => {
        Casa.hasMany(models.periodo,{ foreignKey: 'cod_casa' });
        Casa.hasMany(models.feedback,{ foreignKey: 'cod_casa' });
        Casa.hasMany(models.reserva,{ foreignKey: 'codCasa' });
        //Casa.hasMany(models.feedbackcomment,{ foreignKey: 'cod_casa' });
    };

    return Casa;
}

