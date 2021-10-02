const jwt = require("jsonwebtoken")
const secretToken = process.env.TOKEN_KEY
module.exports = function () {
  return Object.freeze({
    sign,
    decode,
  })
  function sign({ userId, email }) {
    return jwt.sign(
      { userId, email },
      secretToken,
      { expiresIn: "2h" }
    )
  }
  function decode(token) {
    return jwt.verify(token, secretToken)
  }
}