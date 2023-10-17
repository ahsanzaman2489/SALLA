import {h} from '@stencil/core';
import {cartItem} from "../../types";

export const CartListItemComponent = ({item, currentIndex, totalItems}: {
  item: cartItem,
  totalItems: number,
  currentIndex: number
}) => {

  const isLastItem = totalItems - 1 === currentIndex;
  console.log(currentIndex, totalItems)
  return (
    <slot>
      <div class="self-stretch rounded-lg justify-start items-center gap-5 inline-flex">
        <div class="grow shrink basis-0 h-[52px] justify-start items-center gap-3 flex">
          <img class="w-10 h-10 rounded-[176px] border border-zinc-100" src="https://via.placeholder.com/40x40"/>
          <div class="flex-col justify-center items-start gap-1 inline-flex">
            <div class="w-[184px] text-sky-900 text-xs font-normal font-['Ping AR + LT'] underline leading-none">Bose
              QuietComfort 45 wireless bluetooth headphones
            </div>
            <div class="text-neutral-400 text-[10px] font-normal font-['Ping AR + LT'] leading-none">SAR 1,500.00</div>
          </div>
        </div>
        <div class="grow shrink basis-0 h-7 justify-between items-center flex">
          <div class="w-[69px] h-7 p-3 rounded-md justify-center items-center gap-2.5 flex">
            <div class="text-zinc-800 text-xs font-bold font-['Ping AR + LT'] leading-none">1</div>
          </div>
          <div class="text-zinc-800 text-xs font-bold font-['Ping AR + LT'] leading-none">SAR 1,500.00</div>
        </div>
      </div>
      {!isLastItem && <div class="self-stretch h-[0px] border border-green-200"></div>}
    </slot>
  );
}
