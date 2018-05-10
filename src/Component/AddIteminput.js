import React from 'react';

const AddIteminput = (props) => {
    return (
      <div className="col-md-5 add-todo-container">
        <textarea className="textarea col-md-12"  placeholder="Todo title" value={props.selectedItem.title}
            onChange={(e) => {
              props.onChangeInput(e.target.value, props.selectedItem.done)
            }
            }
            aria-label="new item title" >
        </textarea>
        {props.updatingItem
          ? <button className="col-md-12 mt-2"  onClick={(e) => {
              props.onItemUpdated(props.selectedItem.id, props.selectedItem.title);
            }}>Update Item</button>
          : <button className="col-md-12 mt-2"  onClick={(e) => {
                props.onItemAdded(props.selectedItem.title, props.selectedItem.done);
              }}>Add new todo</button>}


      </div>
    )
}

export default AddIteminput;
