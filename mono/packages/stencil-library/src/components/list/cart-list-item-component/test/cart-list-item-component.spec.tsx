import { newSpecPage } from '@stencil/core/testing';
import { CartListItemComponent } from '../cart-list-item-component';

describe('cart-list-item-component', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [CartListItemComponent],
      html: `<cart-items-component></cart-items-component>`,
    });
    expect(page.root).toEqualHtml(`
      <cart-items-component>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </cart-items-component>
    `);
  });
});
