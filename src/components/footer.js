import React from 'react';

const Footer = (props) => {
    let footer;
    const clear = 'clear';
    const all = 'all';
    const completed = 'completed';
    const active = 'active';
    const activeFooter = props.activeFooter;
    if (props.todosExist) {
        footer = (
            <li 
                id="footerList"
                className="list-group-item"
            >
                <div className="btn-toolbar" role="toolbar" aria-label="Toolbar with button groups">
                    {props.activeCount + " "}items active
                    <div id="filterTodos" className="btn-group btn-group-sm" role="group" aria-label="Basic example">
                        <button onClick={e=> props.onClick(e, all)} type="button" className="btn btn-secondary" id={activeFooter === all ? "activeFooter" : ""}>All</button>
                        <button onClick={e=> props.onClick(e, active)} type="button" className="btn btn-secondary" id={activeFooter === active ? "activeFooter" : ""}>Active</button>
                        <button onClick={e=> props.onClick(e, completed)} type="button" className="btn btn-secondary" id={activeFooter === completed ? "activeFooter" : ""}>Completed</button>
                    </div>
                    <div className="btn-group btn-group-sm pull-right" role="group" aria-label="Basic example">
                        <button 
                            onClick={e=> props.onClick(e, clear)} type="button" className="btn btn-secondary" 
                            id={activeFooter === clear ? "activeFooter" : ""}
                        >Clear completed</button>
                    </div>
                </div>
            </li>
        );
    } else {
        footer = "";
    }
    return (
            <div className="row">
                <div className="col-md-6 offset-md-3">
                    {footer}
                </div>
            </div>
    );
}

export default Footer;