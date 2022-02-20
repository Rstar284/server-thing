import puppeteer from 'puppeteer';

let browser;

try {
    browser = await puppeteer.launch();
} catch (e) {
  console.log(e);
  process.exit(1);
}

export async function get({url}) {
    const site = url.searchParams.get("url")
    if(!site || !site.match(/\b\w+:\/\//)) {
    return {
        status: 418,
        body: "HTTP Protocol not specified"
    }
    }
    try {
        const page = await browser.newPage();
        await page.setViewport({
          width: 1920,
          height: 1080,
          deviceScaleFactor: 1,
        });
        await page.goto(site);
        const img = await page.screenshot({ type: 'webp', quality: 100, fullPage: true});
        await browser.close()
        return {
            status: 200,
            headers: {
                'Content-Type': 'image/webp'
            },
            body: img
        }
    } catch (err) {
        console.error(err)
        return {
            status: 500,
            body: err
        }
    }
}
