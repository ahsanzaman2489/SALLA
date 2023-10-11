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
    "amount": string
  }
}

export interface ShippingItem {
  "id": string,
  "name": string,
  "label": string,
  "logo": string,
  "fees": {
    "currency": string,
    "amount": number
  }
}

export interface CartTotalType {
  "name": string,
  "label": string,
  "currency": string,
  "amount": number
}
