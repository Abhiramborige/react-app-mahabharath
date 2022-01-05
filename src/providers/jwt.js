export default function jwt({ jwtDecode }) {
  return Object.freeze({
    decode,
    isExpired,
  })
  function decode(jwt) {
    return jwtDecode(jwt)
  }
  function isExpired(jwtEncoded) {
    const jwt = decode(jwtEncoded)
    const currentTime = Date.now() / 1000;
    if (jwt.exp < currentTime) {
      return true
    }
    return false
  }
}
