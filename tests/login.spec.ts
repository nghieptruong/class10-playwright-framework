import test, { expect } from "@playwright/test";

test('Verify Valid Login Successfully', async ({ page }) => {
    //Step 1: Go to https://demo1.cybersoft.edu.vn/
    await page.goto("https://demo1.cybersoft.edu.vn/");

    //Step 2: Click 'Đăng Nhap' link on the top right
    // let lnkLogin = page.getByRole('link', { name: 'Đăng Nhập' });
    let lnkLogin = page.locator("//a[h3[text()='Đăng Nhập']]");
    await lnkLogin.click({timeout: 20000});

    //Step 3: Enter account
    // let txtAccount = page.getByRole('textbox', { name: 'Tài Khoản' });
    let txtAccount = page.locator("#taiKhoan");
    await txtAccount.fill('85b91d34-29a4-4905-9e5b-9bed31372d6c');
    
    //Step 4: Enter password
    // let txtPassword = page.getByRole('textbox', { name: 'Mật Khẩu' });
    let txtPassword = page.locator("#matKhau");
    await txtPassword.fill('Test123456@');

    //Step 5: Click 'Dang Nhap' button
    // let btnLogin = page.getByRole('button', { name: 'Đăng nhập' });
    let btnLogin = page.locator("//button[span[text()='Đăng nhập']]");
    await btnLogin.click();

    //Step 6: Verify user login successfully
    //VP1: Check 'Dang Nhap Thanh Cong' message display
    let lblLoginMsgSuccessful = page.getByRole('heading', { name: 'Đăng nhập thành công' });
    await expect(lblLoginMsgSuccessful).toBeVisible();
   
    //VP2: Check 'Dang xuat' link display
    let lnkLogout = page.getByRole('link', { name: 'Đăng xuất' });
    await expect(lnkLogout).toBeVisible();

    //VP3: Check user profile display on the top right
    let lblProfileName = page.getByRole('link', { name: 'Avatar John Johnson' });
    await expect(lblProfileName).toBeVisible(); 
})
