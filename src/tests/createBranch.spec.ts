import { test, expect } from '@playwright/test';
import { CreateBranch } from '../pages/Branch/createBranch.page';
import {generateRandomCode,generateRandomName,generateRandomPhone} from '../pages/utils';
import { LoginPage } from '../pages/login.page';
import { GotoBranch } from '../pages/Branch/gotoBranch.page';

const randomCode = generateRandomCode();
const randomName = generateRandomName();
const randomPhone = generateRandomPhone();
const randomCountry = Math.floor(Math.random() * 5);
const randomBranch = Math.floor(Math.random() * 3)
const randomStatus = Math.floor(Math.random() * 2)

test.describe('Create Branch test', () => {
  test('get success message when create', async ({ page }) => {
    const create = new CreateBranch(page);
    const loginTo = new LoginPage(page)
    const goto = new GotoBranch(page)

    await loginTo.login();
    await goto.gotoBranches()
    await create.gotoCreate();
    await create.selectRandomOrAllHubs()
    await create.selectStatus(randomStatus); // 0:active 1:inactive
    await create.filldata(randomCode, randomName, randomPhone);
    await create.selectCountry(randomCountry); // 0:TH 1:JP 2:KR 3:TW 4:HK
    await create.selectBranch(randomBranch); // 0:ArPt 1:Brch 2:Lckt
    await create.submitData()
    await create.isSuccessCreateMessageVisible()
  });

  
});
