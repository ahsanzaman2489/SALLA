import { newE2EPage } from '@stencil/core/testing';

describe('shipping-component', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<shipping-component></shipping-component>');

    const element = await page.find('shipping-component');
    expect(element).toHaveClass('hydrated');
  });
});
