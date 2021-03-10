import React from "react";
import ReactDOM from "react-dom";

const myArr = ["one", "two", "three"];

const myList = (
  <ul>
    {myArr.map((item, i) => (
      <li key={item + i}>{item}</li>
    ))}
  </ul> // `.map()` creates/returns a new array from calling a function on every element in the array it's called on
);

ReactDOM.render(myList, document.getElementById("app"));
