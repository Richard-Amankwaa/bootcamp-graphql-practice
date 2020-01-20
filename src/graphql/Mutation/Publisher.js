const Publisher = require('../../models/Publisher')

const addPublisher = async (obj, { input }) => {
  const newPublisher = Publisher.query().insert(input).returning('*')

  return newPublisher
}

const resolver = {
  Mutation: {
    addPublisher,
  },


}

module.exports = resolver
