import { test, expect } from '@playwright/test';


test.describe('Signup page Tests', () => {

	test.beforeEach(async ({ page }) => {
		await page.waitForTimeout(3000);
		await page.setViewportSize({ width: 1920, height: 1080 });
	})


	test('Create a Wholesaler account', async ({ page }) => {

		await page.goto('https://cme-staging.vercel.app/signup');
		await page.fill('input[placeholder="Email Address"]', 'joshua.ornopia+wholesaler12345@mashupgarage.com');
		await page.fill('input[placeholder="Password"]', 'Password123!');
		await page.fill('input[placeholder="Retype Password"]', 'Password123!');
		await page.fill('input[placeholder="Full Name"]', 'Hermano Pule');
		await page.fill('input[placeholder="Company Name"]', 'Hermano Jewelries');
		await page.fill('textarea[placeholder="Company Description"]', 'World Class Provider or World Class Jewelries');
		//
		await page.locator('select[aria-label="I specialize in"]').selectOption({ label: 'Jewelries and Accessories' });
		await page.locator('[role="combobox"]').click();
		await page.locator('div.css-146c3p1:has-text("Jewelries and Accessories")').click()
		await page.click('button:has-text("Confirm")');


		await page.locator('select[aria-label="I specialize on"]').selectOption({ label: 'Bangles' });
		await page.locator('select[aria-label="I am a"]').selectOption({ label: 'jeweler' });
		await page.fill('input[placeholder="ABN/Tax Number"]', '01 234 567 890');
		await page.locator('select[aria-label="Country"]').selectOption({ label: 'Australia' });
		await page.locator('select[aria-label="State/Province"]').selectOption({ label: 'New South Wales' });
		await page.fill('input[placeholder="Unit No./Steet Name"]', 'J. Smith Street');
		await page.fill('input[placeholder="Zip Code"]', '4209');
		await page.fill('input[placeholder="Website URL"]', 'hermanopule.com');
		await page.fill('input[placeholder="Facebook URL"]', 'facebook.com/hermano');
		await page.fill('input[placeholder="Instagram URL"]', 'instagram.com/hermano');
		await page.locator('div.css-146c3p1:has-text("Sign up")').click()
		await page.waitForTimeout(5000);
		await expect(page.locator('text=Account Verification is in progress')).toBeVisible();


	});

	test.afterEach(async ({ page }) => {
		await page.waitForTimeout(3000);
	})






})

