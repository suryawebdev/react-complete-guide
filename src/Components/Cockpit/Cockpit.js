import React from 'react';
    
import CockpitCSS from './Cockpit.module.css';

const Cockpit = (props) => {
    let btnClass = '';
    // let btnClass = [CockpitCSS.button];

    if (props.showPerson) {
        btnClass = Cockpit.Yellow;
        // btnClass.push(CockpitCSS.Yellow);
    }

    return (
        <div className={CockpitCSS.Cockpit}>
            <h1>This is Surya</h1>
            <p>This is the React Application I have started working on.</p>

            <button
                className={btnClass}
                onClick={props.toggle}>Toggle Button
                    </button>
        </div>
    );
}

export default Cockpit;