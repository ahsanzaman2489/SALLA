import { newE2EPage } from '@stencil/core/testing';

describe('list-component', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<list-component></list-component>');

    const element = await page.find('list-component');
    expect(element).toHaveClass('hydrated');
  });
});
