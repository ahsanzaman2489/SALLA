import { CartLayout } from '../cart-layout';
import {h} from '@stencil/core';
import {renderFunctionalComponentToSpecPage} from "../../../utils/testing/functionalComponentTesting";

describe('cart-layout', () => {
  it('renders', async () => {
    const page =
      await renderFunctionalComponentToSpecPage(()=><CartLayout><div>layout</div></CartLayout>)
    expect(page.root).toEqualHtml(`
      <div class="bg-white border border-transparent container mx-auto p-2.5 rounded-xl sm:p-5">
       <div class="cart-header">
         <div class="flex flex-row items-center">
           <div class="cart-header-logo"></div>
           <div class="ml-4">
             <div class="cart-header-store-name color-primary text-left"></div>
             <p class="cart-header-breadcrumbs"></p>
           </div>
         </div>
         <div class="cart-header-divider my-5">
           <div class="flex items-center justify-center">
             <div class="cart-header-divider-title color-primary"></div>
             <div class="cart-header-divider-line ml-4 rounded-md w-[100%]"></div>
           </div>
         </div>
       </div>
       <div class="min-h-[250px]">
         <div>layout</div>
       </div>
    </div>
    `);
  });
});
