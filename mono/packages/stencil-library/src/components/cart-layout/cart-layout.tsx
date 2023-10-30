import {h} from '@stencil/core';
import cartStore from "../../store";
import {LoadingComponent} from "../loading-component/loading-component";
import {CartLayoutHeader} from "./cart-layout-header/cart-layout-header";

export const CartLayout = (props: any, children: any): any => {
  return (
    <div class='container mx-auto rounded-xl border border-transparent sm:p-5 p-2.5 bg-white' {...props}>
      {/*Cart layout will render all child's as HOC and add header layout and handle the loading*/}
      <CartLayoutHeader {...props.headerProps}/>
      {cartStore.isLoading ? <div class='min-h-[250px]'><LoadingComponent/></div> :
        <div class='min-h-[250px]'>{children}</div>}
    </div>
  );

}
