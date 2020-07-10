import React from 'react';
import ReactDOM from 'react-dom';

import './index.css';

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {}
    }

    componentDidMount() {
        // Function called when component mount
    }

    render() {
        return (<div className='app'>Base react project</div>)
    }
}

ReactDOM.render(<App />, document.querySelector('#root'));