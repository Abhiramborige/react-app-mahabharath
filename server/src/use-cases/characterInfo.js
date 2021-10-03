module.exports = function ({ wikipedia }) {
  return async function ({ name }) {
    try {
      const characterInfo = await wikipedia.articleByTitle(name)

      if (!characterInfo) {
        throw { code: 500, message: "Failed to retrieve character info" }
      }
      return {
        success: true,
        code: 200,
        characterInfo,
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