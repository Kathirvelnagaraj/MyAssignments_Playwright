//Salesforce home assignment to task is to print the title and url of a web page using Playwright.

import test, {chromium} from "@playwright/test";

test("Salesfore Assignment",async () => {
    const browser = await chromium.launch({channel:"msedge",headless:false})
    const context = await browser.newContext()
    const page = await context.newPage()
    await page.goto("https://login.salesforce.com/")
    await page.waitForTimeout(10000)
    await page.locator(`#username`).fill("kathirvelnagaraj@gmail.com")
    await page.locator(`#password`).fill("Test@123")
    await page.locator(`#Login`).click()
    await page.waitForTimeout(10000)
    //get the current page title
    const pageTitle=await page.title()
    //Get the current page url
    const pageUrl= page.url()

    console.log("Page Title is:"+" "+pageTitle)
    console.log("Page URL is:"+" "+pageUrl)


}

)