const Book = require('../../models/Book')
const Author = require('../../models/Author')
const Publisher = require('../../models/Publisher')
const Address = require('../../models/Address')


const bookByTitle = async (obj, { title }) => {
  const b = await Book.query().where('title', 'like', `%${title}%`)

  return b
}

const bookById = async (obj, { id }) => {
  const b = await Book.query().bookById(id)

  return b
}

const author = async ({ authorId }) => {
  const a = await Author.query().findById(authorId)

  return a
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
    bookByTitle,
    bookById,
  },
  Book: {
    author,
    publisher,
  },
  Publisher: {
    address,
  },


}

module.exports = resolver
