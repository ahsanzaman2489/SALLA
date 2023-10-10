import {Component, h, Prop, State, Watch} from '@stencil/core';
import {getCoupons} from "../../serivice/cartService";
import {couponItem} from "../../types";


@Component({
  tag: 'coupon-component',
  // styleUrl: 'cart-component.css',
  assetsDirs: ['assets'],
  shadow: true,
})

export class CouponComponent {

  @State() coupon: string = '';
  @State() selectedCoupon: couponItem = {};

  @Prop() handleCouponSubmit: Function = () => {
  };

  checkCoupon = (coupons) => {
    const isCoupon = coupons.find((coupon: couponItem) => coupon.name.toLowerCase() === this.coupon.toLowerCase());

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
  watchPropHandler(newItems: couponItem) {
    const isCouponSelected = Object.keys(newItems).length > 0;
    this.handleCouponSubmit(isCouponSelected, newItems)
  }

  render() {

    const isSelectedCoupon = Object.keys(this.selectedCoupon).length > 0;

    return (
      <form onSubmit={this.handleSubmit}>

        {!isSelectedCoupon && <div>
          <input
            value={this.coupon}
            onInput={this.handleChange}
            required/>
          <button type='submit'>add</button>
        </div>
        }

        {isSelectedCoupon && <div>
          {this.selectedCoupon.label}
          <button onClick={this.handleRemoveCoupon}>remove</button>
        </div>
        }

      </form>
    )
  }

}
