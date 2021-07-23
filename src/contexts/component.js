/* eslint-disable no-undef */
/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React, { useState, createContext } from 'react';
import SuiteSolteiro1 from '../Components/SuiteSolteiro1';

export const UserContext = createContext({});

function UserProvider({ children }) {
  const [componentName, setComponentName] = useState('suiteCasal');
  return (
    <UserContext.Provider value={{ componentName }}>
      {children}
    </UserContext.Provider>
  );
}

export default UserProvider;
