const { gql } = require("apollo-server-express");

const typeDefs = gql`
  type User {
    _id: ID!
    username: String!
    email: String!
    bookCount: Int
    mybooks: [Books]
  }

  type Books {
    authors: String
    description: String!
    bookId: String!
    image: String
    link: String
    title: String!
  }

  type Auth {
    token: ID!
    user: User
  }

  type Query {
    me(_id: String): [User]
  }

  type Mutation {
    createUser(username: String!, email: String!, password: String!): Auth
    saveBook(bookId: String!): Books
    deleteBook(bookId: String!): Books
    login(email: String!, password: String!): Auth
  }
`;

module.exports = typeDefs;
