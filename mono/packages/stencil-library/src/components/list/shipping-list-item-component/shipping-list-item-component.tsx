import {h} from '@stencil/core';
import {RadioComponent} from "../../form/radio-component/radio-component";

export const ShippingListItemComponent = (props: any) => {
  const {item, ...rest} = props;
  return (
    <div>
      <div class="w-[100%] h-9 sm:p-2.5 rounded-md justify-start items-center sm:gap-5 inline-flex">
        <div class="grow shrink basis-0 h-4 justify-start items-center gap-3 flex">
          <div class="rounded-full">
            <RadioComponent item={item} {...rest}/>
          </div>
          <img class="w-10 h-[12.53px]" src="https://via.placeholder.com/40x13" />
          <div class="w-[184px] text-zinc-800 text-xs font-normal font-['Ping AR + LT'] leading-none uppercase">{item.name}</div>
        </div>
        <div class="text-zinc-800 text-xs font-bold font-['Ping AR + LT'] leading-none">Free</div>
      </div>
    </div>
  );
}

