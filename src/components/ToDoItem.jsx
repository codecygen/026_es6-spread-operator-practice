import React, { useState } from 'react';




const ToDoItem = (props) => {

    const [ isDone, setIsDone ] = useState(false);

    // prevValue is a hooks term, it takes isDone's previous value as an argument
    const handleClick = () => {
        setIsDone(prevValue => {
            return !prevValue;
        });
    }
    
    return(
        <li 
            // You can use ternary operator inside the style
            style={{textDecoration: isDone ? 'line-through' : 'none'}}
            // onClick even can take multiple functions.
            // for a single function it should be onClick={handleClick}
            onClick={() => {
                handleClick();
                // You can only call props.id argument inside the function
                // if you have a function like this.
                // It does not work like onClick={props.onChecked(props.id)}
                // Because in that case the function will be called immediately.
                props.onChecked(props.id);
            }}
                >{props.item}
        </li>
    );
}

export default ToDoItem;