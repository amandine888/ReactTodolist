"use-strict";
import React from 'react';
import { withRouter} from 'react-router-dom';

// Component : 

import Title from './title';
import InputForm from './inputForm'
import List from './list';

// CSS : 

import "../css/homeStyle.css"

class Home extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            tasks: [],
            inputValue: "",
            title: "my to do list", 
        };

        this.handleChange = this.handleChange.bind(this);
        this.submitTask = this.submitTask.bind(this); 
        this.onDelete = this.onDelete.bind(this); 
        this.wipTask = this.wipTask.bind(this); 
        this.markedAsDone = this.markedAsDone.bind(this); 
}

handleChange = (event) => {
    this.setState({
        inputValue: event.target.value}, 
        ()=> console.log(this.state.inputValue));
}

submitTask = (event) => {
    event.preventDefault()
    const newtask = {
        inputValue: this.state.inputValue, 
        id: Math.random(),
        inprogress: false, 
    }
    if(newtask){
        let tasks = [ ...this.state.tasks, newtask ] //nouveau tableau
        console.log(newtask.id); 

        this.setState({
            tasks,
            inputValue: ""
            });
        }
    }

onDelete = (id) =>{
    const data = this.state.tasks.filter((task)=>{
        if (task.id !== id)
            return task;
    }); 
    this.setState({tasks: data}); 
}

wipTask = (id) => {
    const wip = [...this.state.tasks];
    wip[id].inprogress = !wip[id].inprogress;

    this.setState({
    wip,
    })
}

markedAsDone = (id) => {
    const done = [...this.state.tasks]; 
    done[id].achieve = !done[id].achieve; 

    this.setState({
        done, 
    })
}

    render() {
        return (
            <div className="mainPage">
                <div className="section-elements">
                    <Title Title ={this.state.title}/>
                    <InputForm handleSubmit = {this.submitTask} addValue = {this.state.inputValue} change = {this.handleChange}/>
                </div>
                <div className="listTodo">
                    {this.state.tasks.map((item, index)=>{
                        return (
                            <List
                            key = {item.id}
                            taskId = {item.id}
                            addValue = {item.inputValue}
                            dataProgress = {item.inprogress}
                            dataDone = {item.achieve}
                            taskDelete = {this.onDelete}
                            taskInprogress={() => this.wipTask(index)}
                            taskDone = {() => this.markedAsDone(index)}
                            onClick = {this.state.tasks}/>
                        )
                    })}
                </div>
            </div> 
        )}
}
export default withRouter(Home);
