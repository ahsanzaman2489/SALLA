import {h} from '@stencil/core';
import {cartTotalType} from "../../../types";

export const CartTotalListItem = (props: { item: cartTotalType }) => {
  const {item} = props;
  console.log(item)

  if (item.name === 'discount' && item.amount === 0) {
    return null
  }


  return (
    <li class='mb-4'>
      <div class="w-[100%] h-4 justify-between items-start inline-flex">
        <div
          class="grow shrink basis-0 text-zinc-800 text-sm font-bold leading-none">{item.label}</div>

        {item.name === 'discount' ? <div class='text-red-600 text-xs font-bold'>{item.currency} -{item.amount.toFixed(2)}</div> : <div
          class="text-zinc-800 text-sm font-bold leading-none">{item.currency} {item.amount.toFixed(2)}</div>
        }
      </div>
    </li>
  );
}
