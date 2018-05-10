
import React from 'react';

import Items from '../Component/Items';
// import AddIteminput from '../Component/AddIteminput';

const Sidebar = (props) => {

  return (
    <div className="col-md-7 border-right ">
      {props.Itemlist.filter(item => item.id !== 'item-1').map(itemObject => (
        <Items key={itemObject.id}
          onCheckDone={props.onCheckDone}
          itemId={itemObject.id}
          title={itemObject.title}
          itemDone={itemObject.done}
          onItemClick={props.onItemClick}
          onItemDeleted={props.onItemDeleted}
          updateItem= {props.updateItem}/>
      ))}
    </div>
  )
}

export default Sidebar;
