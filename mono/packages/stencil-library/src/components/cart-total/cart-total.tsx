import {Component, Host, h} from '@stencil/core';
import {CartTotalType} from "../../types";
import {ListComponent} from "../list/list-component/list-component";
import {CartTotalListItem} from "../list/cart-total-list-item/list-item";

export const CartTotal = ({data}: { data: CartTotalType[] }) => {
  return (
    <ListComponent data={data} ListItem={CartTotalListItem}/>
  );
}
