import { Page } from "@playwright/test";
import { BasePage } from "../../base/BasePage";

export class TopBarNavigation extends BasePage {

    readonly lnkLogin = this.page.locator("//a[h3[text()='Đăng Nhập']]");

    constructor(page: Page) {
        super(page);
    }
}