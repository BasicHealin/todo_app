
import React from 'react';
//import Sidebar from '../Layout/Sidebar';
//export default class Items extends Component  {
const Items = (props) => {
    let cn = !props.itemDone || "txt-throught text-muted"
    return (
      <div className="col-md-11 d-flex justify-content-between align-items-center shadow-sm  bg-white p-1 mb-3 rounded ">
            <input className="toggle mr-2" type="checkbox" onChange={e =>{
              props.onCheckDone(props.itemId);
            }
            }
            />
            <label className={'flex-grow-1 align-items-center ' + cn}
            onClick={e => {
                 e.preventDefault();
                props.onItemClick(props.title, props.itemId, props.itemDone);
               }}
            >{props.title}</label>
            <a href="#delete" className="text-danger btn p-0" onClick={e => {
                 e.preventDefault();
                props.onItemDeleted(props.itemId);
               }}>
               <i className="fas fa-trash"></i>
            </a>
      </div>
    )
}
export default Items;
