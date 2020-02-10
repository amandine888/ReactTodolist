"use-strict";

import React from 'react'; 

class List extends React.Component {

    constructor(props) {
        super(props);
    }

    render (){

        const{idTask, valueTask} = this.props;

        return (
            <div>
                <ul>
                    <li id={idTask}>
                        {valueTask}
                        <button type="button">Done</button>
                        <button type="button">WIP</button>
                        <button type="button">Delete</button>
                    </li>
                </ul>
            </div>
        )
    }
}

export default List;
