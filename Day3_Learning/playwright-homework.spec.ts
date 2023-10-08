import { chromium, Page, test } from "@playwright/test";

test.only(`opening url`, async () => {
    // test.setTimeout(120000)
    // const browser = await chromium.launch({headless:false,args:['--start-maximized']})
    // const browserContext=await browser.newContext({viewport: null})
    const browser = await chromium.launch()
    const browserContext = await browser.newContext()
    const page1 = await browserContext.newPage()

    await page1.goto("https://www.google.com/")
    const cURL = page1.url()
    console.log(`Launched the browser with url - ${cURL}`)
    
    const cbContext = await browser.newContext()
    const page2 = await cbContext.newPage()

    await page2.goto("https://platform.testleaf.com/#/")
    const page2_url = page2.url()
    console.log(`Launched the browser with url - ${page2_url}`)
})