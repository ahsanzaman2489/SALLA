import {Component, h, Prop, State, Watch} from '@stencil/core';
import {CartLayout} from "../cart-layout/cart-layout";
import {getCartShipping, getCartTotal} from "../../serivice/cartService";
import {CartTotalType, ShippingItem} from "../../types";
import cartStore from "../../store";
import {AxiosError, AxiosResponse} from "axios";
import {SelectComponent} from "../form/select-component/select-component";
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
  @State() items: ShippingItem[] = [];
  @State() selectedShipping: Partial<ShippingItem> = {};
  @State() totals: CartTotalType[] = []

  @Prop() submitCallback: Function = () => {
  };

  componentDidLoad() {
    cartStore.loading = true;
    return getCartShipping().then((res: AxiosResponse) => {
      if (res.status === 200 && res.data.data) {
        this.items = res.data.data;
      }

      cartStore.loading = false;
    }).catch((e: AxiosError) => {
      console.log(e);
      cartStore.loading = false;
    })
  }

  @Watch('items')
  @Watch('selectedShipping')
  watchMultiple(newItems: ShippingItem[] | any, oldValue: boolean, propName: string) {
    if (newItems.length > 0 && propName === 'items') {
      this.selectedShipping = newItems[0] //By Default selecting first item in shipping array
    }

    if (Object.keys(newItems).length > 0 && propName === 'selectedShipping') {
      this.selectedShipping = newItems;
      this.fetchTotal();
    }
  }
  
  fetchTotal = async () => {
    try {
      const query = querystring.stringify({
        coupon: cartStore.isCoupon,
        shipping: this.selectedShipping.name
      }, {})
      console.log(query)
      const res = await getCartTotal(query);
      if (res.status === 200 && res.data.data) {
        this.totals = res.data.data;
      }
    } catch (e) {
      console.log(e)
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
    const element = event.currentTarget as HTMLSelectElement;
    console.log(this.items, element.value)
    this.selectedShipping = this.items.find(ship => ship.name === element.value)
    console.log(this.selectedShipping)
  }

  render() {
    return (
      <CartLayout>
        {this.items.map(item => <div>{item.label}</div>)}
        <SelectComponent options={this.items} onInput={this.handleSelect} selected={this.selectedShipping}/>
        <CartTotal data={this.totals}/>
        <br/>
        <button onClick={this.handleSubmit}>proceed</button>
      </CartLayout>
    );
  }

}
