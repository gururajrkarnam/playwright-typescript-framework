
import { BasePage } from '../utils/BasePage';

import { Locator, Page, expect } from '@playwright/test';

export class LandingPage {

    page: Page;

    requestLoanLink: Locator;

    constructor(page: Page) {

        this.page = page;

        this.requestLoanLink = page.getByRole('link', {
            name: 'Request Loan'
        });
    }

    async verifyLandingPageLoaded() {

        await expect(this.requestLoanLink).toBeVisible();
    }

    async clickApplyLoan() {

        await this.requestLoanLink.click();
    }
}