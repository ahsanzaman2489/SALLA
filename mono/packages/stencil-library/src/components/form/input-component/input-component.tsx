import {h} from '@stencil/core';

export const InputComponent = (props: any) => {
  // render input component with all props;
  return (
    <input {...props}/>
  );
}
