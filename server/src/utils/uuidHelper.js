const { v4: uuidv4, validate: uuidValidate } = require("uuid")

module.exports = function () {
  return Object.freeze({
    generate,
    validate
  })

  function generate() {
    return uuidv4()
  }
  function validate(uuid) {
    return uuidValidate(uuid)
  }
}
