import React, {Component} from 'react';
import './App.css';

class App extends Component {
  static defaultProps ={};
  constructor(props){
    super(props);
    this.state = {}; // let's assume we'll store state up here. delete if not needed
  }
  render(){
    return (
      <main className="App">
        <p>Hello World</p>
      </main>
    );
  }
}

export default App;
