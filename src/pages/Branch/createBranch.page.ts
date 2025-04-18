import { Page, Locator, expect } from '@playwright/test';
import { count } from 'console';

export class CreateBranch {
  readonly page: Page;
  readonly usernameInput: Locator;
  readonly passwordInput: Locator;
  readonly loginButton: Locator;
  readonly errorMessage: Locator;
  readonly createBranch: Locator;
  readonly status: Locator;
  readonly codeInput: Locator;
  readonly nameInput: Locator;
  readonly phoneInput: Locator;
  readonly BranchType: Locator
  readonly submitButton: Locator
  readonly statusSelect: Locator
  readonly CountrySelect: Locator


  constructor(page: Page) {
    this.page = page;
    this.usernameInput = page.locator('input[type="email"]'); // เปลี่ยน selector ตามจริง
    this.passwordInput = page.locator('input[type="password"]');
    this.loginButton = page.locator('button[type="submit"]');
    this.createBranch = page.locator('a[href="/branches/new"]')
    this.status = page.locator('button[role="combobox"]').nth(2)
    this.codeInput = page.locator('[name="code"]')
    this.nameInput = page.locator('[name="name"]')
    this.phoneInput = page.locator('[name="phone"]')
    this.BranchType = page.locator('button[role="combobox"]').nth(4)
    this.submitButton = page.locator('button[type="submit"]')
    this.CountrySelect = page.locator('button[role="combobox"]').nth(3)
  }


  async selectRandomOrAllHubs() {

    const checkboxes = [
      this.page.locator('#checkbox-isDeliveryHub'),
      this.page.locator('#checkbox-isStorageHub')
    ]

    const randomChoice = Math.random()

    if (randomChoice < 0.5) {

      const randomIndex = Math.floor(Math.random() * checkboxes.length)
      const checkbox = checkboxes[randomIndex];
      if (await checkbox.isVisible()) {
        await checkbox.click();
      } else {
        console.warn(`Checkbox at index ${randomIndex} is not visible.`);
      }

    } else {
      for (const checkbox of checkboxes) {
        if (await checkbox.isVisible()) {
          await checkbox.click();
        } else {
          console.warn(`A checkbox is not visible and was skipped.`);
        }

      }
    }
  }


  async isSuccessCreateMessageVisible() {
        const succesCreate = this.page.locator('li[role="status"]', { hasText: 'success created' });
        await expect(succesCreate).toBeVisible();
      }

  async gotoCreate() {
        await this.createBranch.waitFor({ state: 'visible' });
        await this.createBranch.click();
        await this.page.goto('https://bellugg-cmsapp.stdtwist.com/branches/new');


      }

  async selectCountry(country: number) {
        await this.CountrySelect.waitFor({ state: 'visible' });
        await this.CountrySelect.click();
        const dropdownCountryOption = this.page.locator('div[role="option"]').nth(country);
        await dropdownCountryOption.waitFor({ state: 'visible' });
        await dropdownCountryOption.click();

      }

  async selectBranch(branch: number) {
        await this.BranchType.waitFor({ state: 'visible' });
        await this.BranchType.click();
        const dropdownBranchOption = this.page.locator('div[role="option"]').nth(branch);
        await dropdownBranchOption.waitFor({ state: 'visible' });
        await dropdownBranchOption.click();

      }

  async selectStatus(status: number) {
        await this.status.waitFor({ state: 'visible' });
        await this.status.click();
        const dropdownStatusOption = this.page.locator('div[role="option"]').nth(status);
        await dropdownStatusOption.waitFor({ state: 'visible' });
        await dropdownStatusOption.click();
      }

  async typeSlowly(locator: Locator, text: string) {
        for (const char of text) {
          await locator.type(char, { delay: getRandomDelay() })
        }
      }

  async filldata(code: string, name: string, phone: string) {
        await this.codeInput.type(code, { delay: getRandomDelay() });
        await this.nameInput.type(name, { delay: getRandomDelay() });
        await this.phoneInput.type(phone, { delay: getRandomDelay() });
      }

  async submitData() {
        await this.submitButton.click()
      }
    }


    function getRandomDelay(min: number = 5, max: number = 10): number {
      return Math.floor(Math.random() * (max - min + 1) + min)
    }