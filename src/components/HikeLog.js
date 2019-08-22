import React from 'react';
import MapContainer from './MapContainer'
import LocationForm from './LocationForm'
import TileContainer from './TileContainer'
import "../App.css"

const HikeLog = (props) => {

  return(
    <div>
      {console.log(props)}
      Welcome {props.user.name}, you're on the "HikeLog" page
      <LocationForm getCurrentLocationInfo={props.getCurrentLocationInfo}/>
      <MapContainer latitude={props.currentLocation.latitude} longitude={props.currentLocation.longitude}/>
      <TileContainer />
    </div>
  )
}

export default HikeLog