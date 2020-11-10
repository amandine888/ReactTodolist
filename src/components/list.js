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
            <div>
                <ul className="list-container">
                    <li id={taskId}>
                        {addValue}
                    </li>
                </ul>
                <button type="button">Done</button>
                <button type="button">WIP</button>
                <button type="button" onClick= {()=>taskDelete(taskId)}>Delete</button>
            </div>
        )
    }
}

export default List;
