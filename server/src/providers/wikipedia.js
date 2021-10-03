module.exports = function ({ http }) {
  const baseUrl = "https://en.wikipedia.org/w/api.php"
  const defaultParams = {
    "action": "query",
    "formatversion": "2",
    "prop": "description|pageimages|pageterms|extracts",
    "piprop": "original",
    "explaintext": "1",
    "exsectionformat": "plain",
    "exsentences": "10",
    "format": "json"
  }

  return Object.freeze({
    articleByTitle
  })

  async function articleByTitle(title) {
    const { data } = await http({
      url: baseUrl,
      params: {
        ...defaultParams,
        titles: encode(title)
      }
    })
    const [firstPage] = data.query.pages
    const { terms } = firstPage

    const parsedData = {
      name: firstPage.title,
      info: firstPage.extract ? firstPage.extract : null,
      img: firstPage.original ? firstPage.original.source : null,
      desc: `${terms ? terms.description[0] + ". " : ""}${firstPage.description}`,
      othernames: terms && terms.alias ? terms.alias : null,
    }
    return parsedData
  }

  function encode(name) {
    return encodeURIComponent(name);
  }
}