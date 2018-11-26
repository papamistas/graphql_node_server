export default `
  type Author {
    id: ID!
    firstName: String!
    lastName: String!
    posts: [Post!]!
  }
  type Post {
    id: ID!
    title: String
    content: String!
    authorId: ID!
    author: Author!
  }
  type Casa {
    cod_casa: ID!
    destino: String
    designacao: String
    pais: String
    tipo: String
    periodos: [Periodo!]!
    feedbacks: [Feedback!]!
    destino_complex: String
  }
  type Periodo {
    id: ID!
    inicio: String
    fim: String
    precoSemana: String
    precoDia: String
    precoFimsemana: String
    casaid : ID!
    casa : Casa!
  }
  type Feedback {
    id: ID!
    cod_casa: ID!
    valor_voto: Int
    comment: String
  }
  type Query {
    casas: [Casa!]!
    casa(cod_casa: ID!): Casa
    periodos: [Periodo!]!
    periodo(id: ID!): Periodo
    feedbacks: [Feedback!]!
    feedback(id: ID!): Feedback
  }
  type Mutation {
    createPost(title: String, content:String!, authorId: ID!): Post!
    updatePost(id: ID!, title: String, content:String!): [Int!]!
    deletePost(id: ID!): Int!
  }
`;
