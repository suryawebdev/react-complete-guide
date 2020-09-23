import React, {useEffect} from 'react';
    
import CockpitCSS from './Cockpit.module.css';

const Cockpit = (props) => {
    useEffect(()=> {
        console.log("[Cockpit.js] UseEffect");
        setTimeout(() => {
            alert('Something to alert!');
        }, 1000)
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

export default React.memo(Cockpit);

//UseEffect is similiar to reach lifecycle hooks
//UseEffect takes callback params as []-> which denoted when/how many times that needed to be called

//Notes:
//React.memo() -> only re renders the component if any of the input params changes in it's component
//We can used this in funcional components whenever we don't want to render child component when parent components are 
    //are rendering without any input change