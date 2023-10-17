export interface cartItem {
  "id": string,
  "label": string,
  "thumbnail": string,
  "qty": number,
  "price": {
    "currency": string,
    "amount": number
  }
}

export interface couponItem {
  "id": string,
  "name": string,
  "label": string,
  "discount": {
    "type": string,
    "amount": number
  }
}

export interface shippingItem {
  "id": string,
  "name": string,
  "label": string,
  "logo": string,
  "fees": {
    "currency": string,
    "amount": number
  }
}

export interface cartTotalType {
  "name": string,
  "label": string,
  "currency": string,
  "amount": number
}
