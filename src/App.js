import React from 'react';
import './App.css';

class Parent extends React.Component {
  constructor(props) {
   super(props);

    this.state = {
      index: 0,
      message: ""
    }
  }

  handleChildClick = () => {

    this.setState({ index: this.state.index + 1 })

  }

  shouldComponentUpdate() {
    let shouldUpdate = false;
    if (this.state.index % 5 === 0) {
      shouldUpdate = true;
      this.setState({ message: "FIZZ!"})
      console.log("TRUE!");
    } else {
      shouldUpdate = false;
      console.log("false");
    }


    console.log("ShouldComponentUpdate called");
    return (shouldUpdate)
  } 

  getSnapshotBeforeUpdate(previousProps, previousState) {
    console.log("getSnapshotBeforeUpdate");
    return null
  }


  componentDidUpdate(previousProps, previousState, snapshot) {
    console.log("componentDidUpdate");
  }

  render() {
    return (
    <div>Parent Class
      <Child message={this.state.message} onClick={this.handleChildClick}/>
    </div>

    )
  }
}

class Child extends React.Component {

  render() {

    return (
      <div onClick={this.props.onClick}>Child Class {this.props.message}</div>
    )
  }
}



function App() {
  return (
    <div className="App">
      <Parent />
    </div>
  );
}

export default App;
