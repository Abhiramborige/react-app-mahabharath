module.exports = function ({ authorizeUser }) {
  return async function (httpRequest) {
    try {
      const { email, password } = httpRequest.body
      const authorized = await authorizeUser({ email, password })
      return {
        statusCode: authorized.code || 500,
        body: authorized
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