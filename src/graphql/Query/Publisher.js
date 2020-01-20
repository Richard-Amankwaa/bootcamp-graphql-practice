const Book = require('../../models/Book')
const Author = require('../../models/Author')
const Publisher = require('../../models/Publisher')
const Address = require('../../models/Address')


const publisher = async (obj, { input }) => {
  const p = await Publisher.query().withGraphJoined('address').where('company', 'like', `%${input}%`)
    .orWhere('street', 'like', `%${input}%`)
    .orWhere('city', 'like', `%${input}%`)
    .orWhere('state', 'like', `%${input}%`)

  return p[0]
}

const publisherById = async (obj, { id }) => {
  const p = await Publisher.query().findById(id)

  return p
}

const publisherByTitle = async (obj, { title }) => {
  const pQuery = await Book.query().withGraphFetched('publisher').where('title', 'like', `${title}`)


  return pQuery.map(e => e.publisher)
}

const address = async ({ addressId }) => {
  const a = await Address.query().findById(addressId)

  return a
}

const books = async ({ id }) => {
  const b = await Book.query().where({ publisherId: id })

  return b
}

const author = async ({ authorId }) => {
  const a = await Author.query().findById(authorId)

  return a
}

const resolver = {
  Query: {
    publisher,
    publisherById,
    publisherByTitle,
  },
  Publisher: {
    books,
    address,
  },
  Book: {
    author,
  },

}


module.exports = resolver
