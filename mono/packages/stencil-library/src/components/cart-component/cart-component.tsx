import {Component, h, Prop, State, Watch} from '@stencil/core';
import {CartLayout} from "../cart-layout/cart-layout";
import {getCartItems} from "../../serivice/cartService";
import {getTotal} from "../../utils/utils";
import {cartItem, couponItem} from "../../types";
import cartStore from "../../store";

@Component({
  tag: 'cart-component',
  styleUrl: 'cart-component.css',
  assetsDirs: ['assets'],
  shadow: true,
})

export class CartComponent {
  @State() items: cartItem[] = [];
  @State() total: number = 0;
  @State() coupon: string = '';

  @Prop() submitCallback: Function = () => {
  };

  @Watch('items')
  watchStateHandler(newItems: cartItem[], /*oldItems: cartItem[]*/) {
    const newTotal = getTotal(newItems);
    if (newTotal > 0) {
      this.total = getTotal(newItems);
    }
  }

  componentDidLoad() {
    cartStore.isLoading = true;
    return getCartItems().then((res) => {
      if (res.status === 200 && res.data.data) {
        this.items = res.data.data;

      }

      cartStore.isLoading = false;
    }).catch((e) => {
      console.log(e);
      cartStore.isLoading = false;
    })
  }

  handleSubmit = () => {
    console.log('clicked')
    this.submitCallback()
  }

  handleCouponSubmit = (isCoupon: boolean, selectedCoupon: couponItem) => {
    //isCoupon if coupon is applied and selectedCoupon which matches
    cartStore.isCoupon = isCoupon;
    cartStore.selectedCoupon = selectedCoupon;
  }

  render() {
    return (
      <CartLayout>
        {/*{this.items.map(item => <div>{item.label}</div>)}*/}
        {this.total}
        <coupon-component handleCouponSubmit={this.handleCouponSubmit} selectedCoupon={cartStore.selectedCoupon}/>
        <br/>
        <button onClick={this.handleSubmit}>proceed</button>
      </CartLayout>
    );
  }

}
