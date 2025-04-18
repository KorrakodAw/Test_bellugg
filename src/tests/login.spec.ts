import { test, expect } from '@playwright/test';
import { LoginPage } from '../pages/login.page';

test.describe('Login Tests', () => {
  test('Should show an error message if log in without a username', async ({ page }) => {
    const loginPage = new LoginPage(page);
    await loginPage.login();
    // await loginPage.login('', 'twist4pass');
    await loginPage.login();
    await expect(loginPage.errorMessage).toBeVisible();
  });

  test('Should login successfully with valid credentials', async ({ page }) => {
    const loginPage = new LoginPage(page);
    await loginPage.login();
    await expect(page).toHaveURL('https://bellugg-cmsapp.stdtwist.com/new-orders/delivery'); // ปรับตาม URL หลัง login
  });
});
