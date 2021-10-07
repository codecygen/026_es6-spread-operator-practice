import React, { useState } from "react";
import List from './List';

const App = () => {
  const [ item, setItem ] = useState('');
  const [ items, setItems ] = useState([]);

  const handleChange = (e) => {
  const inputValue = e.target.value;
  setItem(inputValue);
  }

  const handleClick = () => {
    setItems(prevItems => [...prevItems, item]);
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
              <List 
                key={index}
                item={currentItem}
              />
            );
          })}
        </ul>
      </div>
    </div>
  );
}

export default App;
