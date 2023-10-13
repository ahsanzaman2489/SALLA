import {h} from '@stencil/core';
import {cartItem} from "../../types";

export const CartListItemComponent = ({item}: { item: cartItem }) => {
  console.log(item)
  return (
    <div>{item.label}</div>
  );
}
