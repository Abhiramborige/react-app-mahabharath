const buildUuidHelper = require("../utils/uuidHelper")
const buildPasswordHelper = require("../utils/passwordHelper")
const buildEmailHelper = require("../utils/emailHelper")
const { wikipediaProvider } = require("../providers/index")

const buildUser = require("./User")
const buildKey = require("./Key")

const uuidHelper = buildUuidHelper()
const passwordHelper = buildPasswordHelper()
const emailHelper = buildEmailHelper()

const User = buildUser({ uuidHelper, passwordHelper, emailHelper })
const Key = buildKey({ uuidHelper })

module.exports = {
  User,
  Key,
}
