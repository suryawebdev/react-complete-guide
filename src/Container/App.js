import React, { Component } from 'react';

import CSSClasses from './App.module.css';
import Persons from '../Components/Persons/Persons';
import Cockpit from '../Components/Cockpit/Cockpit';
import withClass from '../Hoc/WithClass';
import Aux from '../Hoc/Aux';
import AuthContext from '../context/auth-context';

class App extends Component {
    constructor(props) {
        super(props);
        console.log("1.[App.js Constructor.]");
    }

    static getDerivedStateFromProps (props, state) {
        console.log("2. [App.js getDerivedStateFromProps.]", state);
        return state;
    }

    //ComponentWillMount is deprecated method which is no longer supported by react in lastest updates.
    // componentWillMount() {
    //     console.log("8. [App.js] componentWillMount.")
    // }

    componentDidMount() {
        console.log("[App.js] componentDidMount.");
    }

    shouldComponentUpdate(nextProps, nextState) {
        console.log("[App.js] shouldComponentUpdate.");
        return true;
    }

    componentDidUpdate() {
        console.log("[App.js] componentDidUpdate.");
    }

    state = {
        persons : [
            {id: "asas", name:"Surya", age:28},
            {id: "abj", name:"Chandra", age:29},
            {id: "lksd", name:"Rajesh", age:27},
            {id: "isej", name:"Ajay", age:29}
        ],
        showPerson: false,
        showCockpit: true,
        authenticated: false
    }

    loginHandler = () => {
        this.setState({authenticated:true});
    }

    buttonHandler = (name) => {
        //console.log("I have clicked Button");
        //Don't do this, as react won't allow this//this.state.persons[0].name = "Polina";
        //instead
        this.setState({
            persons :[
                {name:name, age:28},
                {name:"Polina", age:26},
                {name:"Durga", age:27}
            ]
        })
    }

    nameChangeHandler = (event, id) => {
        const personIndex = this.state.persons.findIndex(p => {
           return p.id === id;
        });

        const person = {
            ...this.state.persons[personIndex]
        };//Spread operator

        // const person = Object.assign({}, this.state.persons[personIndex]);// It's alternative method for the above

        person.name = event.target.value;

        const persons = [...this.state.persons];
        persons[personIndex] = person;

        this.setState({
            persons : persons
        })
    }

    toggleButtonHandler = () => {
        const doesShow = this.state.showPerson;
        this.setState({showPerson:!doesShow})
    }

    deletePersonHandler = (personIndex) => {
        //const persons = this.state.persons.slice();//Slice create a new array with different pointer instead of using the same reference of the previous array.
        const persons = [...this.state.persons];//Spread operator does the same.
        persons.splice(personIndex, 1);
        this.setState({persons: persons});
    }

    //Use Bind when possible instead of using arrow function//() => this.buttonHandler("Surya!")
    //As Bind is efficient over this
    render() {
        let person = null;
        
        console.log("3. [App.js Render..]");
        if (this.state.showPerson){
            person = (
                <div>
                    <Persons
                    person={this.state.persons}
                    deleted={this.deletePersonHandler}
                    changed={this.nameChangeHandler}/>
                    isAuthenticated={this.state.authenticated}
                </div>
            );
        }

        return (
          <Aux>
            <button
              onClick={() => {
                this.setState({ showCockpit: false });
              }}
            >
              Remove Cockpit
            </button>
            <AuthContext.Provider value={{
                authenticate: this.state.authenticated, 
                login: this.loginHandler
                }}
            >
              {this.state.showCockpit ? (
                <Cockpit
                  title={this.props.appTitle}
                  persons={this.state.persons.length}
                  toggle={this.toggleButtonHandler}
                  showPerson={this.state.showPerson}
                />
              ) : null}
              {person}
            </AuthContext.Provider>
          </Aux>
        );
        //return React.createElement('div', null, )
    }
}

export default withClass(App, CSSClasses.App);













/********************************************************************************************
 * Notes and comments
 * 
 */
//Notes
// <Person
//     name={this.state.persons[0].name}
//     age={this.state.persons[0].age}
// />
// <Person
//     name={this.state.persons[1].name}
//     age={this.state.persons[1].age}
//     click={this.buttonHandler.bind(this, "Chandra")}
//     changed={this.nameChangeHandler}>
//     My Hobie's are Playing Cricket
// </Person>
// <Person
//     name={this.state.persons[2].name}
//     age={this.state.persons[2].age}
// />



//React Hooks concept

// import React, {useState} from 'react';//THis is for using react hooks and all it's components
// import Styled from 'styled-components';


// const app = props => {
//     //Array deserialization //const []
//     //Using useState will override the whole primary data or array with secondary array/state created
//     const [personPrevState, personSetState] = useState({//Array deserialization and useState for having both present and prev states
//         persons : [
//             {name:"Surya", age:28},
//             {name:"Chandra", age:29},
//             {name:"Rajesh", age:27},
//             {name:"Ajay", age:29}
//         ]
//     });
//
//     const [otherState, otherPrevState] = useState("This is some other value");
//
//     console.log(personPrevState, otherState);
//
//     const buttonHandler = () => {
//         personSetState({
//             persons :[
//                 {name:"Surya", age:28},
//                 {name:"Polina", age:26},
//                 {name:"Rajesh", age:27},
//                 {name:"Ajay", age:25}
//             ]
//         })
//     }
//
//     return (
//         <div className="App">
//             <h1>This is Surya</h1>
//             <p>This is the React Application I have started working on.</p>
//             <button onClick={buttonHandler}>Click This Button:</button>
//             <Person name={personPrevState.persons[0].name} age={personPrevState.persons[0].age}/>
//             <Person name={personPrevState.persons[1].name} age={personPrevState.persons[1].age}>My Hobie's are Playing Cricket</Person>
//             <Person name={personPrevState.persons[2].name} age={personPrevState.persons[2].age}/>
//             <Person name={personPrevState.persons[3].name} age={personPrevState.persons[3].age}/>
//         </div>
//     );
//
//
// }
//
// export default app;

//Class Based React concepts

// const StyledButton = Styled.button`
    // background-color: ${props => props.alt ? 'red' : 'green'};
    // font: inherit;
    // border: 1px solid black;
    // padding: 10px;
    // margin: 10px;
    // cursor: pointer;
    // &:hover {
    //     background-color: ${props => props.alt ? 'red' : 'yellow'};
    //     color:black;
    // }
// `;

    //Inline styles
    // const buttonStyle = {
    //     backgroundColor: 'green',
    //     font: 'inherit',
    //     border: '1px solid black',
    //     padding: '10px',
    //     margin: '10px',
    //     cursor: 'pointer',
    //     ':hover': {
    //         backgroundColor: 'lightgreen',
    //         color:'black'
    //     }
    // }

    // buttonStyle.backgroundColor = 'red';
    // buttonStyle[':hover'] = {
    //     backgroundColor: 'yellow',
    //     color:'black'
    // }

// <button className={btnClass.join(' ')}
//     onClick={() => this.buttonHandler("Surya!")}>
//     Click This Button:
//             </button>