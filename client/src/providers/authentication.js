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
      setToken(token)
      setRefreshToken(returnedRefreshToken)
      setUser(createdUser)
      return true
    } catch (error) {
      const { status, data: { message } } = error.response
      if (status === 400) {
        alert(message)
      }
      return false
    }
  }
  async function logIn(email, password) {
    try {
      const url = `${baseURL}/user/authorize`
      const { data: { token, refreshToken } } = await http.post(url, { email, password })
      setToken(token)
      setRefreshToken(refreshToken)
      return true
    } catch (error) {
      const { status, data: { message } } = error.response
      if (status === 400) {
        alert(message)
      }
      return false
    }
  }
  async function refreshToken() {
    try {
      const url = `${baseURL}/user/refresh`
      const refreshToken = getRefreshToken()
      console.log(refreshToken)
      const { data: { token, refreshToken: returnedRefreshToken } } = await http.post(url, { refreshToken })
      console.log(token, returnedRefreshToken)
      setToken(token)
      setRefreshToken(returnedRefreshToken)
      return true
    } catch (error) {
      const { status, data: { message } } = error.response
      if (status === 400) {
        alert(message)
      }
      return false
    }
  }

  function setUser(user) {
    storageProvider.setItem('user', JSON.stringify(user))
  }
  function setRefreshToken(refreshToken) {
    storageProvider.setItem('refreshToken', refreshToken)
  }
  function setToken(token) {
    storageProvider.setItem('token', token)
  }
  function getRefreshToken() {
    return storageProvider.getItem('refreshToken')
  }
}
