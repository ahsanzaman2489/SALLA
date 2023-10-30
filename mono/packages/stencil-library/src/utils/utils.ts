import {cartItem} from "../types";

export const isDevelopment = (): boolean => process.env.NODE_ENV === "development";
//Getting the environment

export const getItemsTotal = (items: cartItem[]): number => {
  return items.reduce((acc, current) => {
    return acc + current.price.amount;
  }, 0)
}
//Getting total of all items

export const getTotalAfterDiscount = (total: number, discount = {type: '', amount: 0}): number => {
  let {amount = 0} = discount;
  if (typeof amount === 'string') {
    amount = parseInt(amount);
  }

  if (discount.type === 'percentage') {
    return total - (total * amount) / 100
  }

  return 0
}
// getting total after discount is available on shipping page based on the type , for now we have only onw type
