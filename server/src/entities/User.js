module.exports = function ({ emailHelper }) {
  return Object.freeze({
    make,
  })

  function make({ email, password }) {
    checkEmail(email)
    checkPassword(password)

    return Object.freeze({
      password: () => password,
      email: () => email,
    })

    function checkEmail(email) {
      if (!email) {
        throw { code: 400, message: "User must have valid email." }
      }
      if (typeof email !== "string") {
        throw { code: 400, message: "User email must be a string." }
      }
      if (!emailHelper.validate(email)) {
        throw { code: 400, message: "User email is not valid." }
      }
    }

    function checkPassword(password) {
      if (!password) {
        throw { code: 400, message: "User must have valid password." }
      }
      if (typeof password !== "string") {
        throw { code: 400, message: "User password must be a string." }
      }
      if (password.length < 8) {
        throw { code: 400, message: "User password must be at least 8 characters long." }
      }
    }
  }
}
