import { chromium,Page,test } from "@playwright/test";

test(`opening url`,async()=>{
    const browser = await chromium.launch({headless:false,args:['--start-maximized']})
    const browserContext=await browser.newContext({viewport: null})
    const page1=await browserContext.newPage()

    await page1.goto("https://www.google.com/")
    const cURL=page1.url()
    console.log(`Launched the browser with url - ${cURL}`)
})