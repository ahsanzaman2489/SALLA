import {h} from '@stencil/core';
import loading from '../../assets/loading.svg'
import {HTMLStencilElement} from "@stencil/core/internal";

export const LoadingComponent = ({component = <img src={loading} alt={''}/>}: {
  component?: HTMLStencilElement | HTMLElement
}) => component

