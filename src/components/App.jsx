import React, { useState } from "react";
import ToDoItem from './ToDoItem';
import InputArea from "./InputArea";

const App = () => {

  const [ items, setItems ] = useState([]);

  const handleClick = (item) => {
    setItems(prevItems => [...prevItems, item]);
  }

  const deleteItem = (id) => {
    setItems(prevItems => {
      return prevItems.filter((items, index) => {
        return index !== id;
      });
    });
  }

  return (
    <div className="container">
      <div className="heading">
        <h1>To-Do List</h1>
      </div>
        <InputArea 
          onClicked={handleClick}
        />
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
