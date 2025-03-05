import { test } from '@playwright/test'

test('Test case name', async ({ page }) => {
    //code logic

    await test.step('Navigate to material Playwright', async () => {
        await page.goto('https://material.playwrightvn.com/01-xpath-register-page.html')
    });

    await test.step('', async () => {

    })
})