import React from 'react';
import ReactDOM from 'react-dom';

//declaring a function to use as a value for  Event Listner attribute
function myFunc(){
    alert("Hi am a function caled on JSX code")
};
//inject JavaScript in JSX
const myVar = <img onClick={myFunc}/>;

//render the JSX expression ==> make it appear onscreen
ReactDOM.render(myVar, document.getElementById('app'));