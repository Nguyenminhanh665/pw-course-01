import { test } from '@playwright/test'

test('Test case name', async ({ page }) => {
    //code logic

    await test.step('Navigate to material Playwright', async () => {
        await page.goto('https://material.playwrightvn.com')
    });

    await test.step('Click vào bài 1', async () => {
        await page.locator(`//a[@href='01-xpath-register-page.html']`).click();
    })

    await test.step('Fill information', async () => {
        await page.locator(`//input[@id='username']`).fill('Playwright vn');
        // await page.locator(`//input[@id='email']`).pressSequentially('k12@gmail.com', { delay: 1000 });

        let isChecked = await page.locator(`//input[@id='male']`).isChecked();
        console.log(isChecked); //falsefalse
        await page.locator(`//input[@id='male']`).check();
          
        isChecked = await page.locator(`//input[@id='male']`).isChecked();
        console.log(isChecked); //true

        await page.locator(`//input[@id='female']`).setChecked(true);
        isChecked = await page.locator(`//input[@id='female']`).isChecked();

        await page.locator(`//input[@id='reading']`).setChecked(true);
        isChecked = await page.locator(`//input[@id='reading']`).isChecked();

        await page.locator(`//select[@id='country']`).selectOption({ value: 'uk' });

        await page.locator(`//input[@id='profile']`).setInputFiles('data-test/tải xuống (1).png');
    })
})

test('Xử lý mouse event', async ({ page }) => {
    //code logic

    await test.step('Navigate to material Playwright', async () => {
        await page.goto('https://material.playwrightvn.com')
    });

    await test.step('Click vào bài 5 - mouse event', async () => {
        await page.locator(`//a[@href='018-mouse.html']`).click();
    })

    // await test.step('Click vào vùng check', async () => {
    //     await page.locator(`//div[@id='clickArea']`).dblclick();
    // })
    // await test.step('Click vào bài 5 - mouse event', async () => {
    //     await page.locator(`//div[@id='clickArea']`).click({ button: "right" });
    // })
    
    // await test.step('Click vào bài 5 - mouse event', async () => {
    //     await page.locator(`//div[@id='clickArea']`).click({ modifiers: ["Shift"] });
    // })
    
    await test.step('Click vào bài 5 - mouse event', async () => {
        await page.locator(`//div[@id='clickArea']`).click({ clickCount: 10 });
    })

})