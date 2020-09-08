import React from 'react';
import './Person.css';
import Radium from 'radium';

const person = (props) => {
    return (
        <div className="Person">
            <p onClick={props.click}>This is {props.name} and I am {props.age} years age</p>
            <p>{props.children}</p>
            <input type="text" onChange={props.changed} value={props.name}/>
        </div>
    )
};

export default Radium(person);


//Notes:
//in the above input onchange and value goes together for two way binding