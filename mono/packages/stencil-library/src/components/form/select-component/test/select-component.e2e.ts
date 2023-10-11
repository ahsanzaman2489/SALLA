import { newE2EPage } from '@stencil/core/testing';

describe('select-component', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<select-component></select-component>');

    const element = await page.find('select-component');
    expect(element).toHaveClass('hydrated');
  });
});
