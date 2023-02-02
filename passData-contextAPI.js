// Parent Component
import React from 'react';
import ChildComponent from './ChildComponent';
import { DataContext } from './Context';

function ParentComponent() {
  return (
    <DataContext.Consumer>
      {context => (
        <ChildComponent data={context.data} />
      )}
    </DataContext.Consumer>
  );
}

export default ParentComponent;

