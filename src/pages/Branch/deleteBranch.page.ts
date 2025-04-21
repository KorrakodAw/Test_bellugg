import { Page, Locator, expect } from "@playwright/test";

export class DeleteBranch {
    readonly page: Page;
    readonly BranchButton: Locator;

    constructor(page: Page) {
        this.page = page
    }
    async gotoDelete() {
        while (true) {
            // หา row ที่มีคำว่า "Test"
            const testRow = this.page.locator('tr', { hasText: 'Test' }).first();

            // ถ้าไม่มี row ที่ตรงเงื่อนไขแล้ว → จบ loop
            if (await testRow.count() === 0) break;

            // คลิกปุ่มลบ (ควรอยู่ใน <button> ที่มี svg)
            const deleteButton = testRow.locator('svg.text-red-500');
            await deleteButton.waitFor({ state: 'visible' });
            await deleteButton.click();

            // ยืนยันการลบ
            await this.page.getByText('Confirm').click();

            // ตรวจสอบว่าลบสำเร็จ
            const successDelete = this.page.locator('li[role="status"]', { hasText: 'success deleted' });
            await expect(successDelete).toBeVisible();

            // รอให้ toast หายไป (ป้องกันซ้อนกันหลายอัน)
            await successDelete.waitFor({ state: 'detached' });
        }


        
    }



}