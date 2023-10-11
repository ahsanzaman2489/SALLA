import { newSpecPage } from '@stencil/core/testing';
import { ListComponent } from '../list-component';

describe('list-component', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [ListComponent],
      html: `<list-component></list-component>`,
    });
    expect(page.root).toEqualHtml(`
      <list-component>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </list-component>
    `);
  });
});
