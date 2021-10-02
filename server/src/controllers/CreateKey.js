module.exports = function ({ createKey }) {
  return async function (httpRequest) {
    try {
      const { name } = httpRequest.body
      const { userId } = httpRequest.context
      const created = await createKey({ userId, name })
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