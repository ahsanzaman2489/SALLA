import {createStore} from "@stencil/store";

const {state, on} = createStore({
  loading: false,
  isCoupon: false,
});

on('set', (prop, value) => {
  state[prop] = value;
});


export default state;
