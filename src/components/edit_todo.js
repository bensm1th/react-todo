import React from 'react';

const EditTodo = (props) => {
    return (
            <form 
                onSubmit={(e)=> props.onSubmit(e, props.id)}
                
            >
                <div className="input-group input-group-lg">
                    
                    <input 
                        className="form-control" 
                        aria-describedby="basic-addon1"
                        value={props.value}
                        onChange={(e)=> props.onChange(e.target.value)}
                        onBlur={(e)=> props.onEditLeave(e, props.id)}
                    />  
                </div>
            </form>
        );
}

export default EditTodo;
/*
<span className="input-group-addon" id="basic-addon1">
                        <i type="text" className="fa fa-pencil-square-o" aria-hidden="true"></i>
                    </span>
*/