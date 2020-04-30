import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {
    state = {
        persons : [
            {name:"Surya", age:28},
            {name:"Chandra", age:29},
            {name:"Rajesh", age:27},
            {name:"Ajay", age:29}
        ]
    }
    buttonHandler = () => {
        //console.log("I have clicked Button");
        //Don't do this, as react won't allow this//this.state.persons[0].name = "Polina";
        //instead
        this.setState({
            persons :[
                {name:"Surya", age:28},
                {name:"Polina", age:26},
                {name:"Rajesh", age:27},
                {name:"Ajay", age:25}
            ]
        })
    }
    render() {
        return (
            <div className="App">
                <h1>This is Surya</h1>
                <p>This is the React Application I have started working on.</p>
                <button onClick={this.buttonHandler}>Click This Button:</button>
                <Person name={this.state.persons[0].name} age={this.state.persons[0].age}/>
                <Person name={this.state.persons[1].name} age={this.state.persons[1].age}>My Hobie's are Playing Cricket</Person>
                <Person name={this.state.persons[2].name} age={this.state.persons[2].age}/>
                <Person name={this.state.persons[3].name} age={this.state.persons[3].age}/>
            </div>
        );
        //return React.createElement('div', null, )
    }
}

export default App;
