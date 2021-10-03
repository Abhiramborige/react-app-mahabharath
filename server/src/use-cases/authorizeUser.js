module.exports = function ({ Key, keyRepository, userRepository, passwordHelper, jwtHelper }) {
  return async function ({ email, password }) {
    try {
      const user = await userRepository.findByEmail(email)
      if (!user) {
        throw { code: 400, message: "Invalid user" }
      }
      const verifyPassword = await passwordHelper.verify(user.password, password)
      if (!verifyPassword) {
        throw { code: 401, message: "Wrong password" }
      }

      const opaqueKey = Key.make({ userId: user._id })

      const createdOpaqueKey = await keyRepository.insert({
        userId: opaqueKey.userId(),
        key: opaqueKey.key(),
        name: opaqueKey.name(),
        opaque: true
      })
      if (!createdOpaqueKey) {
        throw { code: 500, message: "Failed to create opaque key" }
      }

      const token = jwtHelper.sign({ id: user._id, email })
      const refreshToken = createdOpaqueKey.key
      return {
        success: true,
        code: 200,
        token,
        refreshToken,
      }
    } catch (error) {
      console.error(error)
      return {
        success: false,
        code: error.code ? error.code : 500,
        message: error.message || error
      }
    }
  }
}