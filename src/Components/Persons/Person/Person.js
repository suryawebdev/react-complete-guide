import React, { Component} from 'react';
import PersonCSS from './Person.module.css';


class Person extends Component {
    render() {
        console.log("6. [Person.js] render..")
        return (
            <div className={PersonCSS.Person}>
                <p onClick={this.props.click}>This is {this.props.name} and I am {this.props.age} years age</p>
                <p>{this.props.children}</p>
                <input type="text" onChange={this.props.changed} value={this.props.name} />
            </div>
        )
    }

};

export default Person;


//Notes:
//in the above input onchange and value goes together for two way binding

//Styled components usage.

// import Styled from 'styled-components';

// const StyledDiv = Styled.div`
  // width: 60%;
  // margin: 20px auto;
  // border: 2px solid #eee;
  // box-shadow: 0 2px 3px #896868;
  // padding: 20px;
  // text-align: center;
  // background-color: black;
  // color: red;

  // @media (min-width: 500px) {
  //   width: 450px;
  // }
// `;

//functional components

// const person = (props) => {
//     console.log("6. [Person.js] render..")
//     return (
//         <div className={PersonCSS.Person}>
//             <p onClick={props.click}>This is {props.name} and I am {props.age} years age</p>
//             <p>{props.children}</p>
//             <input type="text" onChange={props.changed} value={props.name} />
//         </div>
//     )
// };