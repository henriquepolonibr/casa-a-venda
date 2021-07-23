/* eslint-disable no-undef */
/* eslint-disable react/prop-types */
import React, { useState, createContext } from 'react';

export const UserContext = createContext({});

function UserProvider({ children }) {
  const [componentName, setComponentName] = useState('suiteCasal');
  return (
    <UserContext.Provider value={{ componentName, setComponentName }}>
      {children}
    </UserContext.Provider>
  );
}

export default UserProvider;
