import React, { Component } from 'react';
import './css/App.css';

import Input from './components/Input';

class App extends Component {

    constructor(props) {
        super(props);

        this.state = {
        };
    }

    render() {
        return (
            <div className="App">
                <h1>
                    Sometimes we're too hard on ourselves. Write out your negative self talk—let's try to change it up.
                </h1>
                <Input/>
            </div>
        );
    }
}

export default App;
