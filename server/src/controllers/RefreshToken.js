module.exports = function ({ refreshToken }) {
  return async function (httpRequest) {
    try {
      const { refreshToken: token } = httpRequest.body
      const refresh = await refreshToken({ refreshToken: token })
      return {
        statusCode: refresh.code || 500,
        body: refresh
      }
    } catch (error) {
      console.error(error)
      return {
        statusCode: 500,
        body: { error }
      }
    }
  }
}