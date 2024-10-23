const puppeteer = require('puppeteer');

(async () => {
    //Launch the browser and open a new page
    const browser = await puppeteer.launch();
    const page = await browser.newPage();

    //Navigate the page to a URL
    await page.goto('https://www.google.com/imghp?gl=us&hl=en');

    //Set screen size
    await page.setViewport({width: 1080, height: 1024});

    //Typing and submitting the form
    await page.type('textarea[name="q"]','cat');
    await page.click('button[type="submit"]');

    //Console log the next page results
    await page.waitForNavigation();
    console.log('New page URL:', page.url());

    await browser.close();
})();