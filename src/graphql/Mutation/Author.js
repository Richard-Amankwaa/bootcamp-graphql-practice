const Author = require('../../models/Author')
const { hashPassword } = require('../../lib/auth')

const addAuthor = async (obj, { input, password }) => {
  const passwordHash = await hashPassword(password)

  const newAuthor = Author.query().insert({
    ...input,
    password: passwordHash,
  }).returning('*')

  return newAuthor
}


const resolver = {
  Mutation: {
    addAuthor,
  },

}


module.exports = resolver
