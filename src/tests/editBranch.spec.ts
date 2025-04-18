import {test, expect} from "@playwright/test"
import { LoginPage } from "../pages/login.page"
import { GotoBranch } from "../pages/Branch/gotoBranch.page"
import { EditBranch } from "../pages/Branch/editBranch.page"

test.describe('Edit Branch test', () => {
    test('get success message when edit',async ({ page }) => {
        const loginTo = new LoginPage(page)
        const goto = new GotoBranch(page)
        const editBranch = new EditBranch(page)

        await loginTo.login()
        await goto.gotoBranches()
        await editBranch.gotoEdit()
        
    })
})