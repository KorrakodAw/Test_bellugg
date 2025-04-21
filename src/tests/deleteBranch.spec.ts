import {test} from "@playwright/test"
import { DeleteBranch } from "../pages/Branch/deleteBranch.page";
import { LoginPage } from "../pages/login.page";
import { GotoBranch } from "../pages/Branch/gotoBranch.page";
import { EditBranch } from "../pages/Branch/editBranch.page";

test.describe('Delete Branch test', () => {
    test('get success message when delete',async({ page }) => {
        const deleteBranch = new DeleteBranch(page);
        
        const loginTo = new LoginPage(page)
        const goto = new GotoBranch(page)
        // await deleteBranch.goto();
        // await deleteBranch.login('system.admin@studiotwist.co', 'twist4pass');

        await loginTo.login()
        await goto.gotoBranches()
        await deleteBranch.gotoDelete()
        
      })
})