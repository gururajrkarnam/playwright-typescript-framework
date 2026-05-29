import { Page, expect } from '@playwright/test';
import { BasePage } from '../utils/BasePage';

export class LoginPage extends BasePage {

    usernameTextbox;
    passwordTextbox;
    loginButton;
    logoutLink;


    constructor(page: Page) {
        super(page);

        this.usernameTextbox = page.locator('[data-qa="login-email"]');
        this.passwordTextbox = page.locator('[data-qa="login-password"]');
        this.loginButton = page.getByRole('button', { name: 'Login' });
        this.logoutLink = page.getByRole('link', { name: 'Logout' });

    }

    async login(username: string, password: string) {

        await this.usernameTextbox.clear();

        await this.usernameTextbox.fill(username);
        await this.passwordTextbox.clear();


        await this.passwordTextbox.fill(password);

        await this.loginButton.click();
    }

    async verifyLogin() {

        await expect(
            await expect(this.logoutLink).toBeVisible());
    }
};