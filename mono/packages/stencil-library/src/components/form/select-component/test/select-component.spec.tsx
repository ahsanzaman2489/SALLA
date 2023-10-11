import { newSpecPage } from '@stencil/core/testing';
import { SelectComponent } from '../select-component';

describe('select-component', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [SelectComponent],
      html: `<select-component></select-component>`,
    });
    expect(page.root).toEqualHtml(`
      <select-component>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </select-component>
    `);
  });
});
