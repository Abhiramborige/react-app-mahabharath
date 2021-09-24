const express = require("express");
const app = express();
const { scrape_api } = require("./wiki_api");
// const { scrape_Product } = require("./scraper");

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

/* app.get("/:name", async (req, res) => {
  let name = encode(req.params.name);
  const result = await scrape_Product(
    `https://en.m.wikipedia.org/wiki/${name}`
  );
  res.header("Content-Type", "application/json");
  res.send(JSON.stringify(result, null, 4));
}); */

//

app.get("/get/:name", async (req, res) => {
  let name = encode(req.params.name);
  const online_info = await scrape_api(
    `https://en.wikipedia.org/w/api.php?action=query&formatversion=2&prop=description|pageimages|pageterms|extracts&piprop=original&titles=${name}&explaintext=1&exsectionformat=plain&exsentences=10&format=json`
  );

  // https://stackoverflow.com/questions/32679505/node-and-express-send-json-formatted
  res.header("Content-Type", "application/json");
  res.send(
    JSON.stringify(
      {
        name: online_info.query.pages[0].title,
        // https://stackoverflow.com/questions/39132802/how-to-check-key-exist-in-json-or-not?noredirect=1&lq=1
        // https://stackoverflow.com/questions/20804163/check-if-a-key-exists-inside-a-json-object
        info:
          "extract" in online_info.query.pages[0]
            ? online_info.query.pages[0].extract
            : null,
        img:
          "original" in online_info.query.pages[0]
            ? online_info.query.pages[0].original.source
            : null,
        desc:
          online_info.query.pages[0].terms.description[0] +
          ". " +
          online_info.query.pages[0].description,
        othernames: online_info.query.pages[0].terms.alias,
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
