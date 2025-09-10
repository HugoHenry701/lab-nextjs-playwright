import { test, expect } from '@playwright/test';

test('term page has title', async ({ page }) => {
    await page.goto('/');

    const termLink = page.getByRole('link', { name: 'Term' });
    await termLink.click();

    // Expect a title "to contain" a substring.
    await expect(page).toHaveTitle(/Terms of Service/);
});

test('term page has heading', async ({ page }) => {
    await page.goto('/');

    const termLink = page.getByRole('link', { name: 'Term' });
    await termLink.click();

    // Expect a heading "to contain" a substring.
    await expect(page.getByRole('heading', { name: 'Terms of Service' })).toBeVisible();
});