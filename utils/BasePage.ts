import { Page, Locator, expect } from '@playwright/test';

export class BasePage {
    page: Page;

    constructor(page: Page) {
        this.page = page;
    }

    async clickElement(locator: Locator) {
        await locator.click();
    }

    async enterText(locator: Locator, text: string) {
        await locator.fill(text);
    }

    async getText(locator: Locator) {
        return await locator.textContent();
    }

    async waitForElement(locator: Locator) {
        await locator.waitFor({ state: 'visible' });
    }

    async verifyTitle(title: string) {
        await expect(this.page).toHaveTitle(title);
    }
}