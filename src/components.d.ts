/* eslint-disable */
/* tslint:disable */
/**
 * This is an autogenerated file created by the Stencil compiler.
 * It contains typing information for all components that exist in this project.
 */
import { HTMLStencilElement, JSXBase } from "@stencil/core/internal";
export namespace Components {
    interface StencilShoppingCart {
    }
    interface StencilShoppingCartView {
    }
}
declare global {
    interface HTMLStencilShoppingCartElement extends Components.StencilShoppingCart, HTMLStencilElement {
    }
    var HTMLStencilShoppingCartElement: {
        prototype: HTMLStencilShoppingCartElement;
        new (): HTMLStencilShoppingCartElement;
    };
    interface HTMLStencilShoppingCartViewElement extends Components.StencilShoppingCartView, HTMLStencilElement {
    }
    var HTMLStencilShoppingCartViewElement: {
        prototype: HTMLStencilShoppingCartViewElement;
        new (): HTMLStencilShoppingCartViewElement;
    };
    interface HTMLElementTagNameMap {
        "stencil-shopping-cart": HTMLStencilShoppingCartElement;
        "stencil-shopping-cart-view": HTMLStencilShoppingCartViewElement;
    }
}
declare namespace LocalJSX {
    interface StencilShoppingCart {
    }
    interface StencilShoppingCartView {
    }
    interface IntrinsicElements {
        "stencil-shopping-cart": StencilShoppingCart;
        "stencil-shopping-cart-view": StencilShoppingCartView;
    }
}
export { LocalJSX as JSX };
declare module "@stencil/core" {
    export namespace JSX {
        interface IntrinsicElements {
            "stencil-shopping-cart": LocalJSX.StencilShoppingCart & JSXBase.HTMLAttributes<HTMLStencilShoppingCartElement>;
            "stencil-shopping-cart-view": LocalJSX.StencilShoppingCartView & JSXBase.HTMLAttributes<HTMLStencilShoppingCartViewElement>;
        }
    }
}
