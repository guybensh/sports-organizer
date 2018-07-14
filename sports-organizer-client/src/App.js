import React, { Component } from 'react';
import axios from 'axios';
import './App.css';

class App extends Component {

    constructor(props) {
        super(props);
        this.state = {
            loading: true
        }
    }

    componentDidMount() {
        axios({
            method: 'get',
        	url: '/users',
        }).then(({ data }) => {
            this.setState({data})
        }).catch(error => {
            this.setState({data: []})
        }).finally(() => this.setState({loading: false}));
    }

    render() {
        const { loading, data } = this.state;
        return(
            loading === true ?
            <div>Loading...</div> :
            <div>
                {
                    Object.keys(data).map((user) => (
                        <div key={ user }>
                            { data[user].name + " - " + data[user].gender }
                        </div>
                    ))
                }
            </div>
        );
    }
}



export default App;
