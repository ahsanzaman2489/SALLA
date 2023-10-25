import { defineContainer } from './vue-component-lib/utils';
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
//# sourceMappingURL=components.js.map