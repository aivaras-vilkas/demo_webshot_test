import { test, expect } from '@playwright/test';
import { MainPage } from '../pages/MainPage';

test.beforeEach(async ({ page }) => {
  // await page.context().clearCookies();
  // await page.context().clearPermissions();
});

test('Test', async ({ page }) => {
  const main = new MainPage(page);
  await main.goToHomepage();
  await main.currencySelectField.waitFor();
  const defaultCurrency = await main.getSelectedCurrencyText();
  await main.selectCurrency('Euro');
  await main.currencySelectField.waitFor();
  const selectedCurrency = await main.getSelectedCurrencyText();
  expect(defaultCurrency).not.toBe(selectedCurrency);
  expect(selectedCurrency).toBe('Euro');
  console.log(`Default: ${defaultCurrency}\nSelected: ${selectedCurrency}`);
});
