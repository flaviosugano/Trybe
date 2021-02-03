import MyContext from './MyContext';
import Grandmother from './GrandMother';

import React, { Component } from 'react';

class GreatGrandFather extends Component {
  constructor(props) {
    super(props);
    this.state = {
      inheritance: 1000000,
    }
    this.spendInheritance = this.spendInheritance.bind(this);
  }

  spendInheritance() {
    this.setState((prevState) => ({ inheritance: prevState.inheritance - 100 }));
  }

  render() {
    const contextValue = {
      inheritance: this.state.inheritance,
      spendInheritance: this.spendInheritance
    };

    return (
      <MyContext.Provider value={contextValue}>
        <Grandmother />
      </MyContext.Provider>
    );
  }
}

export default GreatGrandFather
