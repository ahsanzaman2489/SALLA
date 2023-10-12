import {Component, h, Prop, State, Watch} from '@stencil/core';
import {CartLayout} from "../cart-layout/cart-layout";
import {getCartShipping, getCartTotal} from "../../serivice/cartService";
import {cartTotalType, shippingItem} from "../../types";
import cartStore, {storeType} from "../../store";
import {AxiosError, AxiosResponse} from "axios";
import {RadioComponent} from "../form/radio-component/radio-component";
import querystring from 'query-string'
import {CartTotal} from "../cart-total/cart-total";

// import {CartTotal} from "../../../dist/components/cart-total";

@Component({
  tag: 'shipping-component',
  styleUrl: 'shipping-component.css',
  assetsDirs: ['assets'],
  shadow: true,
})

export class ShippingComponent {
  @State() items: shippingItem[] = [];
  @State() selectedShipping: Partial<shippingItem> = {};
  @State() totals: cartTotalType[] = []

  @Prop() submitCallback: Function = () => {};

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
      console.log(query)
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
  watchMultiple(newItems: shippingItem[] | any, oldValue: boolean, propName: string) {
    if (propName === 'items' && newItems.length > 0) {
      if(Object.keys(cartStore.selectedShipping).length){
        this.selectedShipping = cartStore.selectedShipping;
      }else{
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
    console.log('clicked')
    this.submitCallback()
  }

  handleCouponSubmit = (isCoupon: boolean, /*selectedCoupon: couponItem*/) => {
    //isCoupon if coupon is applied and selectedCoupon which matches
    cartStore.isCoupon = isCoupon;
  }

  handleSelect = (event: InputEvent) => {
    const element = event.target as HTMLSelectElement;
    console.log(this.items, element.value)
    this.selectedShipping = this.items.find(ship => ship.name === element.value) || {}
    console.log(this.selectedShipping)
  }

  render() {
    console.log(cartStore.isLoading)
    return (
      <CartLayout>
        {this.items.map(item => <div>{item.label}</div>)}
        <RadioComponent options={this.items} onChange={this.handleSelect} selected={this.selectedShipping}/>
        <CartTotal data={this.totals}/>
        <br/>
        <button onClick={this.handleSubmit}>proceed</button>
      </CartLayout>
    );
  }

}
