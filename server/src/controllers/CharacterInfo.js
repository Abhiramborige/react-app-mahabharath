module.exports = function ({ characterInfo }) {
  return async function (httpRequest) {
    try {
      const { name } = httpRequest.query
      const info = await characterInfo({ name })
      return {
        statusCode: info.code || 500,
        body: info
      }
    } catch (error) {
      console.error(error)
      return {
        statusCode: 500,
        body: { error: error.message || error }
      }
    }
  }
}