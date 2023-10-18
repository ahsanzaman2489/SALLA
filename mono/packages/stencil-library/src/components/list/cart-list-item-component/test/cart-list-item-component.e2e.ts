import { newE2EPage } from '@stencil/core/testing';

describe('cart-list-item-component', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<cart-list-item-component></cart-list-item-component>');

    const element = await page.find('cart-list-item-component');
    expect(element).toHaveClass('hydrated');
  });
});
