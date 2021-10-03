const buildPasswordHelper = require("../utils/passwordHelper")
const buildJwtHelper = require("../utils/jwtHelper")

const { userRepository, keyRepository } = require("../repositories/index")
const { User, Key } = require("../entities/index")
const { wikipediaProvider } = require("../providers/index")

const buildCreateUser = require("./createUser")
const buildAuthorizeUser = require("./authorizeUser")
const buildRefreshToken = require("./refreshToken")
const buildCreateKey = require("./createKey")
const buildDeleteKey = require("./deleteKey")
const buildCharacterInfo = require("./characterInfo")

const passwordHelper = buildPasswordHelper()
const jwtHelper = buildJwtHelper()

const createUser = buildCreateUser({ User, Key, userRepository, keyRepository, jwtHelper, passwordHelper })
const authorizeUser = buildAuthorizeUser({ Key, keyRepository, userRepository, passwordHelper, jwtHelper })
const refreshToken = buildRefreshToken({ Key, keyRepository, userRepository, jwtHelper })
const createKey = buildCreateKey({ Key, keyRepository })
const deleteKey = buildDeleteKey({ keyRepository })
const characterInfo = buildCharacterInfo({ wikipedia: wikipediaProvider })

module.exports = {
  createUser,
  authorizeUser,
  refreshToken,
  createKey,
  deleteKey,
  characterInfo,
}
