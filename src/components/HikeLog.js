import React from 'react';
import MapContainer from './MapContainer'
import LocationForm from './LocationForm'
import TileContainer from './TileContainer'
import SaveToDeckButton from './SaveToDeckButton'
import "../App.css"

const HikeLog = (props) => {

  return(
    <div>
      {console.log(props)}
      Hi {props.user.name}!
      <LocationForm getCurrentLocationInfo={props.getCurrentLocationInfo}/>
      <SaveToDeckButton 
        userId={props.user.id} 
        username={props.user.username}
        latitude={props.currentLocation.latitude}
        longitude={props.currentLocation.longitude}
        name={props.currentLocation.name}
        getUser={props.getUser}
      />
      <MapContainer latitude={props.currentLocation.latitude} longitude={props.currentLocation.longitude}/>
      <TileContainer hikes={props.user.hikes}/>
    </div>
  )
}

export default HikeLog