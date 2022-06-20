//Contact Test 
const { test, expect } = require('@playwright/test');

test.beforeEach(async ({ page }) => {
  await page.goto('https://www.demoblaze.com/index.html');
});

const Email = 'RandomEmail@hotmail.co.uk';
const Name = 'Mr Anderson';
const Message = 'This is a Test Piece of text, Ignore at all costs.';

test('Contact' ,async ({ page }) => {

await page.locator('#navbarExample > ul > li:nth-child(2) > a').click();
await page.locator('#recipient-email').fill(Email);
await page.locator('#recipient-name').fill(Name);
await page.locator('#message-text').fill(Message);
await page.locator('#exampleModal > div > div > div.modal-footer > button.btn.btn-primary').click();
});
