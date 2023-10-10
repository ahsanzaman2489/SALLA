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
  "id"?: string,
  "name"?: string,
  "label"?: string,
  "discount"?: {
    "type": string,
    "amount": string
  }
}
