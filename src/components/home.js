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

componentDidMount () {
    const state = localStorage.getItem('state')
    if (state) {
        this.setState(JSON.parse(state))
    }
}

handleChange = (event) => {
    this.setState({
        inputValue: event.target.value}, 
        ()=> console.log(this.state.inputValue));
}

saveToLocalStorage = () => {
    localStorage.setItem('state', JSON.stringify(this.state))
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
            inputValue: "", 
        },
            this.saveToLocalStorage
        );
    }
}

onDelete = (id) =>{
    const data = this.state.tasks.filter((task)=>{
        if (task.id !== id)
            return task
            localStorage.removeItem('state');
    }); 
    this.setState({tasks: data}); 
}

wipTask = (id) => {
    const wip = [...this.state.tasks];
    wip[id].inprogress = !wip[id].inprogress;

    this.setState({
    wip,
    }, 
    this.saveToLocalStorage
    );
}

markedAsDone = (id) => {
    const done = [...this.state.tasks]; 
    done[id].achieve = !done[id].achieve; 

    this.setState({
        done, 
    }, 
    this.saveToLocalStorage
    );
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
