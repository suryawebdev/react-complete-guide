import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {
    render() {
        return (
            <div className="App">
                <h1>This is Surya</h1>
                <p>This is the React Application I have started working on.</p>
                <Person />
                <Person />
                <Person />
                <Person />
            </div>
        );
        //return React.createElement('div', null, )
    }
}

export default App;
