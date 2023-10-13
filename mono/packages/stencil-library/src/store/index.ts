import {createStore} from "@stencil/store";
import {shippingItem, couponItem} from "../types";


export interface storeType {
  isLoading: boolean,
  isCoupon: boolean,
  selectedCoupon: Partial<couponItem>,
  selectedShipping?: Partial<shippingItem>
}

const initialState: storeType = {
  isLoading: false,
  isCoupon: false,
  selectedCoupon: {},
  selectedShipping: {}
}

const getState = (): storeType => {
  const persistedState = localStorage.getItem('state');
  if (persistedState) {
    return {...initialState, ...JSON.parse(persistedState) || {}}
  } else {
    return initialState;
  }
}

const {state, on, onChange} = createStore(getState());

const persistState = (state: storeType) => {
  localStorage.setItem('state', JSON.stringify(state));
}

on('set', (prop, value) => {
  state[prop] = value;
  persistState(state)
});

export const onChangeHandler = onChange;
export default state;

