module.exports = function ({ Key, keyRepository, userRepository, jwtHelper }) {
  return async function ({ refreshToken }) {
    try {
      const opaqueKey = await keyRepository.findByKey(refreshToken)
      if (!opaqueKey) {
        throw { code: 400, message: "Invalid refresh token" }
      }
      const user = await userRepository.findById(opaqueKey.userId)
      if (!user) {
        throw { code: 400, message: "Failed to find user" }
      }
      const key = Key.make({ userId: user._id })
      const newOpaqueToken = await keyRepository.update({
        id: opaqueKey._id,
        userId: user._id,
        key: key.key(),
        name: key.name(),
        opaque: true,
      })
      if (!newOpaqueToken) {
        throw { code: 500, message: "Failed to update refresh token" }
      }
      const token = jwtHelper.sign({ userId: newOpaqueToken.userId, email: user.email })
      return {
        success: true,
        code: 200,
        token,
        refreshToken: newOpaqueToken.key
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