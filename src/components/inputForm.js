"use-strict";
import React from 'react'; 

// CSS : 

import "../css/inputStyle.css"; 

class InputForm extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        const {handleSubmit} = this.props;
        const {addValue} = this.props;
        const {change} = this.props;

    return (
        <div class="form-section">
            <form onSubmit={handleSubmit} >
                <div class="form-group col-sm-4 my-1">
                    <label>Add a new task</label>
                    <input type="text" class="form-control" class="input" placeholder="Add task" value={addValue} onChange={change}/>
                    <button class="btn btn-outline-secondary" type="submit">Submit</button>
                </div>
            </form>
        </div>
    );
}
}

export default InputForm ;