import React, { Component } from 'react';
import { Map, GoogleApiWrapper } from 'google-maps-react';

const mapStyles = {
  width: "66%",
  height: "85%",
  margin: "2rem",
  borderRadius: "1rem"
};

export class MapContainer extends Component {
  state = {
    latitude: this.props.latitude,
    longitude: this.props.longitude,
    zoom: 4
  }

  render() {
    if (this.props.latitude !== this.state.latitude) {
      this.setState({
        latitude: this.props.latitude,
        longitude: this.props.longitude, 
        zoom: 12
      })
    }
    // console.log(this.props)
    // console.log(this.state)
    return(
      <Map
        google={this.props.google}
        zoom={this.state.zoom}
        style={mapStyles}
        initialCenter={{
          lat: this.state.latitude,
          lng: this.state.longitude
        }}
        center={{
          lat: this.state.latitude,
          lng: this.state.longitude
        }}
      />
    )
  }
}

export default GoogleApiWrapper({
  apiKey: ""
})(MapContainer);