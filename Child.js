// Child
import React from 'react';
import { DataContext } from './Context';

function ChildComponent(props) {
  const { data } = props;

  return (
    <div>
      <p>Name: {data.name}</p>
      <p>Age: {data.age}</p>
    </div>
  );
}

export default ChildComponent;