const mongoose = require("mongoose")

const Key = require("../schemas/KeySchema")
const User = require("../schemas/UserSchema")

const buildKeyRepository = require("./Key")
const buildUserRepository = require("./User")

const user = process.env.DB_USER
const pass = process.env.DB_USER_PWD
const host = process.env.DB_HOST
const connectionUrl = process.env.DB_URL

console.log(user, pass, host, connectionUrl)
const url = connectionUrl ? connectionUrl : `mongodb://${host}`

async function connectDb() {
  try {
    await mongoose.connect(url, {
      user: connectionUrl ? undefined : user,
      pass: connectionUrl ? undefined : pass,
      useNewUrlParser: true,
      useUnifiedTopology: true,
      retryWrites: true,
      w: "majority",
    })
    console.info("Connected to db")
  } catch (error) {
    console.error(error)
  }
}

const userRepository = buildUserRepository({ User })
const keyRepository = buildKeyRepository({ Key })

module.exports = {
  connectDb,
  userRepository,
  keyRepository,
}