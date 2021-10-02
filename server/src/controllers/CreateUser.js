module.exports = function ({ createUser }) {
  return async function (httpRequest) {
    try {
      const { email, password } = httpRequest.body
      const created = await createUser({ email, password })
      return {
        statusCode: created.code || 500,
        body: created
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