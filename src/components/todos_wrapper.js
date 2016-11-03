import React, { Component } from 'react';
import TodoInput from './todo_input';
import Todo from './todo';
import CompleteTodo from './complete_todo';
import Footer from './footer';


export default class TodoWrapper extends Component {
    constructor(props) {
        super(props);

        this.state = {
            todo: "",
            todoList: [],
            editTodo: "",
            showActiveOnly: false,
            showCompletedOnly: false,
            activeFooter: 'all'
        }
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleClick = this.handleClick.bind(this);
        this.handleMouseEnter = this.handleMouseEnter.bind(this);
        this.handleMouseLeave = this.handleMouseLeave.bind(this);
        this.handleXEnter = this.handleXEnter.bind(this);
        this.handleXLeave = this.handleXLeave.bind(this);
        this.handleDelete = this.handleDelete.bind(this);
        this.handleCompleteAll = this.handleCompleteAll.bind(this);
        this.handleDoubleClick = this.handleDoubleClick.bind(this);
        this.handleEditChange = this.handleEditChange.bind(this);
        this.handleEditSubmit = this.handleEditSubmit.bind(this);
        this.handleShowClick = this.handleShowClick.bind(this);
        this.handleEditMouseLeave = this.handleEditMouseLeave.bind(this);
        this.handleClearCompleted = this.handleClearCompleted.bind(this);
    }
    
    handleCompleteAll() {
        let count = 0;
        const anyComplete = this.state.todoList.forEach(element=> {
            return element.isComplete ? count++ : count;
        });
        if (count !== this.state.todoList.length) {
            const all = this.state.todoList.map(element=> {
                element.isComplete = true;
                return element;
            });
            this.setState({todoList: all});
        } else {
            const all = this.state.todoList.map(element=> {
                element.isComplete = false;
                return element;
            });
            this.setState({todoList: all});
        }
        
    }

    handleDelete(id) {
        const filtered = this.state.todoList.filter(element=> {
            return element.id !== id;
        });
        this.setState({todoList: filtered});
    }

    handleClearCompleted() {
        const filtered = this.state.todoList.filter(element=> {
            return !element.isComplete;
        });
        this.setState({todoList: filtered});
    }

    handleChange(todo) {
        this.setState({todo: todo});
    }

    handleEditChange(todo) {
        this.setState({editTodo: todo})
    }
    
    handleSubmit(e) {
        e.preventDefault();
        const newTodo = {
            id: makeId(),
            todo: this.state.todo,
            isComplete: false,
            isMouseOver: false,
            isXEnter: false,
            isDouble: false,
        }
        this.setState({
            todoList: [...this.state.todoList, newTodo],
            todo: ""
        });
    }

    handleClick(id) { 
        const complete = this.state.todoList.map(element => {
            element.isComplete = element.id === id ? !element.isComplete : element.isComplete;
            return element;
        });
        this.setState({todoList: complete});
    }

    handleMouseEnter(id) {
        const moused = this.state.todoList.map(element => {
            element.isMouseOver = element.id === id ? true : false;
            return element;
        });
        this.setState({todoList: moused});
    }

    handleMouseLeave() {
        const moused = this.state.todoList.map(element => {
            element.isMouseOver = false;
            return element;
        });
        this.setState({todoList: moused});

    }

    handleXEnter(id) {
        const moused = this.state.todoList.map(element => {
            element.isXEnter = element.id === id ? true : false;
            return element;
        });
        this.setState({todoList: moused});
    }

    handleXLeave() {
        const moused = this.state.todoList.map(element => {
            element.isXEnter = false;
            return element;
        });
        this.setState({todoList: moused});
    }

    handleDoubleClick(id, todo) {
        if (!this.state.editTodo) {
            const double = this.state.todoList.map(element => {
                element.isDouble = element.id === id ? !element.isDouble : element.isDouble; 
                return element;
            });
            this.setState({todoList: double, editTodo: todo});
        }
        return;
    }

    handleEditSubmit(e, id) {
         e.preventDefault();
        
        const editedList = this.state.todoList.map(element=> {
            if (element.id === id) {
                const editTodo = {
                    id: id,
                    todo: this.state.editTodo,
                    isComplete: element.isComplete,
                    isMouseOver: false,
                    isXEnter: false,
                    isDouble: false,
                }
                return editTodo
            }
            return element;
        });
        this.setState({
            todoList: editedList,
            todo: "",
            editTodo: ""
        });
    }

    handleEditMouseLeave(e, id) {
        this.handleEditSubmit(e, id);
    }

    handleShowClick(e, type) {
        if (type === 'clear') {
            this.handleClearCompleted();
            return this.setState({activeFooter: 'all'});
        }
        this.setState({activeFooter: type});
    }

    countActiveTodos() {
        return this.state.todoList.filter(element => {
            return !element.isComplete;
        }).length;
    }

    createTodos() {
        return this.state.todoList.map((todo)=> {
            if (todo.isComplete  && !todo.isDouble) {
                if (this.state.activeFooter ==="active") {
                    return;
                } else {
                    return (
                    <CompleteTodo
                        show={todo.todo}
                        onClick={this.handleClick}
                        key={todo.id}
                        id={todo.id}
                        onMouseEnter={this.handleMouseEnter}
                        onMouseLeave={this.handleMouseLeave}
                        moused={todo.isMouseOver}
                        onXEnter={this.handleXEnter}
                        onXLeave={this.handleXLeave}
                        isXEnter={todo.isXEnter}
                        onDelete={this.handleDelete}
                        onDoubleClick={this.handleDoubleClick}
                        isDouble={todo.isDouble}
                        editTodo={this.state.editTodo}
                        onChange={this.handleEditChange}
                        onSubmit={this.handleEditSubmit}
                        onEditLeave={this.handleEditMouseLeave}
                    />
                    )
                }
            } else {
                if (this.state.activeFooter === 'completed') {
                    return;
                } else {
                return (
                    <Todo 
                        show={todo.todo}
                        onClick={this.handleClick}
                        key={todo.id}
                        id={todo.id}
                        onMouseEnter={this.handleMouseEnter}
                        onMouseLeave={this.handleMouseLeave}
                        moused={todo.isMouseOver}
                        onXEnter={this.handleXEnter}
                        onXLeave={this.handleXLeave}
                        isXEnter={todo.isXEnter}
                        onDelete={this.handleDelete}
                        onDoubleClick={this.handleDoubleClick}
                        isDouble={todo.isDouble}
                        editTodo={this.state.editTodo}
                        onChange={this.handleEditChange}
                        onSubmit={this.handleEditSubmit}
                        onEditLeave={this.handleEditMouseLeave}
                    />
                    )
                }
            }
        });
    }
   
    render() {
        return (
            <div className="container">
                <div className="row">
                    <div className="col-md-6 offset-md-3" id="hero">
                        <h2> 
                            <img src="https://platform-user-uploads.s3.amazonaws.com/blog/category/logo/291/react.png" /> 
                            <span id="react">React</span> Todo List
                        </h2>
                    </div>
                </div>
                <TodoInput 
                    onChange={this.handleChange}
                    onSubmit={this.handleSubmit}
                    value={this.state.todo}
                    onClick={this.handleCompleteAll}
                />
                <ul className="list-group">
                    {this.createTodos()}
                    <Footer 
                        todosExist={this.state.todoList.length}
                        onClick={this.handleShowClick}
                        activeFooter={this.state.activeFooter}
                        activeCount={this.countActiveTodos()}
                    />
                </ul>  
                <div className="row">
                    <div className="col-md-6 offset-md-3" id="footerText">
                        <div>
                            Double-click to edit a todo
                        </div>
                        <br/>
                        <div>
                            Written by Benjamin Smith
                        </div>
                        
                    </div>
                </div>     
            </div>
        );
    }
}

function makeId() {
    var text = "";
    var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

    for( var i=0; i < 5; i++ )
        text += possible.charAt(Math.floor(Math.random() * possible.length));

    return text;
}