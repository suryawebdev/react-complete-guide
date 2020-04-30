import React from 'react';

const person = (props) => {
    return (
        <div>
            <p>This is {props.name} and I am {props.age} years age</p>
            <p>{props.children}</p>
        </div>
    )
};

export default person;