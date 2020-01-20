const merge = require('lodash.merge')
const Book = require('./Book')
const Author = require('./Author')
const Publisher = require('./Publisher')

const resolvers = [Book, Author, Publisher]

module.exports = merge(...resolvers)
