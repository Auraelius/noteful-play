import React, {Component} from 'react';
import { Route, Switch } from 'react-router-dom'

import NotFoundPage from './NotFoundPage/NotFoundPage'

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
        <Switch>
             {/* <Route exact path='/' component={HomePage} />
             <Route path='/about' component={AboutPage} />
             <Route path='/workouts' component={WorkoutsPage} /> */}
             <Route component={NotFoundPage} />
        </Switch>
        <p>Hello World</p>
      </main>
    );
  }
}

export default App;
