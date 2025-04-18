import { Page , Locator, expect } from '@playwright/test'
import { timeStamp } from 'console'
import { threadId } from 'worker_threads'

export class GotoBranch {
    readonly page: Page 
    readonly BranchButton: Locator

    constructor(page: Page){
        this.page = page
        this.BranchButton = page.locator('a[href="/branches"]')
    }

    async gotoBranches(){
        await this.BranchButton.waitFor({ state: 'visible' });
        await this.BranchButton.click();
        await this.page.goto('https://bellugg-cmsapp.stdtwist.com/branches');
    }
}