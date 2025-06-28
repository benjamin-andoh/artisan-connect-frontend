// tests/home.spec.ts
import { test, expect } from '@playwright/test';

test('Landing page should show Top-Rated Categories', async ({ page }) => {
  await page.goto('/');
  await expect(page.getByText('Top-Rated Categories')).toBeVisible();
});
