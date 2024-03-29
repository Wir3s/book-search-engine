const { gql } = require("apollo-server-express");

const typeDefs = gql`
  type User {
    _id: ID!
    username: String!
    email: String!
    bookCount: Int
    mybooks: [Books]
    password: String!
  }

  type Books {
    authors: [String]
    description: String!
    bookId: String!
    image: String
    link: String
    title: String!
  }

  input BooksInput {
    authors: [String]
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
    me: User
  }

  type Mutation {
    createUser(username: String!, email: String!, password: String!): Auth
    saveBook(input: BooksInput): User
    deleteBook(bookId: String!): User
    login(email: String!, password: String!): Auth
  }
`;

module.exports = typeDefs;
