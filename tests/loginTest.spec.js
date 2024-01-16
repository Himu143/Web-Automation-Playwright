const { test, expect } = require('@playwright/test');

test('Login with valid credential', async ({ page }) => {
    await page.goto('https://trmis.inneed.cloud/login');
    await page.waitForTimeout(3000);
    await page.locator('[name="username"]').fill('superadmin');
    await page.locator('[name="password"]').fill('TrMISsuperAdmin@Ntp@');
    await page.locator('[type="submit"]').click();
    
    const locator = page.locator('.bx--header');
    await expect(locator).toContainText('TB Training Management Information System ');
   
  
  });
  test('Login with invalid credential', async ({ page }) => {
    await page.goto('https://trmis.inneed.cloud/login');
    await page.waitForTimeout(3000);
    await page.locator('[name="username"]').fill('admin');
    await page.locator('[name="password"]').fill('himdnjsdhf');
    await page.locator('[type="submit"]').click();
  
  });

  test('Login with valid username and invalid password', async ({ page }) => {
    await page.goto('https://trmis.inneed.cloud/login');
    await page.waitForTimeout(3000);
    await page.locator('[name="username"]').fill('superadmin');
    await page.locator('[name="password"]').fill('JoyBangla');
    await page.locator('[type="submit"]').click();
    await setTimeout(() => { }, 5000);
  
  });

  test('Login with invalid username and valid password', async ({ page }) => {
    await page.goto('https://trmis.inneed.cloud/login');
    await page.locator('[name="username"]').fill('JoyBanglaa');
    await page.locator('[name="password"]').fill('TrMISsuperAdmin@Ntp@');
    await page.locator('[type="submit"]').click();
   
  });