import { test, expect } from "@playwright/test";



test(`Login salesforce application`, async ({ page }) => {

    const uName: string = "#username"
    const pwd: string = "#password"
    const loginBtn: string = "#Login"

    const appLauncherIcon: string = ".slds-icon-waffle"
    const viewAllLink: string = "button[class='slds-button'][type='button']"
    const searchBox: string = "input[class$='input'][role^='combo']"

    await page.goto('https://login.salesforce.com/')
    await page.locator(uName).fill('hari.radhakrishnan@qeagle.com')
    await page.locator(pwd).fill('Leaf$1234')
    await page.locator(loginBtn).click()

    await page.waitForTimeout(5000)

    // await expect(page).toHaveTitle('Home | Salesforce');
    console.log(await page.title() + '..............')
    await page.locator(appLauncherIcon).click()
    await page.locator(viewAllLink).click()
    await page.locator(searchBox).fill('Sales')

    await page.setDefaultTimeout(5000)

})


// test.only(`Create salesforce account`, async ({ page }) => {

//     const first_name: string = "input[name='first_name']"
//     const last_name: string = "input[name='last_name']"
//     const email: string = "input[name='email']"
//     const role: string = "select[name='job_role']"
//     const company: string = "input[name='company']"
//     const country: string = "select[name='country']"
//     const postal_code: string = "input[name='postal_code']"
//     const checkbox: string = "input[name='eula'][type='checkbox']"
//     const username: string = "input[name='username']"
//     const signUp: string = "dx-button[class='submit-button'] button[type='submit']"



//     await page.goto('https://developer.salesforce.com/signup')
//     await page.locator(first_name).fill('fName')
//     await page.locator(last_name).fill('last_name')
//     await page.locator(email).fill('fName@gmail.com')
//     await page.locator(company).fill('company')
//     await page.locator(postal_code).fill('522003')
//     await page.locator(country).selectOption('IN')
//     await page.locator(role).selectOption('Developer')
//     await page.locator(username).fill('fName@gmail.com')
//     await page.locator(checkbox).setChecked(true)
    
//     await page.waitForTimeout(3000)
    
//     await page.locator(signUp).click()
//     await page.waitForSelector('text=Almost there…',{timeout:60000})
//     // await page.getByAltText('Almost there…')
//     // await page.waitForTimeout(3000)
// })


