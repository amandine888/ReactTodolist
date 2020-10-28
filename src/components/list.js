"use-strict";

import React from 'react'; 
import "../css/listStyle.css"; 

class List extends React.Component {

    constructor(props) {
        super(props);
    }

    render (){

        const{idTask, valueTask} = this.props;

        return (
            <div>
                <ul className="list-container">
                    <li id={idTask}>
                        {valueTask}
                    </li>
                </ul>
            </div>
        )
    }
}

export default List;
