import {h} from '@stencil/core';

type SelectProps = any & {
  selected: any,
  options: any
};

export const SelectComponent = (props: SelectProps) => {
  const renderOptions = (options, selected) => {
    return options.map((option) => <option value={options.name}
                                           selected={selected.name === option.name}>{option.name}</option>)
  }
  const {options, selected, ...rest} = props;

  return (
    <div>
      <select {...rest}>
        {renderOptions(options, selected)}
      </select>
    </div>
  );

}
