/* eslint-disable no-unused-vars */
import React, { useContext } from 'react';
import SuiteCasal from '../Comodos/SuiteCasal';
import SuiteSolteiro1 from '../Comodos/SuiteSolteiro1';
import SuiteSolteiro2 from '../Comodos/SuiteSolteiro2';
import SuiteSolteiro3 from '../Comodos/SuiteSolteiro3';
import SuiteHospedes from '../Comodos/SuiteHospedes';
import Home from '../Home';
import { UserContext } from '../../contexts/component';

const MainContent = () => {
  const components = {
    home: Home,
    suiteCasal: SuiteCasal,
    suiteSolteiro1: SuiteSolteiro1,
    suiteSolteiro2: SuiteSolteiro2,
    suiteSolteiro3: SuiteSolteiro3,
    suiteHospedes: SuiteHospedes,
  };
  const { componentName } = useContext(UserContext);
  const ComponentToRender = components[componentName];
  return <ComponentToRender />;
};
export default MainContent;
