// smart component! knows about and interacts with redux store
// subscribe and dispatch actions to our store
// uses store's state values
// integrate this component with react router and sidebar
// will pass input handling functions and state info from store to Lyrics.js component
import React, {Component} from 'react';
import store from '../../redux/store';

export default class extends Component {
    constructor() {
        super();
        this.state = store.getState();
    }

    componentDidMount() {
        this.unsuscribe = store.subscribe(() => {
            this.setState(store.getState());
        });
    }

    componentWillMount() {
        this.unsubscribe();
    }

    render() {
        return (
            <h1>Just a container for now!</h1>
        )
    }
}

