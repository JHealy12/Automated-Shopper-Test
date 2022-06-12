//login test
const { test, expect } = require('@playwright/test');

test.beforeEach(async ({ page }) => {
  await page.goto('https://www.demoblaze.com/index.html');
});

 const Username = 'DangerZone654';
 const Password = 'ItsaTr4ap83';

test('log out test',async ({ page }) => {

await page.locator('#login2').click();
await page.locator('#loginusername').fill(Username);
await page.locator('#loginpassword').fill(Password);
await page.locator('#logInModal > div > div > div.modal-footer > button.btn.btn-primary').click();
await page.locator('#logout2').click();
});