import React, { useState } from 'react';




const ToDoItem = (props) => {

    const [ strikeText, setStrikeText ] = useState('none');

    const strikeTextFunc = () => {
        strikeText === 'none' ? setStrikeText('line-through') : setStrikeText('none');
    }
    // "line-through"
    return(
        <li 
            style={{textDecoration: strikeText}}
            onClick={strikeTextFunc}
                >{props.item}
        </li>
    );
}

export default ToDoItem;