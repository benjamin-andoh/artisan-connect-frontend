// tests/protected-route.spec.ts
import { test, expect } from '@playwright/test';

test('Unauthenticated user cannot access profile creation page', async ({ page }) => {
  await page.goto('/create-profile');

  // Expect redirect to login or error message
  await expect(page).toHaveURL(/login/i); // Adjust this if you show a message instead
});

test('Authenticated user can access profile creation page', async ({ page }) => {
  await page.goto('/login');

  await page.getByPlaceholder('Email').fill('demo@example.com');
  await page.getByPlaceholder('Password').fill('password123');
  await page.getByRole('button', { name: /login/i }).click();

  await expect(page.getByText('Welcome')).toBeVisible(); 

  await page.goto('/create-profile');
  await expect(page.getByText('Create Artisan Profile')).toBeVisible();
});
