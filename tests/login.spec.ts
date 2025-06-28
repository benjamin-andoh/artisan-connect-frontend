import { test, expect } from '@playwright/test';

test('User can log in with valid credentials', async ({ page }) => {
  await page.goto('/login');

  await page.getByPlaceholder('Email').fill('ben1.2@example.com');
  await page.getByPlaceholder('Password').fill('123456');
  await page.getByRole('button', { name: /login/i }).click();

  await expect(page.getByText('Welcome')).toBeVisible();
});
