//adding Phone to Cart test
const { test, expect } = require('@playwright/test');

test.beforeEach(async ({ page }) => {
  await page.goto('https://www.demoblaze.com/index.html');
});


const Name = 'Vlad the Impaler';
const Country = 'Transylvania';
const City = 'Cluj-Napoca';
const Card = '1234 5678 9101 1121';
const Month = 'November';
const Year = '1486';

test('Add Phone to Cart' ,async ({ page }) => {

await page.locator('#tbodyid > div:nth-child(4) > div > a').click();
await page.goto('https://www.demoblaze.com/prod.html?idp_=4');
await page.locator('#tbodyid > div.row > div > a').click();
await page.locator('#cartur').click();
await page.goto('https://www.demoblaze.com/cart.html');
await page.locator('#page-wrapper > div > div.col-lg-1 > button').click()
await page.locator('#name').fill(Name);
await page.locator('#country').fill(Country);
await page.locator('#city').fill(City);
await page.locator('#card').fill(Card);
await page.locator('#month').fill(Month);
await page.locator('#year').fill(Year);
await page.locator('#orderModal > div > div > div.modal-footer > button.btn.btn-primary').click();
});