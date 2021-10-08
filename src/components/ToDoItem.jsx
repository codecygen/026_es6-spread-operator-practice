import React, { useState } from 'react';




const ToDoItem = (props) => {

    const [ isDone, setIsDone ] = useState(false);

    const handleClick = () => {
        setIsDone(prevValue => {
            return !prevValue;
        });
    }
    // "line-through"
    return(
        <li 
            style={{textDecoration: isDone ? 'line-through' : 'none'}}
            onClick={() => {
                handleClick();
                props.onChecked();
            }}
                >{props.item}
        </li>
    );
}

export default ToDoItem;