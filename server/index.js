const express = require("express");
const app = express();
const { scrape_api } = require("./wiki_api");
const { scrape_Product } = require("./scraper");

app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Content-Type");
  next();
});

// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/encodeURIComponent
// https://www.urlencoder.io/ and https://www.urldecoder.io/
function encode(name) {
  return encodeURIComponent(name);
}

app.get("/:name", async (req, res) => {
  let name = encode(req.params.name);
  const result = await scrape_Product(
    `https://en.m.wikipedia.org/wiki/${name}`
  );
  res.header("Content-Type", "application/json");
  res.send(JSON.stringify(result, null, 4));
});

app.get("/get/:name", async (req, res) => {
  let name = encode(req.params.name);
  const info = await scrape_api(
    `https://en.wikipedia.org/w/api.php?action=query&prop=extracts&exsentences=10&titles=${name}&explaintext=1&formatversion=2&format=json`
  );
  const img = await scrape_api(
    `https://en.wikipedia.org/w/api.php?action=query&format=json&formatversion=2&prop=pageimages|pageterms&piprop=original&titles=${name}`
  );
  // https://stackoverflow.com/questions/32679505/node-and-express-send-json-formatted
  res.header("Content-Type", "application/json");
  res.send(
    JSON.stringify(
      {
        name: info.query.pages[0].title,
        info: info.query.pages[0].extract,
        img: img.query.pages[0].original.source,
        desc: img.query.pages[0].terms.description[0],
      },
      null,
      4
    )
  );
});
const port = process.env.PORT || "8000";
app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
