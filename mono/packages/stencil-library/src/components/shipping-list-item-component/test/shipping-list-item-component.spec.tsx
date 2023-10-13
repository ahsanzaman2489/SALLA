import { newSpecPage } from '@stencil/core/testing';
import { ShippingListItemComponent } from '../shipping-list-item-component';

describe('shipping-list-item-component', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [ShippingListItemComponent],
      html: `<shipping-list-item-component></shipping-list-item-component>`,
    });
    expect(page.root).toEqualHtml(`
      <shipping-list-item-component>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </shipping-list-item-component>
    `);
  });
});
