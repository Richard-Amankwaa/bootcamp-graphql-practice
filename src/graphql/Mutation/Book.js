const Book = require('../../models/Book')

const addBook = async (obj, { authorId, publisherId, input }) => {
  const newBook = Book.query().insert({ ...input, authorId, publisherId }).returning('*')

  return newBook
}


const resolver = {
  Mutation: {
    addBook,
  },
}


module.exports = resolver
