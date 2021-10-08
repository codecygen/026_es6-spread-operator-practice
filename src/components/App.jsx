import React, { useState } from "react";
import ToDoItem from './ToDoItem';

const App = () => {
  const [ item, setItem ] = useState('');
  const [ items, setItems ] = useState([]);

  const handleChange = (e) => {
  const inputValue = e.target.value;
  setItem(inputValue);
  }

  const handleClick = () => {
    setItems(prevItems => [...prevItems, item]);
    setItem("");
  }

  const deleteItem = () => {
    
  }

  return (
    <div className="container">
      <div className="heading">
        <h1>To-Do List</h1>
      </div>
      <div className="form">
        <input 
          type="text" 
          placeholder='Enter New Item'
          onChange={handleChange}
          value={item}
        />
        <button onClick={handleClick}>
          <span>Add</span>
        </button>
      </div>
      <div>
        <ul>
          {items.map((currentItem, index) => {
            return(
              // we used id as an index key too because props have no
              // way of accessing "key" key.
              // id will be used to delete the item.
              // Normally the index value that is passed from map, is not suggested
              // To be used as a value. For a real project look online for alternative
              // solutions
              <ToDoItem 
                key={index}
                id={index}
                item={currentItem}
                onChecked={deleteItem}
              />
            );
          })}
        </ul>
      </div>
    </div>
  );
}

export default App;
