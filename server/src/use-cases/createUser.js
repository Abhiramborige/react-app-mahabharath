module.exports = function ({ User, Key, userRepository, keyRepository, jwtHelper, passwordHelper }) {
  return async function ({ email, password }) {
    try {
      const foundUser = await userRepository.findByEmail(email)
      if (foundUser) {
        throw { code: 400, message: "Email already registered" }
      }

      const user = User.make({ email, password })
      const encryptedPassword = await passwordHelper.hash(user.password())
      const createdUser = await userRepository.insert({
        email: user.email(),
        password: encryptedPassword,
      })
      if (!createdUser) {
        throw { code: 500, message: "Failed to save user" }
      }

      const key = Key.make({ userId: createdUser._id })
      const createdOpaqueKey = await keyRepository.insert({
        userId: key.userId(),
        key: key.key(),
        name: key.name(),
        opaque: true
      })
      if (!createdOpaqueKey) {
        throw { code: 500, message: "Failed to create opaque key" }
      }

      const token = jwtHelper.sign({ userId: createdOpaqueKey.userId, email })
      const refreshToken = createdOpaqueKey.key

      return {
        success: true,
        code: 200,
        createdUser,
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