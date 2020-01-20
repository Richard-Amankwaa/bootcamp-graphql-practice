const Book = require('../../models/Book')
const Author = require('../../models/Author')
const Publisher = require('../../models/Publisher')
const Address = require('../../models/Address')


const authorSearch = async (obj, { input }) => {
  const a = await Author.query().withGraphJoined('books')
    .where('firstName', 'like', `%${input}%`)
    .orWhere('lastName', 'like', `%${input}%`)
    .orWhere('title', 'like', `%${input}%`)

  return a
}

const allAuthors = async () => {
  const a = await Author.query()

  return a
}

const authorById = async (obj, { id }) => {
  const a = await Author.query().findById(id)
  return a
}

const books = async ({ id }) => {
  const b = await Book.query().where({ authorId: id })

  return b
}

const publisher = async ({ publisherId }) => {
  const p = await Publisher.query().findById(publisherId)

  return p
}

const address = async ({ addressId }) => {
  const a = await Address.query().findById(addressId)

  return a
}

const resolver = {
  Query: {
    authorSearch,
    authorById,
    allAuthors,
  },
  Author: {
    books,
  },
  Book: {
    publisher,
  },
  Publisher: {
    address,
  },


}


module.exports = resolver
