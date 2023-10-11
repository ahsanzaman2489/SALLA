import { newSpecPage } from '@stencil/core/testing';
import { ShippingComponent } from '../shipping-component';

describe('shipping-component', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [ShippingComponent],
      html: `<shipping-component></shipping-component>`,
    });
    expect(page.root).toEqualHtml(`
      <shipping-component>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </shipping-component>
    `);
  });
});
