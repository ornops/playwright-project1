import { test, expect } from '@playwright/test';

test.describe('Login page Tests', () => {

	test('Valid Login to CME Staging', async ({ page }) => {
		// Navigate to the login page
		await page.goto('https://cme-staging.vercel.app/login');
		await page.fill('input[placeholder="Email Address"]', 'admin@gmail.com');
		await page.fill('input[placeholder="Password"]', 'Password@123');
		await page.click('button:has-text("Login")');

		// Wait for navigation or check for dashboard element
		await expect.soft(page.locator('h1')).toHaveText('Admin');

		await page.locator('div.css-146c3p1:has-text("Logout")').click()
		await page.waitForTimeout(5000);
		await page.click('button:has-text("Confirm")');
		await expect(page.locator('text=Welcome!')).toBeVisible();
		await page.waitForTimeout(5000);
	});

	test('Invalid Login to CME Staging', async ({ page }) => {
		await page.goto('https://cme-staging.vercel.app/login');
		await page.fill('input[placeholder="Email Address"]', 'testemail@test.com');
		await page.fill('input[placeholder="Password"]', 'test123');
		await page.click('button:has-text("Login")');
		await expect(page.locator('text=Password must be at least 8 characters long and include a number, special character, an uppercase letter, and a lowercase letter')).toBeVisible();
	});

	test.afterEach(async ({ page }) => {
		await page.waitForTimeout(5000);
	})

})




