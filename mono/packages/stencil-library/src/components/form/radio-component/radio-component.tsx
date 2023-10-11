import {h} from '@stencil/core';
import {InputComponent} from "../input-component/input-component";

type SelectProps = any & {
  selected: any,
  options: any
};

export const RadioComponent = (props: SelectProps) => {
  const renderOptions = (options, selected) => {
    return options.map((option) => <span>
      <InputComponent type='radio' value={option.name} name={'shipping'}
                      checked={selected.name === option.name}/> {option.name}
    </span>)
  }
  const {options, selected, ...rest} = props;

  return (
    <div>
      <div {...rest}>
        {renderOptions(options, selected)}
      </div>
    </div>
  );

}
