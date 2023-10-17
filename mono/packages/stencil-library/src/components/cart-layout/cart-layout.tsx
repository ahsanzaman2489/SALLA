import {h} from '@stencil/core';
import cartStore from "../../store";
import {LoadingComponent} from "../loading-component/loading-component";
import {CartLayoutHeader} from "./cart-layout-header/cart-layout-header";

export const CartLayout = (props, children): any => {
  return (

    <div class='rounded-xl border border-transparent p-5 bg-white' {...props}>
      <CartLayoutHeader {...props.headerProps}/>
      {cartStore.isLoading ? <LoadingComponent/> : children}
    </div>
  );
}

