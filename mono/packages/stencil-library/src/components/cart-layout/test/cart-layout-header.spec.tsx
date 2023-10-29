import {CartLayoutHeader} from '../cart-layout-header/cart-layout-header';
import {h} from '@stencil/core';
import {renderFunctionalComponentToSpecPage} from "../../../utils/testing/functionalComponentTesting";

describe('cart-layout-header', () => {
  it('renders', async () => {
    const page =
      await renderFunctionalComponentToSpecPage(() =>
        <CartLayoutHeader logo={<img src={'hello'} alt="logo"/>}
                          page={['store', 'cart', 'checkout']}
                          storeName='Sample Store'
                          backComponent='Cart'/>
      )
    expect(page.root).toEqualHtml(`
     <div class="cart-header"><div class="flex flex-row items-center"><div class="cart-header-logo"><img src="hello" alt="logo"></div><div class="ml-4"><div class="cart-header-store-name color-primary text-left">Sample Store</div><p class="cart-header-breadcrumbs"><span> <span class="underline cursor-pointer color-secondary-lite">store</span><span class="color-secondary-lite"> /</span> </span><span> <span class="underline cursor-pointer color-secondary-lite">cart</span><span class="color-secondary-lite"> /</span> </span><span> <span class="cart-header-current color-secondary">checkout</span> </span></p></div></div><div class="cart-header-divider my-5"><div class="flex justify-center items-center"><div class="cart-header-divider-title color-primary">Cart</div><div class="cart-header-divider-line ml-4 rounded-md w-[100%]"></div></div></div></div>
    `);
  });
});
