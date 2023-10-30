import { defineContainer } from './vue-component-lib/utils';
import { defineCustomElements } from 'stencil-library/loader';
defineCustomElements();
export const CartComponent = defineContainer('cart-component', undefined, [
    'submitCallback'
]);
export const CouponComponent = defineContainer('coupon-component', undefined, [
    'selectedCoupon',
    'discountAmount',
    'currency',
    'handleCouponSubmit'
]);
export const ShippingComponent = defineContainer('shipping-component', undefined, [
    'submitCallback',
    'backCallback'
]);
export const TestingComponent = defineContainer('testing-component', undefined);
//# sourceMappingURL=components.js.map