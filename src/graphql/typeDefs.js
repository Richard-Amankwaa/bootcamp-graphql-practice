
const { gql } = require('apollo-server-express')

module.exports = gql`
  type Query {
    authorById(id: ID!): Author!
    authorSearch(input: String!): [Author!]!
    allAuthors:[Author!]!
    bookById(id: ID!): Book
    bookByTitle(title: String!): [Book!]!
    publisherById(id: ID!): Publisher!
    publisher(input: String!): Publisher!
    publisherByTitle(title: String!): [Publisher!]!

  }
  type Mutation {
    login(email: String!, password: String!): AuthReturn!
    addAuthor(input: AddAuthorInput!, password: String!): Author!
    addPublisher(input: AddPublisherInput!): Publisher!
    addBook(authorId: ID!, publisherId: ID!, input: AddBookInput): Book!
    register(input: RegisterInput!): AuthReturn!
  }

  type Author {
    id: ID!
    firstName: String
    lastName: String
    email: String!
    age: Int
    numBooksPublished: Int
    books: [Book!]
  }

  type Address {
    street: String
    state: String!
    city: String!
    zip: Int
  }

  type Book {
    id: ID!
    title: String!
    language: Lang
    numPages: Int!
    datePublished: String!
    bestseller: Boolean!
    author: Author!
    publisher: Publisher!

  }

  enum Lang {
    en
    fr
    es
    it
    cn
    de 
    pt
  }

  type Publisher {
    id: ID!
    company: String!
    phoneNumber: String!
    numBooksPublished: Int!
    books:[Book!]!
    address: Address!
  }


  input AddAuthorInput {
    firstName: String!
    lastName: String!
    email: String
    age: Int
    numBooksPublished: Int!
  }

  input AddBookInput {
    title: String!
    language: Lang
    numPages: Int!
    datePublished: String!
    bestseller: Boolean!
  }

  input AddPublisherInput {
    company: String!
    phoneNumber: String!
    numBooksPublished: Int!
  }


  
  type AuthReturn {
    token: String!
    author: Author!
  }

  input RegisterInput {
    email: String!
    password: String!
  }




`
