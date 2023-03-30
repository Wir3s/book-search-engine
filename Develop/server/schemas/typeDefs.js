const { gql } = require('apollo-server-express');

const typeDefs = gql`
    type User {
        _id: ID!
        username: String!
        email: String!
        password: String!
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

    type Query {
        user(_id: String): [User] 
    }

    type Mutation {
        createUser(username:String!, email:String!, password:String!):User
        saveBook():Books
        deleteBook(): Books
        # login?
    }

`;

module.exports = typeDefs;