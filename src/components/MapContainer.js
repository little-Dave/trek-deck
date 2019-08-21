import React, { Component } from 'react';
import { Map, GoogleApiWrapper } from 'google-maps-react';

const mapStyles = {
  width: "66%",
  height: "85%",
  margin: "2rem",
  borderRadius: "1rem"
};

export class MapContainer extends Component {
  render() {
    return(
      <Map
        google={this.props.google}
        zoom={14}
        style={mapStyles}
        initialCenter={{
          lat: 39.7393,
          lng: -104.9848
        }}
      />
    )
  }
}

export default GoogleApiWrapper({
  apiKey: ""
})(MapContainer);