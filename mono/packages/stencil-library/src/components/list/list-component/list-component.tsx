import {h} from '@stencil/core';

export const ListComponent = (props: any) => {
  const {data = [], ListItem, listProps, ...rest} = props;
  const renderListItems = (data) => data.map((item, index) => <ListItem item={item}
                                                                        currentIndex={index}
                                                                        totalItems={data.length}
                                                                        {...rest}/>
  )



  return (
    <ul {...listProps}>
      {renderListItems(data)}
    </ul>
  );
}

