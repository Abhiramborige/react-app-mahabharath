const express = require("express")
const cors = require("cors")

const buildJwtHelper = require("./utils/jwtHelper")
const callback = require("./utils/expressCallback")

const {
  AuthorizeUser,
  CreateUser,
  RefreshToken,
  CreateKey,
  DeleteKey,
  CharacterInfo,
} = require("./controllers/index")

const jwtHelper = buildJwtHelper()

const app = express()

app.use(cors())
app.use(express.json())

// healthcheck
app.get("/", (req, res) => res.status(200).send("Ok 🎃"))
// User routes
app.post("/user/create", callback(CreateUser))
app.post("/user/authorize", callback(AuthorizeUser))
app.post("/user/refresh", callback(RefreshToken))
// Can be used to create apiKeys in the future
app.post("/key/create", applyMiddleware(auth, callback(CreateKey)))
app.delete("/key/delete", applyMiddleware(auth, callback(DeleteKey)))
// Character routes
app.get("/character/info", callback(CharacterInfo))

function applyMiddleware(middleware, callback) {
  return (req, res, next) => {
    req = middleware(req, res, next)
    callback(req, res, next)
  }
}

function auth(req, res) {
  try {
    const jwt = req.headers.authorization.split("Bearer ")[1]
    const { userId, email } = jwtHelper.decode(jwt)
    req.context = {}
    req.context.userId = userId
    req.context.email = email
    return req
  } catch (error) {
    console.error(error)
    res.status(401).send({ success: false, message: "Invalid authorization" })
  }
}

module.exports = app
