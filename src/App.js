//import React, { Component } from 'react';
import React, {useState} from 'react';//THis is for using react hooks and all it's components
import './App.css';
import Person from './Person/Person';

//React Hooks concept
const app = props => {
    //Array deserialization //const []
    //Using useState will override the whole primary data or array with secondary array/state created
    const [personPrevState, personSetState] = useState({//Array deserialization and useState for having both present and prev states
        persons : [
            {name:"Surya", age:28},
            {name:"Chandra", age:29},
            {name:"Rajesh", age:27},
            {name:"Ajay", age:29}
        ]
    });

    const [otherState, otherPrevState] = useState("This is some other value");

    console.log(personPrevState, otherState);

    const buttonHandler = () => {
        personSetState({
            persons :[
                {name:"Surya", age:28},
                {name:"Polina", age:26},
                {name:"Rajesh", age:27},
                {name:"Ajay", age:25}
            ]
        })
    }

    return (
        <div className="App">
            <h1>This is Surya</h1>
            <p>This is the React Application I have started working on.</p>
            <button onClick={buttonHandler}>Click This Button:</button>
            <Person name={personPrevState.persons[0].name} age={personPrevState.persons[0].age}/>
            <Person name={personPrevState.persons[1].name} age={personPrevState.persons[1].age}>My Hobie's are Playing Cricket</Person>
            <Person name={personPrevState.persons[2].name} age={personPrevState.persons[2].age}/>
            <Person name={personPrevState.persons[3].name} age={personPrevState.persons[3].age}/>
        </div>
    );


}

export default app;

// class App extends Component {
//     state = {
//         persons : [
//             {name:"Surya", age:28},
//             {name:"Chandra", age:29},
//             {name:"Rajesh", age:27},
//             {name:"Ajay", age:29}
//         ]
//     }
//     buttonHandler = () => {
//         //console.log("I have clicked Button");
//         //Don't do this, as react won't allow this//this.state.persons[0].name = "Polina";
//         //instead
//         this.setState({
//             persons :[
//                 {name:"Surya", age:28},
//                 {name:"Polina", age:26},
//                 {name:"Rajesh", age:27},
//                 {name:"Ajay", age:25}
//             ]
//         })
//     }
//     render() {
//         return (
//             <div className="App">
//                 <h1>This is Surya</h1>
//                 <p>This is the React Application I have started working on.</p>
//                 <button onClick={this.buttonHandler}>Click This Button:</button>
//                 <Person name={this.state.persons[0].name} age={this.state.persons[0].age}/>
//                 <Person name={this.state.persons[1].name} age={this.state.persons[1].age}>My Hobie's are Playing Cricket</Person>
//                 <Person name={this.state.persons[2].name} age={this.state.persons[2].age}/>
//                 <Person name={this.state.persons[3].name} age={this.state.persons[3].age}/>
//             </div>
//         );
//         //return React.createElement('div', null, )
//     }
// }
//
// export default App;
