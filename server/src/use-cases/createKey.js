module.exports = function ({ Key, keyRepository }) {
  return async function ({ userId, name }) {
    try {
      const key = Key.make({ userId, name })

      const createdKey = await keyRepository.insert({
        userId: key.userId(),
        key: key.key(),
        name: key.name(),
        opaque: false
      })
      if (!createdKey) {
        throw { code: 500, message: "Failed to create key" }
      }
      return {
        success: true,
        code: 200,
        createdKey,
      }
    } catch (error) {
      console.error(error)
      return {
        success: false,
        code: error.code ? error.code : 500,
        message: error.message || error
      }
    }
  }
}