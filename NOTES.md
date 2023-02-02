###### 20 DYAS OF REACT

## STATE AND PROPS

```javascript

import React from 'react';

function ExampleComponent(props) {
  // Declare a state variable named "count" with initial value 0
  const [count, setCount] = React.useState(0);

  return (
    <div>
      {/* Display the "title" prop passed from the parent component */}
      <h1>{props.title}</h1>
      {/* Display the current value of the "count" state */}
      <p>You clicked {count} times</p>
      {/* Update the value of the "count" state when the button is clicked */}
      <button onClick={() => setCount(count + 1)}>
        Click me
      </button>
    </div>
  );
}

function App() {
  return (
    <div>
      {/* Pass the "title" prop to the ExampleComponent */}
      <ExampleComponent title="React Props and State Example" />
    </div>
  );
}

{/*ReactDOM.render(
  <App/>,
  document.getElementById('mountNode'),
);*/}

export default App;

```