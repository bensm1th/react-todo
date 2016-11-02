import React from 'react';
import TodoListItem from './todo_list_item';
import EditTodo from './edit_todo';

const ToDo = (props) => {
    let deleteButton;
    let display;
    const isXEnter = props.isXEnter ? 'xEnter' : '';
    if (props.moused) {
        deleteButton = (
            <i 
                id={isXEnter}
                className="fa fa-times pull-right  fa-2x" 
                aria-hidden="true"
                onMouseEnter={(e)=> props.onXEnter(props.id)}
                onMouseLeave={(e)=> props.onXLeave()}
                onClick={(e)=> props.onDelete(props.id)}
            ></i>
        );

    }
    if (!props.isDouble) {
        display = (
            <TodoListItem 
                onMouseEnter={props.onMouseEnter} 
                onMouseLeave={props.onMouseLeave}
                onClick={props.onClick}
                show={props.show}
                deleteButton={deleteButton}
                id={props.id}
                onDoubleClick={props.onDoubleClick}
            />
        );
    }
    if (props.isDouble) {
        display = (
            <EditTodo 
                value={props.editTodo} 
                onChange={props.onChange}
                onSubmit={props.onSubmit}
                id={props.id}
            />
        );
    }
    return (
            <div className="row">
                <div className="col-md-6 offset-md-3">
                    {display}
                </div>
            </div>
    );
}

export default ToDo;