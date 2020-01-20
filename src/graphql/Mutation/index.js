const merge = require('lodash.merge')
const Author = require('./Author')
const Book = require('./Book')
const Publisher = require('./Publisher')
const Auth = require('./Auth')


const resolvers = [Author, Book, Publisher, Auth]

module.exports = merge(...resolvers)
