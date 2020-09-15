import React from 'react';

import Person from './Person/Person';

const Persons = (Props) => (
    Props.person.map((x, index) => {
        return <Person
            click={() => Props.deleted(index)}
            name={x.name}
            age={x.age}
            key={x.id}
            changed={(event) => Props.changed(event, x.id)}
        />
    })
);

export default Persons;