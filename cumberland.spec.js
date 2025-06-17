import { test, expect } from '@playwright/test';

test('Location and Payment flow', async ({ page }) => {
  await page.goto('https://cumberland.netlify.app/');
  const delay = 100;
  
  // Select location
  await page.getByRole('combobox', { name: 'Location *' }).click();
  await page.getByRole('option', { name: 'Danville Pediatrics' }).click();
  await page.getByRole('button', { name: 'Next' }).click();
  
  // Fill patient information
  await page.getByRole('textbox', { name: 'First Name *' }).type('Jhon', { delay });
  await page.getByRole('textbox', { name: 'Last Name *' }).type('doe1', { delay });
  await page.getByRole('textbox', { name: 'Phone Number *' }).type('(223) 232-3222', { delay });
  await page.getByRole('textbox', { name: 'Address' }).type('123 Main st', { delay });
  await page.getByRole('textbox', { name: 'City' }).type('Los Angeles', { delay });
  await page.getByRole('textbox', { name: 'State' }).type('KY', { delay });
  await page.getByRole('textbox', { name: 'ZIP Code' }).type('62033', { delay });
  await page.getByRole('textbox', { name: 'Date of Birth *' }).type('09-09-2001', { delay });
  await page.getByRole('textbox', { name: 'Patient Account Number *' }).type('123432', { delay });
  await page.getByRole('textbox', { name: 'Amount *' }).type('330.30', { delay });
  
  await page.getByRole('button', { name: 'Next' }).click();
  
  // Fill payment information
  await page.getByRole('textbox', { name: 'Card Number *' }).type('4242 4242 4242 4242', { delay });
  await page.getByRole('textbox', { name: 'Expiry Date *' }).type('02/28', { delay });
  await page.getByRole('textbox', { name: 'CVV (3 digits) *' }).type('223', { delay });
  await page.getByRole('textbox', { name: 'Billing Address *' }).type('123 Mai st', { delay });
  await page.getByRole('textbox', { name: 'Billing ZIP Code *' }).type('12345', { delay });
  
  // Process payment
  await page.getByRole('button', { name: 'Confirm Payment' }).click();
  await page.waitForTimeout(2000); // Wait for payment processing
  
  // Return to home
  await page.getByRole('button', { name: 'Back to Home' }).click();
});

test('Training registration form', async ({ page }) => {
  await page.goto('https://cumberland.netlify.app/training');
  const delay = 100;
  
  // Fill personal information
  await page.getByRole('textbox', { name: 'First Name *' }).type('Mohi', { delay });
  await page.getByRole('textbox', { name: 'Last Name *' }).type('Uddin', { delay });
  await page.getByRole('textbox', { name: 'Email *' }).type('test@gmail.com', { delay });
  await page.getByRole('textbox', { name: 'Phone *' }).type('1(333)433-4333', { delay });
  await page.getByRole('textbox', { name: 'Date of Birth *' }).type('03/12/2001', { delay });
  
  // Fill address information
  await page.getByRole('textbox', { name: 'Address 1' }).type('123 Main st', { delay });
  await page.getByRole('textbox', { name: 'Address 2' }).type('Ilv 4B', { delay });
  await page.getByRole('textbox', { name: 'City' }).type('Los Angeles', { delay });
  await page.getByRole('textbox', { name: 'State' }).type('IL', { delay });
  await page.getByRole('textbox', { name: 'Zip' }).type('6293', { delay });
  
  // Select training option
  await page.getByRole('group').locator('div').filter({ hasText: 'Core: 6/24/2025 & 6/25/2025,' }).getByRole('checkbox').check();
  
  // Select age confirmation and awareness
  await page.getByLabel('I am 18 years of age or older').locator('div').filter({ hasText: 'Yes' }).getByRole('radio').check();
  await page.getByLabel('I am aware that I will need a').locator('div').filter({ hasText: 'Yes' }).getByRole('radio').check();
  
  // Submit registration
  await page.getByRole('button', { name: 'Submit Registration' }).click();
  
  // Fill payment information
  await page.getByRole('textbox', { name: 'Name on Card *' }).type('John Smith', { delay });
  await page.getByRole('textbox', { name: 'Card Number *' }).type('4242 4242 4242 4242', { delay });
  await page.getByRole('textbox', { name: 'Expiration Date *' }).type('01/27', { delay });
  await page.getByRole('textbox', { name: 'CVV (3 digits) *' }).type('123', { delay });
  await page.getByRole('textbox', { name: 'Billing Zip Code *' }).type('12343', { delay });
  
  // Submit payment
  await page.getByRole('button', { name: 'Pay $' }).click();
  
  // Return to registration (if needed)
  await page.getByRole('button', { name: 'Back to Registration' }).click();
});