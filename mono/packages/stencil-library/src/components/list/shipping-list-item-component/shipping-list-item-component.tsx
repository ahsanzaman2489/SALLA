import {h} from '@stencil/core';
import {RadioComponent} from "../../form/radio-component/radio-component";
import {shippingItem} from "../../../types";

export const ShippingListItemComponent = (props: { item: shippingItem }) => {
  const {item, ...rest} = props;
  return (
    <div>
      <div class="w-[100%] h-9 sm:p-2.5 rounded-md justify-start items-center sm:gap-5 inline-flex">
        <div class="grow shrink basis-0 h-4 justify-start items-center gap-3 flex">
          <div class="rounded-full">
            <RadioComponent item={item} {...rest}/>
          </div>
          <img class="w-10 h-[12.53px]" src={item.logo} alt={'logo'}/>
          <div class="w-[184px] text-zinc-800 text-xs font-normal leading-none uppercase text-left">{item.name}</div>
        </div>
        <div
          class="text-zinc-800 text-xs font-bold leading-none">{item.fees.amount === 0 ? 'Free' : `${item.fees.currency} + ${item.fees.amount}`}</div>
      </div>
    </div>
  );
}

