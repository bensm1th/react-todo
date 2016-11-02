import React from 'react';

const Footer = (props) => {
    let footer;
    if (props.todosExist) {
        footer = (
            <li 
                id="footerList"
                className="list-group-item"
                onClick={e=> props.onClick(e)}
            >
                <div class="btn-toolbar" role="toolbar" aria-label="Toolbar with button groups">
                    items active
                    <div id="filterTodos" className="btn-group btn-group-sm" role="group" aria-label="Basic example">
                        <button type="button" className="btn btn-secondary" id="activeFooter">All</button>
                        <button type="button" className="btn btn-secondary">Active</button>
                        <button type="button" className="btn btn-secondary">Completed</button>
                    </div>
                    <div className="btn-group btn-group-sm pull-right" role="group" aria-label="Basic example">
                        <button type="button" className="btn btn-secondary">Clear completed</button>
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