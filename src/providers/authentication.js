export default function ({ http, baseURL, storageProvider }) {
  return Object.freeze({
    signUp,
    logIn,
    refreshToken,
  })

  async function signUp(email, password) {
    try {
      const url = `${baseURL}/user/create`
      const { data: { token, returnedRefreshToken, createdUser } } = await http.post(url, { email, password })
      storageProvider.setToken(token)
      storageProvider.setRefreshToken(returnedRefreshToken)
      storageProvider.setUser(createdUser)
      return true
    } catch (error) {
      errorHandler(error)
      return false
    }
  }
  async function logIn(email, password) {
    try {
      const url = `${baseURL}/user/authorize`
      const { data: { token, refreshToken } } = await http.post(url, { email, password })
      storageProvider.setToken(token)
      storageProvider.setRefreshToken(refreshToken)
      return true
    } catch (error) {
      errorHandler(error)
      return false
    }
  }
  async function refreshToken() {
    try {
      const url = `${baseURL}/user/refresh`
      const refreshToken = storageProvider.getRefreshToken()
      console.log(refreshToken)
      const { data: { token, refreshToken: returnedRefreshToken } } = await http.post(url, { refreshToken })
      console.log(token, returnedRefreshToken)
      storageProvider.setToken(token)
      storageProvider.setRefreshToken(returnedRefreshToken)
      return true
    } catch (error) {
      errorHandler(error)
      return false
    }
  }
  function errorHandler(error) {
    let message = "Error"
    console.error(error)
    const status = error.response ? error.response.status : null
    if (status === 400) {
      message = error.response.data.message
    }
    alert(message)
  }
}
