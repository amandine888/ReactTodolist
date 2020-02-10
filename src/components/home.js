import React from 'react';
import { withRouter} from 'react-router-dom';
import Titre from './titre';
import InputForm from './inputForm'
import List from './list';

class Home extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            tasks: [],
            inputValue: "",
            titre: "TO DO LIST REACT", 
        };

        this.handleChange = this.handleChange.bind(this);
        this.submitTask = this.submitTask.bind(this)
}

handleChange(event) {
    this.setState({
        inputValue: event.target.value
    }, ()=> console.log(this.state.inputValue));
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
            </div>
        )) 
        return (
            <div className="mainPage">
                <Titre Titre ={this.state.titre}/>
                <InputForm handleSubmit = {this.submitTask} addValue = {this.state.inputValue} change = {this.handleChange}/>
                <div>
                    <ul>
                        {add}
                    </ul>
                </div>
                <div className="listTodo">
                            <List
                            // key={item.id}
                            // idTask={item.id}
                            // valueTask={item.inputValue}
                            >
                            </List>
                </div>
            </div> 
        )}
}
export default withRouter(Home);
