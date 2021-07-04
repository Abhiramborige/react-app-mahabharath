const puppeteer = require("puppeteer");

async function scrapeProduct(url) {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  await page.goto(url);

  // destructuring here. Pulling out first element of array into el.
  let src;
  let srcText;

  let [el] = await page.$x(
    '//*[@id="mw-content-text"]/div[1]/table[2]/tbody/tr[2]/td/a/img' ||
      '//*[@id="mw-content-text"]/div[1]/table[1]/tbody/tr[2]/td/a/img'
  );

  src = await el.getProperty("src");
  srcText = await src.jsonValue();

  const [el2] = await page.$x('//*[@id="mw-content-text"]/div[1]/p[2]');
  const txt = await el2.getProperty("textContent");
  const rawText = await txt.jsonValue();

  console.log({ srcText, rawText });

  browser.close();
  return { srcText, rawText };
}

// scrapeProduct("https://en.wikipedia.org/wiki/Bhima").then(console.log("Hello")).catch((err),()=>console.log("Error"))


