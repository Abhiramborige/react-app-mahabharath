module.exports = function ({ uuidHelper }) {
  return Object.freeze({
    make,
  })

  function make({ userId, name = "refresh" }) {
    checkName(name)
    const key = uuidHelper.generate()

    return Object.freeze({
      userId: () => userId,
      key: () => key,
      name: () => name,
    })

    function checkName(name) {
      if (!name) {
        throw { code: 400, message: "Key must have a valid name." }
      }
      if (typeof name !== "string") {
        throw { code: 400, message: "Key name must be a string." }
      }
      if (name.length < 2) {
        throw { code: 400, message: "Key name must be at least 2 characters long." }
      }
    }
  }
}
