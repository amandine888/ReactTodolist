"use-strict";

import React from 'react';  

class List extends React.Component {


    render() {
        return (
            <div>
                <input id="newTask" type="text" value={this.props.List} onChange={this.toggleChange}/>
                <button type="button" onClick={this.addTask}>Add task</button>
            </div>
        );
    }
}

export default List;
