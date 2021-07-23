import React, { Component } from 'react';
import SuiteCasal from '../SuiteCasal';
import SuiteSolteiro1 from '../SuiteSolteiro1';

class MainContent extends Component {
    components = {
      suiteCasal: SuiteCasal,
      suiteSolteiro1: SuiteSolteiro1,
    }

    render() {
      const ComponentToRender = this.components.suiteCasal;
      // const TagName = this.components[this.props.tag || 'foo'];
      return <ComponentToRender />;
    }
}
export default MainContent;
