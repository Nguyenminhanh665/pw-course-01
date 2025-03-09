import { test } from '@playwright/test'


test('Exercise 2: Product PagePage', async ({ page }) => {
    await test.step('Navigate to material playwright', async () => {
        await page.goto('https://material.playwrightvn.com/')
    })

    await test.step('Click vài bài 2: Product page', async () => {
        await page.locator(`//a[@href='02-xpath-product-page.html']`).click()
    })
        // await test.step('Add product', async () => {
        // await page.locator(`//button[@data-product-id='1']`).dblclick();
        // await page.locator(`//button[@data-product-id='2']`).click({ clickCount: 3 });
        // await page.locator(`//button[@data-product-id='3']`).click();
    await test.step("Add Product 1: 2 items", async () => {
        await page.locator(`//button[@data-product-id="1"]`).dblclick();
    })

    await test.step("Add Product 2: 3 items", async () => {
        await page.locator(`//button[@data-product-id="2"]`).click({ clickCount: 3 });
    })

    await test.step("Add Product 3: 1 items", async () => {
        await page.locator(`//button[@data-product-id="3"]`).click();
    })

})



