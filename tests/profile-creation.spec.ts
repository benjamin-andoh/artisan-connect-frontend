import { test, expect } from '@playwright/test';

test.describe('Artisan Profile Creation', () => {
  test('User can create a profile successfully', async ({ page }) => {
    // 1. Go to login
    await page.goto('/login');

    // 2. Login
    await page.getByLabel('Email').fill('user@example.com');
    await page.getByLabel('Password').fill('password123');
    await page.getByRole('button', { name: /login/i }).click();

    // 3. Wait for redirect or dashboard element
    await page.waitForURL('/dashboard');

    // 4. Navigate to profile creation page
    await page.goto('/create-profile');

    // 5. Fill out the form
    await page.getByLabel('Bio').fill('Experienced HVAC with over 10 years of experience.');
    await page.getByLabel('Skills').fill('aircon, fridge'); 
    await page.getByLabel('Location').fill('Kumasi, Ghana');
    await page.selectOption('select[name="category"]', '4');

    // 6. Submit the form
    await page.getByRole('button', { name: /create profile/i }).click();

    // 7. Assert success (confirmation message or redirect)
    await expect(page.getByText('Profile created successfully')).toBeVisible();
  });
});
