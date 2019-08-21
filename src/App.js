import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './App.css';
import Home from './components/Home'
import HikeLog from './components/HikeLog'

export default class App extends Component {
  state = {
    user: {}
  }

  getUser = (response) => {
    this.setState({
      user: response
    })
  }

  render(){
    return(
      <Router>
        <React.Fragment>
          <Route 
            exact path="/" 
            render={(props) => <Home {...props} getUser={this.getUser} />}
          />
          <Route 
            exact path="/HikeLog" 
            render={(props) => <HikeLog {...props} user={this.state.user} />} 
          />
        </React.Fragment>
      </Router>
    )
  }
}
