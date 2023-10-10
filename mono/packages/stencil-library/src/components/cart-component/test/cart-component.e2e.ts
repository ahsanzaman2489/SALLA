import { newE2EPage } from '@stencil/core/testing';

describe('cart-component', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<cart-component></cart-component>');

    const element = await page.find('cart-component');
    expect(element).toHaveClass('hydrated');
  });
});
