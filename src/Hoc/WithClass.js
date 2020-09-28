import React from 'react';

const withClass = (WrapperComponent, className) => {
    return props => (
        <div className={className}>
            <WrapperComponent {...props}/>
        </div>
    );
}

export default withClass; 

// const withClass = props => (
//     <div className={props.classProp}>{props.children}</div>
// );