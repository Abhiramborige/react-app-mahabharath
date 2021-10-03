module.exports = function ({ User }) {
  return Object.freeze({
    insert,
    findByEmail,
    findById,
  })

  async function insert({ email, password }) {
    const insertedUser = await User.create({ email, password })
    return insertedUser
  }
  async function findByEmail(email) {
    const foundUser = await User.findOne({ email })
    return foundUser ? foundUser : null
  }
  async function findById(id) {
    const foundUser = await User.findOne({ _id: id })
    return foundUser ? foundUser : null
  }
}
