/* eslint-disable */
/* tslint:disable */
/**
 * This is an autogenerated file created by the Stencil compiler.
 * It contains typing information for all components that exist in this project.
 */
import { HTMLStencilElement, JSXBase } from "@stencil/core/internal";
export namespace Components {
    interface CartComponent {
        "submitCallback": Function;
    }
    interface CouponComponent {
        "handleCouponSubmit": Function;
    }
}
declare global {
    interface HTMLCartComponentElement extends Components.CartComponent, HTMLStencilElement {
    }
    var HTMLCartComponentElement: {
        prototype: HTMLCartComponentElement;
        new (): HTMLCartComponentElement;
    };
    interface HTMLCouponComponentElement extends Components.CouponComponent, HTMLStencilElement {
    }
    var HTMLCouponComponentElement: {
        prototype: HTMLCouponComponentElement;
        new (): HTMLCouponComponentElement;
    };
    interface HTMLElementTagNameMap {
        "cart-component": HTMLCartComponentElement;
        "coupon-component": HTMLCouponComponentElement;
    }
}
declare namespace LocalJSX {
    interface CartComponent {
        "submitCallback"?: Function;
    }
    interface CouponComponent {
        "handleCouponSubmit"?: Function;
    }
    interface IntrinsicElements {
        "cart-component": CartComponent;
        "coupon-component": CouponComponent;
    }
}
export { LocalJSX as JSX };
declare module "@stencil/core" {
    export namespace JSX {
        interface IntrinsicElements {
            "cart-component": LocalJSX.CartComponent & JSXBase.HTMLAttributes<HTMLCartComponentElement>;
            "coupon-component": LocalJSX.CouponComponent & JSXBase.HTMLAttributes<HTMLCouponComponentElement>;
        }
    }
}
