
import { test, expect } from '@playwright/test';

test('Payment flow', async ({ page }) => {
  await page.goto('https://cumberland.netlify.app/');
  await page.waitForTimeout(500);

  await page.getByRole('combobox', { name: 'Location *' }).click();
  await page.waitForTimeout(300);
  await page.getByRole('option', { name: 'Danville Pediatrics' }).click();
  await page.waitForTimeout(400);

  await page.getByRole('button', { name: 'Next' }).click();
  await page.waitForTimeout(500);

  await page.getByRole('textbox', { name: 'First Name *' }).fill('Jhon');
  await page.waitForTimeout(300);

  await page.getByRole('textbox', { name: 'Last Name *' }).fill('doe1');
  await page.waitForTimeout(300);

  await page.getByRole('textbox', { name: 'Phone Number *' }).fill('(223) 232-3222');
  await page.waitForTimeout(300);

  await page.getByRole('textbox', { name: 'Address' }).fill('123 Main st');
  await page.waitForTimeout(300);

  await page.getByRole('textbox', { name: 'City' }).fill('Los Angeles');
  await page.waitForTimeout(300);

  await page.getByRole('textbox', { name: 'State' }).fill('KY');
  await page.waitForTimeout(300);

  await page.getByRole('textbox', { name: 'ZIP Code' }).fill('62033');
  await page.waitForTimeout(300);

  await page.getByRole('textbox', { name: 'Date of Birth *' }).fill('2001-03-13');
  await page.waitForTimeout(300);

  await page.getByRole('textbox', { name: 'Patient Account Number *' }).fill('123432');
  await page.waitForTimeout(300);

  await page.getByRole('textbox', { name: 'Amount *' }).fill('330.30');
  await page.waitForTimeout(400);

  await page.getByRole('button', { name: 'Next' }).click();
  await page.waitForTimeout(600);

  await page.getByRole('textbox', { name: 'Card Number *' }).fill('4242 4242 4242 4242');
  await page.waitForTimeout(300);

  await page.getByRole('textbox', { name: 'Expiry Date *' }).fill('02/28');
  await page.waitForTimeout(300);

  await page.getByRole('textbox', { name: 'CVV (3 digits) *' }).fill('223');
  await page.waitForTimeout(300);

  await page.getByRole('textbox', { name: 'Billing Address *' }).fill('123 Mai st');
  await page.waitForTimeout(300);

  await page.getByRole('textbox', { name: 'Billing ZIP Code *' }).fill('12345');
  await page.waitForTimeout(300);

  await page.getByRole('button', { name: 'Confirm Payment' }).click();
  await page.waitForTimeout(2000); // simulate payment processing

  await page.getByRole('button', { name: 'Back to Home' }).click();
});

