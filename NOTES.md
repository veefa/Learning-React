###### 20 DYAS OF REACT

### STATE AND PROPS

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

### Pass Data Between Components

1- Using props: Pass data from parent component to child component as props.

2- Using context API: It is a way to share data across multiple components without having to pass props down manually at every level.

3- Using state management libraries like Redux or MobX: These libraries provide a centralized store for data and allows any component to access and update the data in the store.

4- Using hooks: The useContext hook can be used to access data from the context API and the useReducer hook can be used to manage the state within a component.

5- Using event handlers: You can pass a function from a parent component to a child component as a prop and the child component can trigger the function when an event occurs. The parent component can then update the state and pass the updated state to other components.



