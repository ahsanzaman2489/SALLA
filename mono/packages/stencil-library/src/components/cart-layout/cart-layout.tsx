import {h} from '@stencil/core';
import cartStore from "../../store";
import {LoadingComponent} from "../loading-component/loading-component";

export const CartLayout = (_, children): any => {
  const {loading} = cartStore;

  if (loading) {
    return <LoadingComponent/>;
  }

  return (
    <div class={'bg-dark'}>
      {children}
    </div>
  );
}

