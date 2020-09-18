import React, {useEffect} from 'react';
    
import CockpitCSS from './Cockpit.module.css';

const Cockpit = (props) => {
    useEffect(()=> {
        console.log("[Cockpit.js] UseEffect");
        setTimeout(() => {
            alert('Something to alert!');
        }, 1000)
    }, []);

    console.log("4. [Cockpit.js] render..")
    let btnClass = '';

    if (props.showPerson) {
        btnClass = Cockpit.Yellow;
    }

    return (
        <div className={CockpitCSS.Cockpit}>
            <h1>This is Surya</h1>
            <h2>{props.title}</h2>
            <p>This is the React Application I have started working on.</p>

            <button
                className={btnClass}
                onClick={props.toggle}>Toggle Button
                    </button>
        </div>
    );
}

export default Cockpit;

//UseEffect is similiar to reach lifecycle hooks
//UseEffect takes callback params as []-> which denoted when/how many times that needed to be called