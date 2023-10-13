import {h} from '@stencil/core';
import {shippingItem} from "../../types";
import {RadioComponent} from "../form/radio-component/radio-component";

export const ShippingListItemComponent = (props: any) => {
  const {item, ...rest} = props;
  return (
    <RadioComponent item={item} {...rest}/>
  );
}

