import {Component, h, Prop, State, Watch} from '@stencil/core';
import {getCoupons} from "../../serivice/cartService";
import {couponItem} from "../../types";
import {InputComponent} from "../form/input-component/input-component";
import couponSvg from "../../assets/coupon.svg";
import deleteSvg from "../../assets/delete.svg";
import {SpinningLoadingComponent} from "../loading-component/spinning-loading-component";

@Component({
  tag: 'coupon-component',
  styleUrl: '../../cart.css',
  assetsDirs: ['assets'],
  shadow: true,
})

export class CouponComponent {

  @State() coupon: string = '';
  @State() isLoading: boolean = false;
  @State() isValidCoupon: boolean = false;
  @Prop() selectedCoupon: Partial<couponItem>;
  @Prop() discountAmount: number;
  @Prop() currency: string;
  @Prop() handleCouponSubmit: Function = () => {
  };
  //handleCouponSubmit will trigger when coupon submit

  checkCoupon = (coupons: couponItem[]) => {
    const isCoupon = coupons.find((coupon) => coupon.name.toLowerCase() === this.coupon.toLowerCase());

    if (isCoupon) {
      this.selectedCoupon = isCoupon;
    } else {
      this.selectedCoupon = {};
      this.isValidCoupon = true;
      setTimeout(() => this.isValidCoupon = false, 10000)
      //showing message if invalid coupon and removing the message after 10 secons
    }
    //checking coupon is valid or not
  }

  handleChange = (event: InputEvent) => {
    const element = event.currentTarget as HTMLInputElement;
    this.coupon = element.value;
    //handling input change
  }


  handleSubmit = async (e: any) => {
    e.preventDefault();
    this.isLoading = true;
    try {
      const res = await getCoupons();

      if (res.data.data) {
        this.checkCoupon(res.data.data);
      }

      this.isLoading = false;
    } catch (e) {
      this.isLoading = false;
      console.log(e)
    }
    //handles submit of coupon form data and fetch and check with data from API
  }

  handleRemoveCoupon = (e) => {
    e.preventDefault();
    this.selectedCoupon = {};
    this.coupon = '';
  }

  @Watch('selectedCoupon')
  watchStateHandler(newItems: couponItem) {
    const isCouponSelected = Object.keys(newItems).length > 0;
    this.handleCouponSubmit(isCouponSelected, newItems)
    //if selected coupon state is change , update the components accordingly
  }

  render() {

    const isSelectedCoupon = Object.keys(this.selectedCoupon).length > 0;

    return (
      <form onSubmit={this.handleSubmit}>
        {!isSelectedCoupon && <div>
          <div class="w-[100%] h-7 justify-between items-center inline-flex my-2.5 sm:my-5 ">
            <div class="grow shrink basis-0 text-zinc-800 text-xs font-boldclass leading-none text-left">Have a
              coupon?
            </div>
            <div
              class="w-[120px] h-7 pl-2 pr-1 py-2 bg-white rounded-md shadow-inner border border-zinc-100 border-opacity-25 justify-start items-center gap-2 inline-flex relative">
              <div class="grow shrink basis-0 text-neutral-400 text-[10px] font-normal leading-none">
                <InputComponent
                  onInput={this.handleChange}
                  type='text'
                  value={this.coupon}
                  required
                  class='w-[100%] outline-none'
                  placeholder='insert code'
                  disabled={this.isLoading}
                />
              </div>
              <button class="w-10 h-5 p-2.5 bg-sky-900 rounded flex-col justify-center items-center gap-2.5 inline-flex"
                      type='submit' disabled={this.isLoading}>
                <span class="text-white text-[10px] font-normalclass leading-none">
                 {this.isLoading ? <SpinningLoadingComponent width='10px' height='10px'/> : 'apply'} </span>
              </button>
              {this.isValidCoupon &&
                <span class='text-[10px] text-red-600 cart-coupon-error'>coupon is not valid</span>}
            </div>

          </div>
        </div>
        }
        {/*When there is no coupon selected show form */}
        {isSelectedCoupon && <div>
          <div class="w-[100%] h-7 justify-between items-center inline-flex my-2.5 sm:my-5">
            <div
              class="p-1.5 rounded-md border border-sky-900 border-opacity-25 justify-start items-center gap-1.5 flex">
              <div class="text-sky-900 text-xs font-normal font-['sallaicons'] leading-none">
                <img src={couponSvg} alt=""/></div>
              <div class="text-zinc-800 text-xs font-bold leading-none">{this.selectedCoupon?.label}</div>
              <div class="text-red-600 text-xs font-normal leading-none cursor-pointer"
                   onClick={this.handleRemoveCoupon}>
                <img src={deleteSvg} alt=""/>
              </div>
            </div>
            <div class="text-red-600 text-xs font-bold leading-none">{this.currency} -{this.discountAmount}</div>
          </div>
        </div>
        }
        {/*else show selected coupon*/}
      </form>
    )
  }

}
