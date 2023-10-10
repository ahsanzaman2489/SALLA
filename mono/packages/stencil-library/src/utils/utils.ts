import {cartItem} from "../types";

export const isDevelopment = (): boolean => process.env.NODE_ENV === "development"
export const getTotal = (items: cartItem[]): number => {
  return items.reduce((acc, current) => {
    return acc + current.price.amount;
  }, 0)
}
