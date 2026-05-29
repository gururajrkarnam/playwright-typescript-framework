import { test } from '@playwright/test';
import { LoginPage } from '../../pages/LoginPage';
import loginData from '../../test-data/loginData.json';
import { BASE_URL } from '../../config/env';

let loginPage: LoginPage;

test.beforeEach(async ({ page }) => {

    await page.goto(BASE_URL);

    loginPage = new LoginPage(page);

    console.log('Application launched');

});

test.afterEach(async ({ page }) => {

    await page.close();

    console.log('Browser closed');

});

test('Login Test', async () => {

    await loginPage.login(
        loginData.username,
        loginData.password
    );

    await loginPage.verifyLogin();

});