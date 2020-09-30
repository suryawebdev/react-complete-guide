This is Sample application... Have FUN.

//Key Concept: In react key is unique id, as react before rendering does virtual dom comparision with it's previous state
    //and only renders the items that are missing or changed if it has key properties defined.

//Notes: 09/08/2020
//Radium: 
    //Radium is an external library for styling inline css
    //Mostly for writing inline css browser states (:hover, :focus, :active), keyframe animations, media queries etc.
    //Radium is higher order react component, which wraps around react

//Styled-Components
    //styled components are same as radium but works as functions with backticks.
    //We can update dynamic styles
    //Ex : const styledButton = styled.div`//write your normal css here.//`;
    //<styleButton>This is Button</styledButton>
    //Now the above styledButton can be used for any button you want to have similiar css look and feel;
    //We can even write inline css and media queries without any issues or without even using radium
    
    //In styled components we can even combine javascript in css by defining props
    //Ex: background-color: ${props => props.alt ? 'red' : 'green'}

//Drawbacks of using radium and styled components:
    //common - Always writing css in JS file is heavy for js file to load and it is not best practice

//Notes: 09/10/2020
//CSS Modules
    //CSS Modules are uniquely identified for each css modules which can be defined as Ex: App.module.css
    //we can export them as same and import them as components Ex: import CssClasses from './App.module.css';

    //Links for css modules: https://github.com/css-modules/css-modules
    //With CSS modules, you can write normal CSS code and make sure, that it only applies to a given component.
    //it'll simply automatically generate unique CSS class names for you. And by importing a JS object and assigning classes from there, you use these dynamically generated, unique names.


//Notes: 09/22/2020
//Class based components uses should componentUpdate for performance optimizations.
//Functional components uses React.memo

//Pure Component -> in React when we extend components with pureComponent,
    //then it automatically implemets shouldComponentUpdate behind the scened and checks for all the props for that
    //component before rerendering the component

//Virtual DOM
    //React maintains two virtual DOMs all the time
    //1.Old virtual DOM and 2. Re-Rendered Virtual DOM
    //It compares between both old and re-rendered virtual doms and find if any differences were found,
    //If differences were found between both it will only re-render only the parts that were changed in the respective
    //If no differences were found it will not re-render any thing, it keeps the old one.

//JSX cannot render adjacent elements, 1.they need to be either wrapped by a single element or, 
    //2.they can be passes as an array of elements

    //EX1: return (<div>something</div>);
    //EX2: return [<div key="i1">Something</div>,
                    <div key="i2" >something2</div>]

//In react 16.2 and later it did provided with Aux component to wrap adjacent elements in render using React.Fragment


//HOC: Higher Order Components
    //Because it just wraps another components
    //Usually these doesn't have any stylings as well 

//PropTyeps:
    //Prop types is an react extention where we can define the type of property if we want to pass the components
    //It helps if we distribute components.

//Ref:
    //Class based component ref approach
    //ref={(inputEle)=> {this.inputElement = inputEle}}
    //By passing ref we can directly handle the nth element 

    //React.createRef() -> creates reference to element that is assigned to and stores it
    //And this only works in class based components

    //Functional based components use useRef() -> React hook

//Prop chain problem is handled by react context. 


//Context:
    //React context is used to solve prop chain problem
    //Context has Provider and consumer methods 

    //Provider provides the props which weneed to pass on as props to the desired child elements
    //Consumer uses these props passed in provide and uses them as props in those methods.

    Ex:. 
                <AuthContext.Provider value={{
                authenticate: this.state.authenticated, 
                login: this.loginHandler
                }}><AuthContext.Provider>
                //Here the values are passed as props

                <AuthContext.Consumer>
                    {(context) => <button onClick={context.login}>Login</button>}
                </AuthContext.Consumer>
                //Here Consumer uses context of the apps to point out the props that has been passed on by provider.
