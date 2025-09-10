import { test, expect } from '@playwright/test';

test('has title', async ({ page }) => {
    await page.goto('/');

    // Expect a title "to contain" a substring.
    await expect(page).toHaveTitle(/Create Next App/);
});

test('get started link', async ({ page, context }) => {
    await page.goto('/');

    // Wait for the new page to open when clicking the Learn link
    const pagePromise = context.waitForEvent('page');
    await page.getByRole('link', { name: 'Learn' }).click();
    const newPage = await pagePromise;
    await newPage.waitForLoadState('networkidle');
    
    const headingLocator = newPage.getByRole('heading', { name: 'Start building with Next.js' });
    await expect(headingLocator).toBeVisible();
});
