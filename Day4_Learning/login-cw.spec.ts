import { test } from "@playwright/test";

test(`Login suacelabs website`, async ({ page }) => {

    const uName: string = "#user-name"
    const pwd: string = "#password"
    const loginBtn: string = "#login-button"

    await page.goto("https://www.saucedemo.com/v1/index.html", { waitUntil: "domcontentloaded" })
    await page.locator(uName).fill("standard_user")
    await page.locator(pwd).fill("secret_sauce")
    await page.locator(loginBtn).click()

    await page.waitForTimeout(10000)

})