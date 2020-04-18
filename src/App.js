import React from 'react';
import ListItems from './ListItems';
import './App.css';

class App extends React.Component{

  constructor(props){
    super(props);
    this.state = {
      items: [],
      currentItem: {
        text: '',
        key: ''
      }
    }
    this.handleInput = this.handleInput.bind(this);
    this.addItem = this.addItem.bind(this);
    this.deleteItem = this.deleteItem.bind(this);
    this.updateItem = this.updateItem.bind(this);

  
  }

render(){
  return (
     <div className="App">
       <header>
       <form id="todo-form" onSubmit={this.addItem}>
          <input type="text" placeholder="Enter text..." 
          value={this.state.currentItem.text}
          onChange={this.handleInput}/>
          <button type="submit">Add</button>
       </form>
     </header>
     <ListItems 
     items={this.state.items} 
     deleteItem={this.deleteItem}
     setUpdate={this.updateItem}></ListItems>
     </div>
    )
}
handleInput(e){
  this.setState({
    currentItem:{
      text: e.target.value,
      key: Date.now()
    }
  })
}
addItem(e){
  e.preventDefault();
  const newItem = this.state.currentItem;
  if(newItem.text !== ""){
    const items = [...this.state.items,newItem];
    this.setState({
      items: items,
      currentItem: {
        text: '',
        key: ''
      }
    })
  }
}
deleteItem(key){
  const filteredItems = this.state.items.filter(item => item.key!==key);
  this.setState({
    items:filteredItems
  })
}

updateItem(value,key){
  const items = this.state.items;
  items.map(item => {
    if(item.key ===key){
      item.text = value;
    }
  });
  this.setState({
    items: items
  })
}

}

export default App;
