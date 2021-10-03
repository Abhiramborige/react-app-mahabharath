module.exports = function ({ keyRepository }) {
  return async function ({ userId, key }) {
    try {
      const deletedkey = await keyRepository.deleteByKey({
        userId,
        key,
      })
      if (!deletedkey) {
        throw { code: 400, message: "Failed to delete key" }
      }
      return {
        success: true,
        code: 200,
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