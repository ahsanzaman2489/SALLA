import { newSpecPage } from '@stencil/core/testing';
import { CartComponent } from '../cart-component';

describe('cart-component', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [CartComponent],
      html: `<cart-component></cart-component>`,
    });
    expect(page.root).toEqualHtml(`
      <cart-component>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </cart-component>
    `);
  });
});
