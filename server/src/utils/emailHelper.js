const EmailValidator = require('email-validator')

module.exports = function () {
  return Object.freeze({
    validate,
  })
  function validate(email) {
    return EmailValidator.validate(email)
  }
}
