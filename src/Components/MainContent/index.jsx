/* eslint-disable no-unused-vars */
import React, { useContext } from 'react';
import SuiteCasal from '../SuiteCasal';
import SuiteSolteiro1 from '../SuiteSolteiro1';
import { UserContext } from '../../contexts/component';

const MainContent = () => {
  const components = {
    suiteSolteiro1: SuiteSolteiro1,
    suiteCasal: SuiteCasal,
  };
  const { componentName } = useContext(UserContext);
  const ComponentToRender = components[componentName];
  return <ComponentToRender />;
};
export default MainContent;
