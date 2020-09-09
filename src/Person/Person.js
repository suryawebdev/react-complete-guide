import React from 'react';
// import './Person.css';
import Styled from 'styled-components';

const StyledDiv = Styled.div`
  width: 60%;
  margin: 20px auto;
  border: 2px solid #eee;
  box-shadow: 0 2px 3px #896868;
  padding: 20px;
  text-align: center;
  background-color: black;
  color: red;

  @media (min-width: 500px) {
    width: 450px;
  }
`;

const person = (props) => {
    return (
        // <div className="Person" style={style}>
        <StyledDiv>
            <p onClick={props.click}>This is {props.name} and I am {props.age} years age</p>
            <p>{props.children}</p>
            <input type="text" onChange={props.changed} value={props.name}/>
        {/* </div> */}
        </StyledDiv>
    )
};

export default person;


//Notes:
//in the above input onchange and value goes together for two way binding