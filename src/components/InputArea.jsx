import React, { useState } from 'react';


const InputArea = (props) => {
    const [ item, setItem ] = useState('');

    const handleChange = (e) => {
        const inputValue = e.target.value;
        setItem(inputValue);
    }

    return(
        <div className="form">
          <input 
            type="text" 
            placeholder='Enter New Item'
            onChange={handleChange}
            value={item}
          />
          <button onClick={() => {
              props.onClicked(item);
              setItem('');
          }}>
            <span>Add</span>
          </button>
        </div>
    );
}

export default InputArea;