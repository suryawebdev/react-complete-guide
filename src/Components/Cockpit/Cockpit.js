import React, {useEffect, Fragment, useRef, useContext} from 'react';

import Aux from '../../Hoc/Aux';
    
import CockpitCSS from './Cockpit.module.css';
import AuthContext from '../../context/auth-context';

const Cockpit = (props) => {
    const toggleBtn = useRef(null);
    const authContext = useContext(AuthContext);

    //UseEffect runs after jsx code is parsed and rendered
    //in Functional based components

    useEffect(()=> {
        console.log("[Cockpit.js] UseEffect");
        //Http request
        // setTimeout(() => {
        //     alert('Something to alert!');
        // }, 1000)
        toggleBtn.current.click();
        return () => {
            console.log("[Cockpit.js] cleanup useeffect. ")
        }
    }, []);

    useEffect(() => {
        console.log("[Cockpit.js] 2nd UseEffect");
        return () => {
            console.log("[Cockpit.js] 2nd cleanup useeffect. ")
        }
    })

    console.log("4. [Cockpit.js] render..")
    let btnClass = '';

    if (props.showPerson) {
        btnClass = Cockpit.Yellow;
    }

    return (
      <Fragment>
        <h1>This is Surya</h1>
        <h2>{props.title}</h2>
        <p>This is the React Application I have started working on.</p>

        <button ref={toggleBtn} className={btnClass} onClick={props.toggle}>
          Toggle Button
        </button>
        {/* <AuthContext.Consumer>
          {(context) => <button onClick={context.login}>Login</button>}
        </AuthContext.Consumer> */}
        {<button onClick={authContext.login}>Login</button>}
      </Fragment>
    );
}

export default React.memo(Cockpit);

//UseEffect is similiar to reach lifecycle hooks
//UseEffect takes callback params as []-> which denoted when/how many times that needed to be called

//Notes:
//React.memo() -> only re renders the component if any of the input params changes in it's component
//We can used this in funcional components whenever we don't want to render child component when parent components are 
    //are rendering without any input change


//Aux is component that can render components in adjacent way..