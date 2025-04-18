import { Page, Locator,expect } from '@playwright/test';

export class LoginPage {
  readonly page: Page;
  readonly usernameInput: Locator;
  readonly passwordInput: Locator;
  readonly loginButton: Locator;
  readonly errorMessage: Locator;

  constructor(page: Page) {
    this.page = page;
    this.usernameInput = page.locator('input[type="email"]'); // เปลี่ยน selector ตามจริง
    this.passwordInput = page.locator('input[type="password"]');
    this.loginButton = page.locator('button[type="submit"]');
    this.errorMessage = page.getByText('Required'); // เปลี่ยนตาม UI

  }

  // async login(username: string, password: string) {
  async login() {
    await this.page.goto('https://bellugg-cmsapp.stdtwist.com/login');
    await this.usernameInput.waitFor({ state: 'visible' })
    await this.usernameInput.type('system.admin@studiotwist.co', { delay: getRandomDelay() });
    await this.passwordInput.type('twist4pass', { delay: getRandomDelay() });
    await this.loginButton.click();
  }

  async isErrorMessageVisible() {
    await expect(this.errorMessage).toBeVisible();
  }
}

function getRandomDelay(min: number = 5, max: number = 10): number {
  return Math.floor(Math.random() * (max - min + 1) + min)
}