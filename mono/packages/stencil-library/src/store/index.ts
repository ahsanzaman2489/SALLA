import {createStore} from "@stencil/store";
import {shippingItem, couponItem} from "../types";


export interface storeType {
  currency: any,
  //Currency of the store
  isLoading: boolean,
  // if fetching data
  isCoupon: boolean,
  //if coupon is applied
  selectedCoupon: Partial<couponItem>,
  //selected coupon metta
  selectedShipping?: Partial<shippingItem>
  //selected shipping metta
}

const initialState: storeType = {
  currency: 'SAR',
  isLoading: false,
  isCoupon: false,
  selectedCoupon: {},
  selectedShipping: {},
}


const getState = (): storeType => {
  const persistedState = localStorage.getItem('state');
  if (persistedState) {
    return {...initialState, ...JSON.parse(persistedState) || {}}
  } else {
    return initialState;
  }

  //getting Persisted state from localstorage
}


const {state, on, onChange, dispose} = createStore(getState());

const persistState = (state: storeType) => {
  localStorage.setItem('state', JSON.stringify(state));
}

on('set', (prop, value) => {
  state[prop] = value;
  persistState(state)
  //Persisted state to localstorage on every change so it will be available on refresh
});

export const onChangeHandler = onChange;
export const disposeHandler = dispose;
export default state;

