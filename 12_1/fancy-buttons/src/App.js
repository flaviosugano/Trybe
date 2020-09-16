import React from 'react';
import './App.css';

class App extends React.Component {
  constructor() {
    super()
    this.handleClick = this.handleClick.bind(this);
    this.state = {
      clickQuantity: 0
    }
  }

  handleClick() {
    console.log(this);
    this.setState((previousState, _props) => ({
      clickQuantity: previousState.clickQuantity + 1
    }));
  }

  render() {
    return (
      <button onClick={this.handleClick}>Botão 1: {this.state.clickQuantity}</button>
    );
  }
}

export default App;
