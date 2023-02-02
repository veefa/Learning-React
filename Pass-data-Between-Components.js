import React from "react";

function ParentComponent() {
    const data = { name: 'Spong BOB', age: 20 };
  
    return (
      <ChildComponent data={data} />
    );
  }
  
  function ChildComponent(props) {
    const { data } = props;
  
    return (
      <div>
        <p>Name: {data.name}</p>
        <p>Age: {data.age}</p>
      </div>
    );
  }

  export default ParentComponent;