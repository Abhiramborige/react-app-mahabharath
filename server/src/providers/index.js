const axios = require("axios")

const buildWikipediaProvider = require("./wikipedia")

const wikipediaProvider = buildWikipediaProvider({ http: axios })

module.exports = {
  wikipediaProvider
}