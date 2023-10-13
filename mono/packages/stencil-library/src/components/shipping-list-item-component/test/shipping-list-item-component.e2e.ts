import { newE2EPage } from '@stencil/core/testing';

describe('shipping-list-item-component', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<shipping-list-item-component></shipping-list-item-component>');

    const element = await page.find('shipping-list-item-component');
    expect(element).toHaveClass('hydrated');
  });
});
