


import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://cumberland.netlify.app/training');
  const delay = 100; // delay in milliseconds

  await page.getByRole('textbox', { name: 'First Name *' }).click();
  await page.getByRole('textbox', { name: 'First Name *' }).type('Mohi', { delay });

  await page.getByRole('textbox', { name: 'Last Name *' }).click();
  await page.getByRole('textbox', { name: 'Last Name *' }).type('Uddin', { delay });

  await page.getByRole('textbox', { name: 'Email *' }).click();
  await page.getByRole('textbox', { name: 'Email *' }).type('test@gmail.com', { delay });

  await page.getByRole('textbox', { name: 'Phone *' }).click();
  await page.getByRole('textbox', { name: 'Phone *' }).type('1d', { delay });
  await page.getByRole('textbox', { name: 'Phone *' }).fill(''); // clear invalid input
  await page.getByRole('textbox', { name: 'Phone *' }).type('1(333)433-4333', { delay });

  await page.getByRole('textbox', { name: 'Date of Birth *' }).click();
  await page.getByRole('textbox', { name: 'Date of Birth *' }).type('03/12/2012', { delay });

  await page.getByRole('textbox', { name: 'Address 1' }).click();
  await page.getByRole('textbox', { name: 'Address 1' }).type('123 Main st', { delay });

  await page.getByRole('textbox', { name: 'Address 2' }).click();
  await page.getByRole('textbox', { name: 'Address 2' }).type('Ilv 4B', { delay });

  await page.getByRole('textbox', { name: 'City' }).click();
  await page.getByRole('textbox', { name: 'City' }).type('Los Angeles', { delay });

  await page.getByRole('textbox', { name: 'State' }).click();
  await page.getByRole('textbox', { name: 'State' }).type('IL', { delay });

  await page.getByRole('textbox', { name: 'Zip' }).click();
  await page.getByRole('textbox', { name: 'Zip' }).type('6293', { delay });

  await page.getByText('Core: 6/24/2025 & 6/25/2025,').click();
  await page.getByRole('group').locator('div').filter({ hasText: 'Core: 6/24/2025 & 6/25/2025,' }).getByRole('checkbox').check();

  await page.getByLabel('I am 18 years of age or older').locator('div').filter({ hasText: 'Yes' }).getByRole('radio').check();
  await page.getByLabel('I am aware that I will need a').locator('div').filter({ hasText: 'Yes' }).getByRole('radio').check();

  await page.getByRole('button', { name: 'Submit Registration' }).click();

  await page.getByLabel('I am 18 years of age or older').locator('div').filter({ hasText: 'No' }).click();
  await page.getByRole('textbox', { name: 'Date of Birth *' }).click();
  await page.getByRole('textbox', { name: 'Date of Birth *' }).fill('');
  await page.getByRole('textbox', { name: 'Date of Birth *' }).type('03/12/2001', { delay });

  await page.getByRole('button', { name: 'Submit Registration' }).click();

  await page.getByRole('textbox', { name: 'Name on Card *' }).type('john Smith', { delay });

  await page.getByRole('textbox', { name: 'Card Number *' }).click();
  await page.getByRole('textbox', { name: 'Card Number *' }).type('4242 4242 4242 4242', { delay });

  await page.getByRole('textbox', { name: 'Expiration Date *' }).click();
  await page.getByRole('textbox', { name: 'Expiration Date *' }).type('01/27', { delay });

  await page.getByRole('textbox', { name: 'CVV (3 digits) *' }).click();
  await page.getByRole('textbox', { name: 'CVV (3 digits) *' }).type('123', { delay });

  await page.getByRole('textbox', { name: 'Billing Zip Code *' }).click();
  await page.getByRole('textbox', { name: 'Billing Zip Code *' }).type('1234', { delay });

  await page.getByRole('button', { name: 'Pay $' }).click();

  await page.getByRole('textbox', { name: 'Billing Zip Code *' }).click();
  await page.getByRole('textbox', { name: 'Billing Zip Code *' }).fill('');
  await page.getByRole('textbox', { name: 'Billing Zip Code *' }).type('12343', { delay });

  await page.getByRole('button', { name: 'Pay $' }).click();
  await page.getByRole('button', { name: 'Back to Registration' }).click();
});
