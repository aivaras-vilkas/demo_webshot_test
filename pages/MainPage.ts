import { Page } from "@playwright/test";

export class MainPage {
  public currencySelectField = this.page.locator('#customerCurrency');

  constructor(private page: Page) {
    this.currencySelectField = this.page.locator('#customerCurrency');
  }

  async goToHomepage() {
    await this.page.goto('/');
  }

  async getSelectedCurrencyText() {
    return await this.currencySelectField.textContent();
  }

  async selectCurrency(currency: string) {
    await this.currencySelectField.selectOption(currency);
  }
}