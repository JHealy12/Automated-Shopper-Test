// Sign up generator 
const { test, expect } = require('@playwright/test');

test.beforeEach(async ({ page }) => {
  await page.goto('https://www.demoblaze.com/index.html');
});

