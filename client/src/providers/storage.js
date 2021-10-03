export default function () {
  return Object.freeze({
    setUser,
    setRefreshToken,
    setToken,
    getRefreshToken,
    getToken,
  })

  function setUser(user) {
    localStorage.setItem('user', JSON.stringify(user))
  }
  function setRefreshToken(refreshToken) {
    localStorage.setItem('refreshToken', refreshToken)
  }
  function setToken(token) {
    localStorage.setItem('token', token)
  }
  function getRefreshToken() {
    return localStorage.getItem('refreshToken')
  }
  function getToken() {
    return localStorage.getItem('token')
  }
}
