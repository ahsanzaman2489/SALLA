import { newE2EPage } from '@stencil/core/testing';

describe('cart-total', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<cart-total></cart-total>');

    const element = await page.find('cart-total');
    expect(element).toHaveClass('hydrated');
  });
});
