import React from 'react';
import { withRouter} from 'react-router-dom';
import List from './list';
import Titre from './titre';

class Home extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            titre: "TO DO LIST REACT" 
        };
}

    render() {
        return (
            <div>
                <Titre/>
                <List name="list_one" />
            </div>
        );
    }
}

export default withRouter(Home);
