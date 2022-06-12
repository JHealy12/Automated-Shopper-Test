// Sign up generator 
//using unique-username-generator
const { test, expect } = require('@playwright/test');


test.beforeEach(async ({ page }) => {
  await page.goto('https://www.demoblaze.com/index.html');
});

const newUsername = 'TheBoi97' ;
const newPassword = 'justwantedtobeRandom12345';

test('Sign up Test',async ({ page }) => {
//Runs before each test and signs in
await page.locator('#signin2').click(newUsername);
await page.locator('#sign-username').fill(newUsername);
await page.locator('#sign-password').fill(newPassword);
await page.locator('#signInModal > div > div > div.modal-footer > button.btn.btn-primary').click();
});