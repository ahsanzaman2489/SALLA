import { newSpecPage } from '@stencil/core/testing';
import { CartLayout } from '../cart-layout';

describe('cart-layout', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [CartLayout],
      html: `<cart-layout></cart-layout>`,
    });
    expect(page.root).toEqualHtml(`
      <cart-layout>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </cart-layout>
    `);
  });
});
