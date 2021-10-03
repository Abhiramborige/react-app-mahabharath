const {
  authorizeUser,
  createUser,
  refreshToken,
  createKey,
  deleteKey,
  characterInfo,
} = require("../use-cases/index")

const buildAuthorizeUser = require("./AuthorizeUser")
const buildCreateUser = require("./CreateUser")
const buildRefreshToken = require("./RefreshToken")
const buildCreateKey = require("./CreateKey")
const buildDeleteKey = require("./DeleteKey")
const buildCharacterInfo = require("./CharacterInfo")

const AuthorizeUser = buildAuthorizeUser({ authorizeUser })
const CreateUser = buildCreateUser({ createUser })
const RefreshToken = buildRefreshToken({ refreshToken })
const CreateKey = buildCreateKey({ createKey })
const DeleteKey = buildDeleteKey({ deleteKey })
const CharacterInfo = buildCharacterInfo({ characterInfo })

module.exports = {
  AuthorizeUser,
  CreateUser,
  RefreshToken,
  CreateKey,
  DeleteKey,
  CharacterInfo,
}
