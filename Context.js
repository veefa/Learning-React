import React, { createContext, useState } from 'react';

export const DataContext = createContext();

function ContextProvider(props) {
  const [data, setData] = useState({ name: 'John Doe', age: 32 });

  return (
    <DataContext.Provider value={{ data, setData }}>
      {props.children}
    </DataContext.Provider>
  );
}

export default ContextProvider;