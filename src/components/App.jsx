import React, { useState } from "react";





const App = () => {
  const [ item, setItem ] = useState('');
  const [ submittedItems, setSubmittedItems ] = useState('');

  const handleChange = (e) => {
  const inputValue = e.target.value;
  setItem(inputValue);
  }

  const handleClick = () => {
    setSubmittedItems(item);
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
          // value=
        />
        <button onClick={handleClick}>
          <span>Add</span>
        </button>
      </div>
      <div>
        <ul>
          <li>{submittedItems}</li>
        </ul>
      </div>
    </div>
  );
}

export default App;
