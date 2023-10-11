import {h} from '@stencil/core';

export const ListComponent = (props: { data: any[], ListItem: any }) => {
  const {data, ListItem} = props;
  const renderListItems = (data: any[]) => data.map(item => <ListItem item={item}/>)
  console.log(data)
  return (
    <ul>
      {renderListItems(data)}
    </ul>
  );
}
