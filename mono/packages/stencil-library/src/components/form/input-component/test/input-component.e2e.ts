import { newE2EPage } from '@stencil/core/testing';

describe('input-component', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<input-component></input-component>');

    const element = await page.find('input-component');
    expect(element).toHaveClass('hydrated');
  });
});
