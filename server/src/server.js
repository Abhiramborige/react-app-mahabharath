const app = require("./app")
const { connectDb } = require("./repositories/index")
require("./providers/index")

const port = process.env.PORT || 8000

connectDb().then(() => {
  app.listen(port, () => {
    console.info("Server is listening on port ", port)
  })
})