import React from 'react';
import TodoListItem from './todo_list_item';

const CompleteTodo = (props) => {
    let deleteButton;
    let display;
    const isCompleted = true;
    const isXEnter = props.isXEnter ? 'xEnter' : '';
    if (props.moused) {
        deleteButton = (
            <i 
                id={isXEnter} 
                className="fa fa-times fa-2x pull-right" 
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
                onMouseOut={props.onMouseOut}
                onClick={props.onClick}
                show={props.show}
                deleteButton={deleteButton}
                id={props.id}
                isCompleted={isCompleted}
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

export default CompleteTodo;
