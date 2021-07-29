// not used currently, due to slow scraping

const puppeteer = require("puppeteer");

const scrape_Product = async (url) => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  await page.goto(url);

  const result = await page.evaluate(() => {
    let images_node = [...document.querySelectorAll("img")][1].src;
    let para_node = [...document.querySelectorAll("p")][1].textContent;
    return {
      image: images_node,
      para: para_node,
    };
  });

  await browser.close();
  return result;
};

module.exports={
    scrape_Product
}

// mobile version of web page for better scrape.
/* scrape_Product("https://en.m.wikipedia.org/wiki/Bhima")
  .then((response) => console.log(response))
  .catch((error)=>console.error(error))  */
 