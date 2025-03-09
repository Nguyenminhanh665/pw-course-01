import { test } from '@playwright/test'

//Khai báo data trước để khi viết test case sẽ dễ gọi, tránh lặp data, code gọn hơn và dễ update về sau
const date = "2005-04-28";
const username = "Nguyễn Minh Ánh";
const email = "minhhnguyen665@gmail.com";
const description = "Tôi là Minh Ánh, đến từ AOF";
const country = "canada";

test('Bài 1: Register Page', async ({ page }) => {
    await test.step('Navigate to material playwright', async () => {
        await page.goto('https://material.playwrightvn.com/')
    });

    await test.step('Click on User Registration', async () => {
        await page.locator(`//a[@href='01-xpath-register-page.html']`).click();
    });

    await test.step('Fill information to all fields', async () => {
        await page.locator(`//input[@id='username']`).fill(username);
        await page.locator(`//input[@id='email']`).fill(email);
        await page.locator(`//input[@id='female']`).check();
        await page.locator(`//input[@id='reading']`).check();
        await page.locator(`//select[@id='interests']`).selectOption({ value: 'art' });
        await page.locator(`//select[@id='country']`).selectOption({ value: 'canada' });
        //await page.selectOption(`//select[@id='country']`, country); Cách 22
        await page.locator(`//input[@id='dob']`).fill(date);
        await page.locator(`//input[@id='profile']`).setInputFiles('data-test/tải xuống (1).png');
        await page.locator(`//textarea[@id='bio']`).fill(description);
        await page.locator(`//div[@class='tooltip']`).hover();
        await page.locator(`//input[@id='newsletter']`).check();
        debugger;
        //await page.click(`//label[@class = "switch"]`);
        await page.click(`//span[@class = "slider round"]`);
    })

    await test.step("Click Register button", async () => {
        await page.locator(`//button[normalize-space()='Register']`).click();
    })
})




