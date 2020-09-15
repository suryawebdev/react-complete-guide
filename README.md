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