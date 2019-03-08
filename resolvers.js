export default {
    Casa: {
        periodos: (parent, args, context, info) => parent.getPeriodos(),
        feedbacks: (parent, args, context, info) => parent.getFeedbacks(),
        reservas: (parent, args, context, info) =>  parent.getReservas(),
        destino_complex: (parent, args, context, info) =>   parent.designacao + ' esta casa encontras-se em zona de ' +  parent.destino

        /*{
            debugger;
            console.log(parent)
            console.log(args)
            console.log(context)
            console.log(info)
            parent.designacao + ' esta casa encontras-se em zona de ' +  parent.cod_casa
        }*/


    },
    Periodo: {
        casa: (parent, args, context, info) => parent.getCasa(),
    },
    Query: {
        casa: (parent, {id}, {db}, info) => db.casa.findById(id),
        casas: (parent, args, {db}, info) => db.casa.findAll(),
        periodos: (parent, args, {db}, info) => db.periodo.findAll(),
        periodo: (parent, {id}, {db}, info) => db.periodo.findById(id),
        feedbacks: (parent, args, {db}, info) => db.feedback.findAll(),
        feedback: (parent, {id}, {db}, info) => db.feedback.findById(id),
        reservas: (parent, args, {db}, info) => db.reserva.findAll(),
        reserva: (parent, args, {db}, info) => db.reserva.findById(id),
    },
    Mutation: {
        createPost: (parent, {title, content, authorId}, {db}, info) =>
            db.post.create({
                title: title,
                content: content,
                authorId: authorId
            }),
        updatePost: (parent, {title, content, id}, {db}, info) =>
            db.post.update({
                    title: title,
                    content: content
                },
                {
                    where: {
                        id: id
                    }
                }),
        deletePost: (parent, {id}, {db}, info) =>
            db.post.destroy({
                where: {
                    id: id
                }
            })
    }
};
