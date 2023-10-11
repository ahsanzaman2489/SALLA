import { newSpecPage } from '@stencil/core/testing';
import { CartTotal } from '../cart-total';

describe('cart-total', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [CartTotal],
      html: `<cart-total></cart-total>`,
    });
    expect(page.root).toEqualHtml(`
      <cart-total>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </cart-total>
    `);
  });
});
