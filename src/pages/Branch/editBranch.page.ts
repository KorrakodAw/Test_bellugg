import { Locator, expect, Page } from "@playwright/test";

export class EditBranch {
    readonly page: Page
    readonly BranchButton: Locator

    constructor(page: Page) {
        this.page = page

    }

    async gotoEdit() {

        const testRow = this.page.locator('tr').filter({
            hasText: 'Active',
            has: this.page.locator('td', { hasText: 'Test' })
        })

        const editButton = testRow.locator('svg.lucide.lucide-square-pen.w-4.h-4')
        await editButton.waitFor({ state: 'visible' })
        await editButton.click()
        await expect(this.page).toHaveURL(new RegExp('https://bellugg-cmsapp.stdtwist.com/branches/\\d+/edit$'));
    }

    async changeName() {
        // const codeInput = this.page.locator('[name="code"]')
        // await codeInput.fill('');
        const nameInput = this.page.locator('[name="name"]')
        await nameInput.waitFor({state: 'visible'})
        await nameInput.fill('Test edited');
        const phoneInput = this.page.locator('[name="phone"]')
        await phoneInput.fill('');
        const submitdata = this.page.locator('button[type="submit"]')
        await submitdata.click();
        await expect(this.page).toHaveURL('https://bellugg-cmsapp.stdtwist.com/branches')
    }
}