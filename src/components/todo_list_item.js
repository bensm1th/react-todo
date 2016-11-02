import React from 'react';

const TodoListItem = (props) => {
    const completedClass = props.isCompleted ? 'complete' : '';
    const circleIcon = props.isCompleted ? "fa fa-check-circle-o fa-2x" : "fa fa-circle-o fa-2x";
    const strikeThrough = props.isCompleted ? 'strikeThrough' : '';
    return (
        <li 
            className="list-group-item"
            onMouseEnter={(e)=> props.onMouseEnter(props.id)}
            onMouseLeave={(e)=> props.onMouseLeave()}
            onDoubleClick={(e)=>props.onDoubleClick(props.id, props.show)}
            id={completedClass}
        >
            <i 
                className={circleIcon} 
                aria-hidden="true"
                onClick={(e)=> props.onClick(props.id)} 
            ></i>
            <span id={strikeThrough}>{props.show}</span>
            {props.deleteButton}
        </li>
    )
}

export default TodoListItem;