"use-strict";

import React from 'react';  

class InputForm extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        const {handleSubmit} = this.props;
        const {addValue} = this.props;
        const {change} = this.props;

    return (
        <div>
            <form onSubmit={handleSubmit} >
                <input type="text" value={addValue} onChange={change}/>
                <button type="submit" >Add task</button>
            </form>
        </div>
    );
}
}

export default InputForm ;