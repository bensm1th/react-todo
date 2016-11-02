import React, { Component } from 'react';

const TodoInput = (props) => {

    return (
        <div className="row">
            <div className="col-md-6 offset-md-3">
                <form id="todoInput" onSubmit={(e)=> props.onSubmit(e)}>
                    <div className="form-group">
                        <div className="input-group">
                            <span className="input-group-addon">
                                <i 
                                    className="fa fa-chevron-down fa-lg" 
                                    aria-hidden="true"
                                    onClick={(e)=> props.onClick()}
                                ></i>
                            </span>
                            <input 
                                placeholder="What needs to be done?"
                                aria-describedby="basic-addon1"
                                type="text"
                                className="form-control"
                                onChange={(e)=> props.onChange(e.target.value)}
                                value={props.value}
                            />
                        </div>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default TodoInput;