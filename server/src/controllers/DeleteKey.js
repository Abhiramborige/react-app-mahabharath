module.exports = function ({ deleteKey }) {
  return async function (httpRequest) {
    try {
      const { userId } = httpRequest.context
      const { key } = httpRequest.body
      const created = await deleteKey({ userId, key })
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