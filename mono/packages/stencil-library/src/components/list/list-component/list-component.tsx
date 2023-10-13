import {h} from '@stencil/core';

export const ListComponent = (props: any) => {
  const {data, ListItem, ...rest} = props;
  const renderListItems = (data) => data.map(item => <ListItem item={item} {...rest}/>)
  return (
    <ul>
      {renderListItems(data)}
    </ul>
  );
}
