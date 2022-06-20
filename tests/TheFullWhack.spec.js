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

const Username = 'DangerZone654';
const Password = 'ItsaTr4ap83';

test('Add Phone to Cart' ,async ({ page }) => {
// log in method
await page.locator('#login2').click();
await page.locator('#loginusername').fill(Username);
await page.locator('#loginpassword').fill(Password);
await page.locator('#logInModal > div > div > div.modal-footer > button.btn.btn-primary').click();

//Add Phone to cart
await page.locator('#tbodyid > div:nth-child(4) > div > a').click();
await page.goto('https://www.demoblaze.com/prod.html?idp_=4');
await page.locator('#tbodyid > div.row > div > a').click();

//return to home
await page.locator('#navbarExample > ul > li.nav-item.active > a').click();

// add laptop to cart
await page.locator('#tbodyid > div:nth-child(8) > div > a').click();
await page.goto('https://www.demoblaze.com/prod.html?idp_=8');
await page.locator('#tbodyid > div.row > div > a').click();

//return to home
await page.locator('#navbarExample > ul > li.nav-item.active > a').click();

//add Monitor to cart
await page.locator('#next2').click();
await page.locator('#tbodyid > div:nth-child(5) > div > a').click();
await page.goto('https://www.demoblaze.com/prod.html?idp_=14');
await page.locator('#tbodyid > div.row > div > a').click();

//go to cart and pay
await page.locator('#cartur').click();
await page.goto('https://www.demoblaze.com/cart.html');
await page.locator('#page-wrapper > div > div.col-lg-1 > button').click()

//fills in purchase info fields
await page.locator('#name').fill(Name);
await page.locator('#country').fill(Country);
await page.locator('#city').fill(City);
await page.locator('#card').fill(Card);
await page.locator('#month').fill(Month);
await page.locator('#year').fill(Year);
//purchase
await page.locator('#orderModal > div > div > div.modal-footer > button.btn.btn-primary').click();
//selects okay from confirmation of purchase modal
await page.locator('body > div.sweet-alert.showSweetAlert.visible > div.sa-button-container > div > button').click();

//log out method
await page.goto('https://www.demoblaze.com/index.html');
await page.locator('#logout2').click();
});