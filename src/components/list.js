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
                    </li>
                </ul>
            </div>
        )
    }
}

export default List;
