import { test } from '@playwright/test'

test('Bài 1', async ({ page }) => {
    await test.step('Navigate to material playwright', async () => {
        await page.goto('https://material.playwrightvn.com/')
    });

    await test.step('Click vào bài 1: Register Page', async () => {
        await page.locator(`//a[@href='01-xpath-register-page.html']`).click();
    });

    await test.step('Fill information', async () => {
        await page.locator(`//input[@id='username']`).fill('Minh Ánh');
        await page.locator(`//input[@id='email']`).fill('minhhnguyen665@gmail.com');
        await page.locator(`//input[@id='female']`).setChecked(true);
        await page.locator(`//input[@id='reading']`).setChecked(true);
        await page.locator(`//select[@id='interests']`).selectOption({ value: 'art' });
        await page.locator(`//select[@id='country']`).selectOption({ value: 'canada' });
        await page.locator(`//input[@id='dob']`).fill('2005-04-28');
        await page.locator(`//input[@id='profile']`).setInputFiles('data-test/tải xuống (1).png');
        await page.locator(`//textarea[@id='bio']`).fill('Tôi là Minh Ánh, đến từ AOF');
        await page.locator(`//input[@id='newsletter']`).setChecked(true);
        await page.locator(`label[for='toggleOption']`).click();
        await page.locator(`//button[text()='Register']`).click();
    })
})




