import {Component, Host, h} from '@stencil/core';

export const InputComponent = (props) => {
  return (
    <div><input {...props}/></div>
  );
}
