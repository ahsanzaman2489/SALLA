import {Component, h, Prop, State, Watch} from '@stencil/core';
import {CartLayout} from "../cart-layout/cart-layout";
import {getCartItems} from "../../serivice/cartService";
import {getItemsTotal, getTotalAfterDiscount} from "../../utils/utils";
import {cartItem, couponItem} from "../../types";
import cartStore, {onChangeHandler} from "../../store";
import {isEmpty} from 'lodash'
import {CartTotal} from "../cart-total/cart-total";
import {ListComponent} from "../list/list-component/list-component";
import {CartListItemComponent} from "../cart-list-item-component/cart-list-item-component";
import logo from "../../assets/storeLogo.svg";

@Component({
  tag: 'cart-component',
  styleUrl: '../../cart.css',
  assetsDirs: ['assets'],
  shadow: true,
})

export class CartComponent {
  @State() items: cartItem[] = [];
  @State() total: number = 0;
  @State() coupon: string = '';

  @Prop() submitCallback: Function = () => {
  };

  handleTotal() {
    const newTotal = getItemsTotal(this.items);
    if (isEmpty(cartStore.selectedCoupon)) {
      this.total = newTotal;
    } else {
      this.total = getTotalAfterDiscount(newTotal, cartStore.selectedCoupon.discount)
    }
  }

  constructor() {
    onChangeHandler('selectedCoupon', () => {
      this.handleTotal();
    })
  }

  @Watch('items')
  watchStateHandler() {
    this.handleTotal()
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
    this.submitCallback()
  }

  handleCouponSubmit = (isCoupon: boolean, selectedCoupon: couponItem) => {
    //isCoupon if coupon is applied and selectedCoupon which matches
    cartStore.isCoupon = isCoupon;
    cartStore.selectedCoupon = selectedCoupon;
  }

  render() {
    return (
      <CartLayout headerProps={{
        logo: <img src={logo} alt="logo"/>,
        page: ['store', 'cart', 'checkout'],
        storeName: 'Sample Store'
      }}>
        <ListComponent data={this.items} ListItem={CartListItemComponent} listProps={{
          class: 'p-5 bg-green-200 bg-opacity-20 rounded-lg border border-green-200 flex-col justify-start items-start gap-4 inline-flex w-[100%]'
        }}/>
        <coupon-component handleCouponSubmit={this.handleCouponSubmit} selectedCoupon={cartStore.selectedCoupon}/>
        <CartTotal data={[{
          "name": "cart_total",
          "label": "Cart Total",
          "currency": "SAR",
          "amount": this.total
        }]}/>
        <br/>
        <button onClick={this.handleSubmit}>proceed</button>
      </CartLayout>
    );
  }

}
