import test, { expect } from "@playwright/test";
import { HomePage } from "../pages/HomePage";
import { LoginPage } from "../pages/LoginPage";
import { CommonDialog } from "../pages/dialog/CommonDialog";

test('Verify Valid Login Successfully', async ({ page }) => {

    const homePage = new HomePage(page);
    const loginPage = new LoginPage(page);
    const commonDlg = new CommonDialog(page);

    //Step 1: Go to https://demo1.cybersoft.edu.vn/
    await homePage.goTo("https://demo1.cybersoft.edu.vn/");

    //Step 2: Click 'Đăng Nhap' link on the top right
    await homePage.getTopBarNavigation().navigateLoginPage();

    //Step 3: Enter account
    //Step 4: Enter password
    //Step 5: Click 'Dang Nhap' button
    await loginPage.login('85b91d34-29a4-4905-9e5b-9bed31372d6c', 'Test123456@');

    //Step 6: Verify user login successfully
    //VP1: Check 'Dang Nhap Thanh Cong' message display
    let loginMsg = await commonDlg.getTextMessage();
    expect(loginMsg).toEqual("Đăng nhập thành công");
   
    //VP2: Check 'Dang xuat' link display
    let isDisplay = await homePage.getTopBarNavigation().isLogoutLinkDisplayed();
    expect(isDisplay).toBeTruthy();

    //VP3: Check user profile display on the top right
    let name = await homePage.getTopBarNavigation().getProfileName();
    expect(name).toEqual("John Johnson");

})
