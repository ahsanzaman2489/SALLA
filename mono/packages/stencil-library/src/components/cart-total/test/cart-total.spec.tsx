import {CartTotal} from '../cart-total';
import {renderFunctionalComponentToSpecPage} from "../../../utils/testing/functionalComponentTesting";
import {h} from "@stencil/core";

describe('cart-total', () => {
    it('renders when no data', async () => {

        const page =
            await renderFunctionalComponentToSpecPage(() => <CartTotal data={[]}>
                <div>layout</div>
            </CartTotal>)


        expect(page.root).toEqualHtml(`
          <ul></ul>
        `);
    });

    it('renders when there is data to render', async () => {

        const page =
            await renderFunctionalComponentToSpecPage(() => <CartTotal data={[{
                "name": 'cart total',
                "label": 'Cart Total',
                "currency": 'SAR',
                "amount": 20
            }]}>
                <div>layout</div>
            </CartTotal>)


        expect(page.root).toEqualHtml(`
          <ul>
            <li class="mb-4">
                <div class="h-4 inline-flex items-start justify-between w-[100%]">
                  <div class="basis-0 font-bold grow leading-none shrink text-left text-sm text-zinc-800">
                    Cart Total
                  </div>
                  <div class="font-bold leading-none text-sm text-zinc-800">
                    SAR 20.00
                  </div>
                </div>
            </li>
        </ul>
        `);
    });
});
