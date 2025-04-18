import { Locator, expect,Page } from "@playwright/test";

export class EditBranch {
    readonly page: Page
    readonly BranchButton: Locator

    constructor(page: Page){
        this.page = page

    }

    async gotoEdit(){

        const testRow = this.page.locator('tr').filter({
            hasText: 'Active',
            has: this.page.locator('td',{hasText: 'Test'})
        })

        const editButton = testRow.locator('svg.lucide.lucide-square-pen.w-4.h-4')
        await editButton.waitFor({state: 'visible'})
        await editButton.click()
        await expect(this.page).toHaveURL(new RegExp('https://bellugg-cmsapp.stdtwist.com/branches/\\d+/edit$'));
    }
}