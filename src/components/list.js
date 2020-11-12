"use-strict";

import React from 'react'; 
import "../css/listStyle.css"; 

class List extends React.Component {

    constructor(props) {
        super(props);
    }

    render (){

        const{taskId, addValue, taskDelete} = this.props;

        return (
            <div className="newTask-container">
                <ul className="description-container">
                    <li id={taskId}>
                        {addValue}
                    </li>
                </ul>
                <div className="button-container">
                    <button className="btn btn-outline-success btn-sm" type="button">Done</button>
                    <button className="btn btn-outline-warning btn-sm" type="button">WIP</button>
                    <button className="btn btn-outline-danger btn-sm" type="button" onClick= {()=>taskDelete(taskId)}>Delete</button>
                </div>
            </div>
        )
    }
}

export default List;
