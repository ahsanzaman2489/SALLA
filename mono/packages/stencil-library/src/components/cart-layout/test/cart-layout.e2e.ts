import { newE2EPage } from '@stencil/core/testing';

describe('cart-layout', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<cart-layout></cart-layout>');

    const element = await page.find('cart-layout');
    expect(element).toHaveClass('hydrated');
  });
});
