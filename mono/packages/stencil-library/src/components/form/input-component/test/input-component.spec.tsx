import { newSpecPage } from '@stencil/core/testing';
import { InputComponent } from '../input-component';

describe('input-component', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [InputComponent],
      html: `<input-component></input-component>`,
    });
    expect(page.root).toEqualHtml(`
      <input-component>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </input-component>
    `);
  });
});
