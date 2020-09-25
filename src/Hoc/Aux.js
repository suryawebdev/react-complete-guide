const Aux = (props) => props.children;

export default Aux;

//We can render all the adjacent elements in react by wrapping that in a single component that take props as children

//In react 16.2 and later it did provided similiar functionality as
    // Aux component to wrap adjacent elements in render using React.Fragment

// return (
//     <Aux>
//         <h1>This is Surya</h1>
//         <h2>{props.title}</h2>
//         <p>This is the React Application I have started working on.</p>

//         <button
//             className={btnClass}
//             onClick={props.toggle}>Toggle Button
//                     </button>
//     </Aux>
// );