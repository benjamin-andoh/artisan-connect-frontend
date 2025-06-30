import { test, expect } from '@playwright/test';

test('Unauthenticated user cannot access profile creation page', async ({ page }) => {
  await page.goto('/create-profile');

  await expect(page).toHaveURL(/login/i); 
});

test('Authenticated user can access profile creation page', async ({ page }) => {
  await page.goto('/login');

  await page.getByPlaceholder('Email').fill('demo@example.com');
  await page.getByPlaceholder('Password').fill('password123');
  await page.getByRole('button', { name: /login/i }).click();

  await expect(page.getByText('Dashboard')).toBeVisible(); 

  await page.goto('/create-profile');
  await expect(page.getByText('Create Artisan Profile')).toBeVisible();
});
