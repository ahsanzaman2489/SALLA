import {Component, h, Prop, State, Watch} from '@stencil/core';
import {getCoupons} from "../../serivice/cartService";
import {couponItem} from "../../types";
import {InputComponent} from "../form/input-component/input-component";
import couponSvg from "../../assets/coupon.svg";
import deleteSvg from "../../assets/delete.svg";


@Component({
  tag: 'coupon-component',
  styleUrl: '../../cart.css',
  assetsDirs: ['assets'],
  shadow: true,
})

export class CouponComponent {

  @State() coupon: string = '';
  @Prop() selectedCoupon: Partial<couponItem>;
  @Prop() discountAmount: number;
  @Prop() currency: string;
  @Prop() handleCouponSubmit: Function = () => {
  };

  checkCoupon = (coupons) => {
    const isCoupon = coupons.find((coupon) => coupon.name.toLowerCase() === this.coupon.toLowerCase());

    if (isCoupon) {
      this.selectedCoupon = isCoupon;
    } else {
      this.selectedCoupon = {};
    }

  }

  handleChange = (event: InputEvent) => {
    const element = event.currentTarget as HTMLInputElement;
    this.coupon = element.value;
  }


  handleSubmit = async (e: any) => {
    e.preventDefault();

    try {
      const res = await getCoupons();

      if (res.data.data) {
        this.checkCoupon(res.data.data);
      }

    } catch (e) {
      console.log(e)
    }
  }

  handleRemoveCoupon = (e) => {
    e.preventDefault();
    this.selectedCoupon = {};
  }

  @Watch('selectedCoupon')
  watchStateHandler(newItems: couponItem) {
    const isCouponSelected = Object.keys(newItems).length > 0;
    this.handleCouponSubmit(isCouponSelected, newItems)
  }

  render() {

    const isSelectedCoupon = Object.keys(this.selectedCoupon).length > 0;

    return (
      <form onSubmit={this.handleSubmit}>
        {!isSelectedCoupon && <div>
          <div class="w-[100%] h-7 justify-between items-center inline-flex my-2.5 sm:my-5">
            <div class="grow shrink basis-0 text-zinc-800 text-xs font-boldclass leading-none">Have a coupon?</div>
            <div
              class="h-7 bg-white rounded-md shadow-inner border border-zinc-100 border-opacity-25 justify-start items-center gap-2 flex">
              <div class="w-[70px] grow shrink basis-0 text-neutral-400 text-[10px] font-normalclass leading-none">

                <InputComponent
                  onInput={this.handleChange}
                  type='text'
                  value={this.coupon}
                  required
                  class='w-[100%]'
                  placeholder='inser code'
                /></div>
              <div class="w-10 h-5 p-2.5 bg-sky-900 rounded flex-col justify-center items-center gap-2.5 inline-flex">
                <button class="text-white text-[10px] font-normalclass leading-none" type='submit'>Apply</button>
              </div>
            </div>
          </div>
        </div>
        }

        {isSelectedCoupon && <div>
          <div class="w-[100%] h-7 justify-between items-center inline-flex my-2.5 sm:my-5">
            <div
              class="p-1.5 rounded-md border border-sky-900 border-opacity-25 justify-start items-center gap-1.5 flex">
              <div class="text-sky-900 text-xs font-normal font-['sallaicons'] leading-none">
                <img src={couponSvg} alt=""/></div>
              <div class="text-zinc-800 text-xs font-bold leading-none">{this.selectedCoupon?.label}</div>
              <div class="text-red-600 text-xs font-normal leading-none" onClick={this.handleRemoveCoupon}>
                <img src={deleteSvg} alt=""/>
              </div>
            </div>
            <div class="text-red-600 text-xs font-bold leading-none">{this.currency} -{this.discountAmount}</div>
          </div>
        </div>
        }

      </form>
    )
  }

}
