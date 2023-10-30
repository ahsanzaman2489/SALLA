import {h} from '@stencil/core';
import './cart-layout-header.css'
import cartStore from "../../../store";

interface propType {
  logo: any,
  storeName: string,
  page: string[],
  backComponent: any,
}

export const CartLayoutHeader = (props: propType) => {
  const {
    logo, storeName, page = [], backComponent = ''
  } = props;
  const renderBreadCrumbs = (page) => {
    return page.map((item, index) => {
      const isLast = index != page.length - 1
      return <span> <span
        class={!isLast ? 'cart-header-current color-secondary' : 'underline cursor-pointer color-secondary-lite'}>{item}</span>
        {isLast &&
          <span class='color-secondary-lite'> /</span>} </span>;
    });
  }


  return (
    <div class='cart-header'>
      <div class='flex flex-row items-center'>
        <div class='cart-header-logo'>{logo}</div>
        <div class='ml-4'>
          <div class='cart-header-store-name color-primary text-left'>{storeName}</div>
          <p class='cart-header-breadcrumbs'>{renderBreadCrumbs(page)}</p>
        </div>
      </div>
      <div class='cart-header-divider my-5'>
        {!cartStore.isLoading && <div class='flex justify-center items-center'>
          <div class='cart-header-divider-title color-primary'>{backComponent}</div>
          <div class='cart-header-divider-line ml-4 rounded-md w-[100%]'></div>
        </div>}

      </div>
    </div>
  );
}

