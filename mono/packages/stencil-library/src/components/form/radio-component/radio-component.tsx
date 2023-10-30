import {h} from '@stencil/core';
import {InputComponent} from "../input-component/input-component";

type SelectProps = any & {
  selected: any,
  item: any
};

export const RadioComponent = (props: SelectProps) => {
  const {item, selected, ...rest} = props;
  //Item is single item from the array and selected is the selected items

  // render input radio component with all props;
  return (
    <div>
      <div {...rest}>

        <InputComponent type='radio' value={item.name} name={'shipping'}
                        checked={selected.name === item.name}/>
      </div>
    </div>
  );

}
