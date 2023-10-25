import {Component, h, Prop, State, Watch} from '@stencil/core';
import {CartLayout} from "../cart-layout/cart-layout";
import {getCartItems} from "../../serivice/cartService";
import {getItemsTotal, getTotalAfterDiscount} from "../../utils/utils";
import {cartItem, couponItem} from "../../types";
import cartStore from "../../store";
import {isEmpty} from 'lodash'
import {CartTotal} from "../cart-total/cart-total";
import {ListComponent} from "../list/list-component/list-component";
import {CartListItemComponent} from "../list/cart-list-item-component/cart-list-item-component";
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

  @Watch('items')
  watchStateHandler() {
    this.total = getItemsTotal(this.items);
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

    const isCoupon = !isEmpty(cartStore.selectedCoupon);
    const totalAfterDiscount = getTotalAfterDiscount(this.total, cartStore.selectedCoupon.discount);
    const finalTotal = isCoupon ? totalAfterDiscount : this.total

    return (
      <CartLayout headerProps={{
        logo: <img src={logo} alt="logo"/>,
        page: ['store', 'cart', 'checkout'],
        storeName: 'Sample Store',
        backComponent: 'Cart'
      }}>
        <ListComponent data={this.items} ListItem={CartListItemComponent} listProps={{
          class: 'p-5 bg-green-200 bg-opacity-20 rounded-lg border border-green-200 flex-col justify-start items-start gap-4 inline-flex w-[100%]'
        }}/>

        <coupon-component handleCouponSubmit={this.handleCouponSubmit} selectedCoupon={cartStore.selectedCoupon}
                          discountAmount={this.total - totalAfterDiscount} currency={cartStore.currency}/>
        <CartTotal data={[{
          "name": "cart_total",
          "label": "Cart Total",
          "currency": "SAR",
          "amount": finalTotal
        }]}/>

        <div onClick={this.handleSubmit}
             class="w-[100%] p-2.5 bg-primary rounded-md flex-col justify-center items-center gap-2.5 inline-flex cursor-pointer">
          <div class="text-white text-sm font-normal leading-none">Proceed to shipping</div>
        </div>
      </CartLayout>
    );
  }

}
