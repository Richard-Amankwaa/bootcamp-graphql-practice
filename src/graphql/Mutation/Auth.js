const Author = require('../../models/Author')
const { hashPassword, comparePassword, createToken } = require('../../lib/auth')


const login = async (obj, { email, password }) => {
  const author = await Author.query().findOne({
    email,
  })

  if (!author) {
    throw new Error('eww!?')
  }

  const isValidPassword = await comparePassword(password, author.password)

  if (!isValidPassword) {
    throw new Error('Whu!?')
  }

  const payload = {
    id: author.id,
  }

  const token = createToken(payload)

  return { token, author }
}


const register = async (obj, { input: { email, password } }) => {
  const emailExist = await Author.query().findOne({ email })
  if (emailExist) {
    throw new Error('Email is already in use')
  }

  const passwordHash = await hashPassword(password)
  const author = await Author.query().insertAndFetch({
    email,
    password: passwordHash,
  })

  const payload = {
    id: author.id,
  }
  const token = createToken(payload)

  return { author, token }
}


const resolver = {
  Mutation: {
    login,
    register,
  },
}

module.exports = resolver
