import { test } from '@playwright/test'

test('Bài 2', async ({ page }) => {
    await test.step('Navigate to material playwright', async () => {
        await page.goto('https://material.playwrightvn.com/')
    });
    await test.step('Click vài bài 2: Product page', async () => {
        await page.locator(`//a[@href='02-xpath-product-page.html']`).click()
    });

    await test.step('Add product', async () => {
        await page.locator(`//button[@data-product-id='1']`).dblclick();
        await page.locator(`//button[@data-product-id='2']`).click({ clickCount: 3 });
        await page.locator(`//button[@data-product-id='3']`).click();
    });

});



