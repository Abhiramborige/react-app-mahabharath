const bcrypt = require('bcrypt')

module.exports = function () {
  const saltRounds = 10
  return Object.freeze({
    hash,
    verify,
  })
  async function hash(password) {
    return await bcrypt.hash(password, saltRounds)
  }

  async function verify(hash, password) {
    return await bcrypt.compare(password, hash)
  }
}
