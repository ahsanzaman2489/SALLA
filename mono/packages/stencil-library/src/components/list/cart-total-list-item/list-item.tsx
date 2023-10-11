import {h} from '@stencil/core';
import {CartTotalType} from "../../../types";

export const CartTotalListItem = (props: { item: CartTotalType }) => {
  const {item} = props;
  console.log(item)

  if (item.name === 'discount' && item.amount === 0) {
    return <slot></slot>
  }

  return (
    <li>{item.label} {item.amount}</li>
  );
}
