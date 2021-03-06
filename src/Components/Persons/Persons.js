import React, {PureComponent} from 'react';

import Person from './Person/Person';

class Persons extends PureComponent {
    // static getDerivedStateFromProps(props, state) {
    //     console.log("[Persons.js] getDerivedStateFromProps", state);
    //     return state;
    // }

    // shouldComponentUpdate(nextProps, nextState) {
    //     console.log("[Persons.js] shouldComponentUpdate", nextState);
    //     if(nextProps.person != this.props.person) {
    //         return true;
    //     } else {
    //         return false
    //     }
    // }

    getSnapshotBeforeUpdate(prevProps, prevState) {
        console.log("[Persons.js] getSnapshotBeforeUpdate", prevState);
        return {message:"Something!Snapshot..!"};
    }

    componentDidUpdate(prevProps, prevState, snapShot) {
        console.log("[Persons.js] componentDidUpdate");
        console.log(snapShot);
    }

    componentWillUnmount() {
        console.log("[Persons.js] componentWillUnmount.");
    }

    render () {
        console.log("5. [Persons.js] render..");
        return (
            this.props.person.map((x, index) => {
                return <Person
                    click={() => this.props.deleted(index)}
                    name={x.name}
                    age={x.age}
                    key={x.id}
                    changed={(event) => this.props.changed(event, x.id)}
                />
            })
        );
    }
}

export default Persons;



//Functional based components

// const Persons = (Props) => {
//     console.log("5. [Persons.js] render..");
//     return (
//         Props.person.map((x, index) => {
//             return <Person
//                 click={() => Props.deleted(index)}
//                 name={x.name}
//                 age={x.age}
//                 key={x.id}
//                 changed={(event) => Props.changed(event, x.id)}
//             />
//         })
//     );
// }

//Class based components uses should componentUpdate for performance optimizations.
//Functional components uses React.memo

//Pure Component -> in React when we extend components with pureComponent,
    //then it automatically implemets shouldComponentUpdate behind the scened and checks for all the props for that
    //component before rerendering the component