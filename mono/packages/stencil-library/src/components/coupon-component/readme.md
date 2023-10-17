# coupon-component



<!-- Auto Generated Below -->


## Properties

| Property             | Attribute         | Description | Type                                                                                            | Default       |
| -------------------- | ----------------- | ----------- | ----------------------------------------------------------------------------------------------- | ------------- |
| `currency`           | `currency`        |             | `string`                                                                                        | `undefined`   |
| `discountAmount`     | `discount-amount` |             | `number`                                                                                        | `undefined`   |
| `handleCouponSubmit` | --                |             | `Function`                                                                                      | `() => {   }` |
| `selectedCoupon`     | --                |             | `{ id?: string; name?: string; label?: string; discount?: { type: string; amount: number; }; }` | `undefined`   |


## Dependencies

### Used by

 - [cart-component](../cart-component)

### Graph
```mermaid
graph TD;
  cart-component --> coupon-component
  style coupon-component fill:#f9f,stroke:#333,stroke-width:4px
```

----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*
