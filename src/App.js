import React, { Component } from 'react';
// import _ from 'lodash';

import Header from './Layout/Header';
import Footer from './Layout/Footer';
import AddIteminput from './Component/AddIteminput';
import Sidebar from './Layout/Sidebar';

class App extends Component {
  state = {
      Itemlist: [
        {
          id: "item-1",
          title: "default",
          done: false
        }
      ],
      updatingItem: false,
      selectItem:   {
        id:"",
        title: "",
        done: false
      }
    }

    selectItem = (oldContent, oldId, newDone) => {
      this.setState({
        ...this.state,
        selectItem:   {
          id: oldId,
          title: oldContent,
          done: newDone
        },
        updatingItem: true
      }, () => {
        console.log(this.state.updatingItem);
      })
    }

    updateItem = (newId, newContent, newDone) => {
      this.deleteItemById(newId).then(() => {
        this.addItem(newContent, newId, newDone);
        this.setState({
          updatingItem: false
        })
      });
    }

    addItem = (title, id) => {
      if (title ==='')
        return;
      id = id ? id : `item-${this.state.Itemlist.length + 1}`;
      console.log(id, title);
      this.setState({
        Itemlist: this.state.Itemlist.concat({
          id,
          title,
          done: false
        }),
        selectItem: {
            id,
            title: "",
            done: false
          }
      }, ()=>console.log(this.state.Itemlist))
    }


    deleteItemById = (id) => {
      this.setState({
        Itemlist: this.state.Itemlist.filter(item => item.id !== id)
      });
      return new Promise((resolve, reject) => {
        resolve("SUCCESS");
      });
    }

    onCheckDone = (id)=>{
      let itemList = this.state.Itemlist;
      for (let i = 0; i < itemList.length; i++) {
        if(itemList[i].id === id) {
          itemList[i].done = itemList[i].done ? false : true;
        }
      }
      this.setState({
        Itemlist: itemList
      });
    }


    _getIndexOfItemById = (id) => {
      let index = 0;
      this.state.Itemlist.forEach((item, i) => {
        if(item.id === id) {
          index = i;
        }
      })
      return index;
    }

    onChangeInput = (newContent, newDone) => {
      this.setState({
        ...this.state,
        selectItem:   {
            ...this.state.selectItem,
            title: newContent,
            done: newDone
          }
      })
    }


  render() {
    return [
      <div key={0} className="page d-flex flex-column">
        <Header />
        <div className="container my-3 d-flex flex-grow-1 ">
        <div className="col-md-12 mt-4 mt-md-0  d-flex align-items-center justify-content-center ">
          <div className="card  d-flex flex-grow-1 mb-0 flex-grow-1 shadow-sm p-3 mb-5 bg-white rounded">
            <div className="card-header shadow-sm p-3 mb-5 ">
              <h3 className=" card-title text-center text-muted">My Todos</h3>
            </div>
            <div className="card-body d-flex flex-grow-1 p-1  ">
              <div className="d-flex flex-grow-1 ">
                <Sidebar
                  onCheckDone={itemId => {
                  this.onCheckDone(itemId);
                  }}
                  Itemlist={this.state.Itemlist}
                  onItemAdded={title => {
                  this.addItem(title);
                  }}
                  onItemClick={(oldContent, oldId, oldDone) => {
                    this.selectItem(oldContent, oldId, oldDone);
                  }}
                  onItemDeleted={id => {
                    this.deleteItemById(id);
                  }}
                  updateItem={(newContent, newDone) => {
                    this.updateItem(newContent, newDone);
                  }}
                />
                <AddIteminput
                   updatingItem={this.state.updatingItem}
                   onItemAdded={this.addItem}
                   selectedItem={this.state.selectItem}
                   onChangeInput={(newContent, newDone) => {
                     this.onChangeInput(newContent, newDone);
                   }}
                   onItemUpdated={(newId, newContent, newDone) => {
                     this.updateItem(newId, newContent, newDone);
                   }}
                 />
              </div>
            </div>
          </div>
        </div>
        </div>
      </div>,
      <Footer key={1} />
    ]
  }
}

export default App;
