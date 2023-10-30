import {Component, h, Prop} from '@stencil/core';
import logo from "../../assets/storeLogo.svg";

@Component({
  tag: 'submit-component',
  styleUrl: '../../cart.css',
  shadow: true,
})


export class SubmitComponent {
  @Prop() returnToStoreHandler: any = () => {
    //   this will handle the click of back to store button
  }

  // Renders the submission page after order placed
  render() {
    return (
      <div
        class="h-[533px] p-5 bg-white rounded-xl flex-col justify-center items-center gap-5 inline-flex">
        <div class="flex-col justify-center items-center gap-2 flex">
          <div class="w-[30px] h-[38.33px] relative"><img src={logo} alt="logo"/></div>
          <div class="flex-col justify-start items-start flex">
            <div class="text-sky-900 text-lg font-bold leading-tight">StoreName</div>
          </div>
        </div>
        <div class="flex-col justify-center items-center gap-5 flex">
          <div
            class="text-center text-zinc-800 text-[38px] font-black leading-tight">Payment
            Confirmed
          </div>
          <div
            class="text-center text-neutral-400 text-lg font-normal leading-tight">Thank
            you for shopping
          </div>
          <div class="text-teal-500 text-xs font-normal underline leading-tight cursor-pointer"
               onClick={this.returnToStoreHandler}>
            return
            to store
          </div>
        </div>
      </div>
    );
  }

}
