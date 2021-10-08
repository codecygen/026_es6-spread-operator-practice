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
    alert('hi');
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
              <ToDoItem 
                key={index}
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
