import React, {Component} from 'react';

import Person from './Person/Person';

class Persons extends Component {
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