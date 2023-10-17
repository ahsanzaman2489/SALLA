import {h} from '@stencil/core';
import {cartItem} from "../../types";

export const CartListItemComponent = ({item, currentIndex, totalItems}: {
  item: cartItem,
  totalItems: number,
  currentIndex: number
}) => {

  const isLastItem = totalItems - 1 === currentIndex;

  return (
    <slot>
      <div class="self-stretch rounded-lg justify-start items-center gap-5 sm:inline-flex">
        <div class="grow shrink basis-0 h-[52px] justify-start items-center gap-3 flex">
          <img class="w-10 h-10 rounded-[176px] border border-zinc-100" src={item.thumbnail}/>
          <div class="flex-col justify-center items-start gap-1 inline-flex">
            <div class="sm:w-[184px] text-sky-900 text-xs font-normal underline leading-none">{item.label}
            </div>
            <div class="text-neutral-400 text-[10px] font-normal leading-none">SAR 1,500.00</div>
          </div>
        </div>
        <div class="grow shrink basis-0 h-7 justify-between items-center flex">
          <div class="w-[69px] h-7 p-3 rounded-md justify-center items-center gap-2.5 flex">
            <div class="text-zinc-800 text-xs font-bold leading-none">1</div>
          </div>
          <div class="text-zinc-800 text-xs font-bold leading-none">SAR 1,500.00</div>
        </div>
      </div>
      {!isLastItem && <div class="self-stretch h-[0px] border border-green-200"></div>}
    </slot>
  );
}
