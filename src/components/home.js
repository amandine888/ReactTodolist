import React from 'react';
import { withRouter} from 'react-router-dom';
import List from './list';
import Titre from './titre';

class Home extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            inputValue: "",
            tasks: [],
            titre: "TO DO LIST REACT" 
        };
        // this.toggleChange = this.toggleChange.bind(this);
}

// toggleChange(event) {
//     this.setState({
//         inputValue: event.target.value
//     });
// }

// submitTask = (event) => {
//     this.state.tasks.push({name : this.state.inputValue, done:false});
//     this.setState({
//         tasks: this.state.tasks
//     });

// }

    render() {
        return (
            <div>
                <Titre Titre ={this.state.titre}/>
                <List List= {
                    this.state.tasks.map((task, index) => {
                        return (
                            <p>{task}</p>
                        )
                    })
                } />
            </div>
        );
    }
}

export default withRouter(Home);
