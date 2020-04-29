import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {
    render() {
        return (
            <div className="App">
                <h1>This is Surya</h1>
                <p>This is the React Application I have started working on.</p>
                <Person name="Surya" age="28"/>
                <Person name="Chandra" age="29">My Hobie's are Playing Cricket</Person>
                <Person name="Rajesh" age="27"/>
                <Person name="Ajay" age="29"/>
            </div>
        );
        //return React.createElement('div', null, )
    }
}

export default App;
