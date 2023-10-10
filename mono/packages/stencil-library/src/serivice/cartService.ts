import API from './index'

export const getCartItems = () => API.get('/items');
export const getCoupons = () => API.get('/coupons');
export const getCartShipping = () => API.get('/shipping');
export const getCartTotal = (/*query*/) => API.get('/totals');
export const submitCart = () => API.get('/submit');
