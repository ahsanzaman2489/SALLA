import {cartItem} from "../types";

export const isDevelopment = (): boolean => process.env.NODE_ENV === "development";

export const getItemsTotal = (items: cartItem[]): number => {
  return items.reduce((acc, current) => {
    return acc + current.price.amount;
  }, 0)
}

export const getTotalAfterDiscount = (total: number, discount: { type: string, amount: string | number }): number => {

  if (typeof discount.amount === 'string') {
    discount.amount = parseInt(discount.amount);
  }

  if (discount.type === 'percentage') {
    return total - (total * discount.amount) / 100
  }

  return 0
}
