import React, { Component} from 'react';
import PropTypes from 'prop-types';

import PersonCSS from './Person.module.css';
import withClass from '../../../Hoc/WithClass';
import Aux from '../../../Hoc/Aux';
import AuthContext from '../../../context/auth-context';


class Person extends Component {
    constructor(props) {
        super(props);
        this.inputElementRef = React.createRef();//Create Ref was introduced in react 16 and later
    }

    static contextType = AuthContext;

    componentDidMount() {
        // this.inputElement.focus()
        this.inputElementRef.current.focus();
    }

    render() {
        console.log("6. [Person.js] render..")
        return (
          <Aux>
              {this.context.authenticate ? (
                  <p>Authenticated!</p>
                ) : (
                  <p>Please Login!</p>
                )
              }
            <p onClick={this.props.click}>
              This is {this.props.name} and I am {this.props.age} years age
            </p>
            <p>{this.props.children}</p>
            <input
              type="text"
              // ref={(inputEle)=> {this.inputElement = inputEle}}
              ref={this.inputElementRef}
              onChange={this.props.changed}
              value={this.props.name}
            />
          </Aux>
        );
    }

};

Person.propTypes = {
    click: PropTypes.func,
    name: PropTypes.string,
    age: PropTypes.number,
    changed: PropTypes.func
};

export default withClass(Person, PersonCSS.Person);


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

