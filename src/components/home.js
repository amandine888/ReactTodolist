"use-strict";
import React from 'react';
import { withRouter} from 'react-router-dom';

// Component : 

import Title from './title';
import InputForm from './inputForm'
import List from './list';

class Home extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            tasks: [],
            inputValue: "",
            title: "My To Do List", 
        };

        this.handleChange = this.handleChange.bind(this);
        this.submitTask = this.submitTask.bind(this)
}

handleChange = (event) => {
    this.setState({
        inputValue: event.target.value}, 
        ()=> console.log(this.state.inputValue));
}

submitTask = (event) => {
    event.preventDefault()
    const newtask = this.state.inputValue
    const key = Math.random();
    if(newtask){
    let copyState = [ ...this.state.tasks, {newtask, key} ] //nouveau tableau
    console.log(copyState); 

    this.setState({
        tasks: copyState,
        inputValue: ""
        });
    }
    }

    render() {

        const tasks = this.state.tasks
        const add = tasks.map(tacheAdd => (
            <div key = {tacheAdd.key}>
                <li>
                    {tacheAdd.newtask}
                </li>
                <button type="button">Done</button>
                <button type="button">WIP</button>
                <button type="button">Delete</button>
            </div>
        )) 
        return (
            <div className="mainPage" style={{display:"flex", flexDirection:"column", justifyContent:"center", alignItems:"center", backgroundColor:"#F6E4F6", height:"100vh"}}>
                <div className="section-elements" style={{backgroundColor:"white", borderRadius:"8%", height:"50vh", width:"40vw", display:"flex", flexDirection:"column", justifyContent:"center", alignItems:"center"}}>
                    <Title Title ={this.state.title}/>
                    <InputForm handleSubmit = {this.submitTask} addValue = {this.state.inputValue} change = {this.handleChange}/>
                    <div>
                        <ul>
                            {add}
                        </ul>
                    </div>
                    <div className="listTodo">
                                <List></List>
                    </div>
                </div>
            </div> 
        )}
}
export default withRouter(Home);
