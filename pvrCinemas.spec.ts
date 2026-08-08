//Test PVR Cinemas use case
import {test,expect}  from "@playwright/test";

test("PVR Use case",async ({page}) => {
    //load the PVR webpage
await page.goto("https://www.pvrcinemas.com/")
await page.getByRole("button",{name:"Select Movie"}).click()
await page.getByRole("option").filter({ hasText: /^THE ODYSSEY$/ }).click();
//await page.waitForTimeout(20000)
//await page.getByRole("button",{name:"Select Date"}).filter({hasText:"Tomorrow, 8 Aug"}).click();

await page.getByText('Tomorrow, 9 Aug').click();
await page.getByText('INOX Srinagar Shivpora Srinagar').click();
await page.getByText('02:55 PM').click();
await page.getByRole("button",{name:"Submit"}).click();
await page.getByRole("button",{name:"Accept"}).click();
await page.waitForTimeout(1000)
await page.getByRole("button",{name:"Accept"}).click();
//await page.locator(`//input[@id="EX.EXECUTIVE|K:6"]`).click()
await page.getByText('7').nth(5).click();
await page.waitForTimeout(2000)
await page.getByText('8').nth(4).click();
await page.waitForTimeout(2000)
await page.getByRole("button",{name:"Proceed"}).click()
const gTotal=await page.locator('.all-grand').innerText()
await page.waitForTimeout(2000)
console.log(gTotal)
}

)