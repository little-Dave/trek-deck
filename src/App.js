import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './App.css';
import Home from './components/Home'
import HikeLog from './components/HikeLog'
// import LocationForm from './components/LocationForm';

export default class App extends Component {
  state = {
    user: {},
    currentLocation: {
      latitude: 39.9236 ,
      longitude: -97.8217,
      name: ""
    }
  }

  getUser = (response) => {
    this.setState({
      user: response
    })
  }

  getCurrentLocationInfo = (latLng, currentAddress) => {
    this.setState({
      currentLocation: {
        latitude: latLng.lat,
        longitude: latLng.lng,
        name: currentAddress
      }
    //   name: address
    //   // whatever other info you want to persist--update in state, too; 
    //   //   this gets passed to hikelog as a prop, then on to LocationForm
    })
    // console.log(latLng.lat)
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
            render={(props) => 
              <HikeLog {...props} 
                  user={this.state.user} 
                  currentLocation={this.state.currentLocation} 
                  getCurrentLocationInfo={this.getCurrentLocationInfo}
                  getUser={this.getUser}
              />
            } 
          />
          {/* above, update currentLocation to include other info you'd like to persist */}
        </React.Fragment>
      </Router>
    )
  }
}
