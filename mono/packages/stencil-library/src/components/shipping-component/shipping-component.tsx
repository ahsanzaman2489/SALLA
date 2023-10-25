import {Component, h, Prop, State, Watch} from '@stencil/core';
import {CartLayout} from "../cart-layout/cart-layout";
import {getCartShipping, getCartTotal} from "../../serivice/cartService";
import {cartTotalType, shippingItem} from "../../types";
import cartStore from "../../store";
import {AxiosError, AxiosResponse} from "axios";
import querystring from 'query-string'
import {CartTotal} from "../cart-total/cart-total";
import {ListComponent} from "../list/list-component/list-component";
import {ShippingListItemComponent} from "../list/shipping-list-item-component/shipping-list-item-component";
import logo from "../../assets/storeLogo.svg";

@Component({
  tag: 'shipping-component',
  styleUrl: '../../cart.css',
  shadow: true,
  assetsDirs: ['assets'],
  // styles: 'shipping-component { font-size: 24px; }'
})

export class ShippingComponent {
  @State() items: shippingItem[] = [];
  @State() selectedShipping: Partial<shippingItem> = {};
  @State() totals: cartTotalType[] = []

  @Prop() submitCallback: Function = () => {
  };
  @Prop() backCallback: Function = () => {
  };

  componentDidLoad() {
    cartStore.isLoading = true;
    return getCartShipping().then((res: AxiosResponse) => {
      if (res.status === 200 && res.data.data) {
        this.items = res.data.data;
      }
    }).catch((e: AxiosError) => {
      console.log(e);
      cartStore.isLoading = false;
    })
  }

  fetchTotal = async () => {
    try {
      cartStore.isLoading = true;
      const query = querystring.stringify({
        coupon: cartStore.isCoupon,
        shipping: this.selectedShipping.name
      })

      const res = await getCartTotal(query);

      if (res.status === 200 && res.data.data) {
        this.totals = res.data.data;
      }
      cartStore.isLoading = false;
    } catch (e) {
      console.log(e)
      cartStore.isLoading = false;
    }
  }

  @Watch('items')
  @Watch('selectedShipping')
  watchMultiple(newItems: shippingItem[] | any, _, propName: string) {
    if (propName === 'items' && newItems.length > 0) {
      if (Object.keys(cartStore.selectedShipping).length) {
        this.selectedShipping = cartStore.selectedShipping;
      } else {
        this.selectedShipping = newItems[0]
      }
      //By Default selecting first item in shipping array or from persisted State
    }

    if (propName === 'selectedShipping' && Object.keys(newItems).length > 0) {
      this.selectedShipping = newItems;
      cartStore.selectedShipping = newItems;
      this.fetchTotal();
    }
  }

  handleSubmit = () => {
    this.submitCallback()
  }

  handleCouponSubmit = (isCoupon: boolean, /*selectedCoupon: couponItem*/) => {
    //isCoupon if coupon is applied and selectedCoupon which matches
    cartStore.isCoupon = isCoupon;
  }

  handleSelect = (event: InputEvent) => {
    const element = event.target as HTMLSelectElement;
    this.selectedShipping = this.items.find(ship => ship.name === element.value) || {}
  }

  handleBack = () => {
    this.backCallback()
  }

  render() {
    return (
      <CartLayout
        headerProps={{
          logo: <img src={logo} alt="logo"/>,
          page: ['store', 'cart', 'checkout'],
          storeName: 'Sample Store',
          backComponent: <div><span onClick={this.handleBack} class='cursor-pointer'>&lt;&nbsp;&nbsp;</span>shipping
          </div>
        }}
      >
        <ListComponent
          listProps={{
            class: 'min-h-[250px]'
          }}
          data={this.items}
          ListItem={ShippingListItemComponent}
          onChange={this.handleSelect}
          selected={this.selectedShipping}
        />
        <CartTotal data={this.totals}/>
        <br/>

        <div onClick={this.handleSubmit}
             class="w-[100%] p-2.5 bg-primary rounded-md flex-col justify-center items-center gap-2.5 inline-flex cursor-pointer">
          <div class="text-white text-sm font-normal leading-none">Submit</div>
        </div>
      </CartLayout>
    );
  }

}
