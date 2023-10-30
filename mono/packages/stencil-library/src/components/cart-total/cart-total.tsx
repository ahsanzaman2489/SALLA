import {h} from '@stencil/core';
import {cartTotalType} from "../../types";
import {ListComponent} from "../list/list-component/list-component";
import {CartTotalListItem} from "../list/cart-total-list-item/cart-total-list-item";

export const CartTotal = ({data}: { data: cartTotalType[] }) => {
  return (
    <ListComponent data={data} ListItem={CartTotalListItem}/>
  );
}
/* rendering the cart total single item*/
