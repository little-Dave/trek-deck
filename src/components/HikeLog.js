import React from 'react';
import MapContainer from './MapContainer'
import "../App.css"

const HikeLog = (props) => {

  return(
    <div>
      {console.log(props.user)}
      Welcome {props.user.name}, you're on the "HikeLog" page
      <div id="map-container">
        <MapContainer />
      </div>
    </div>
  )
}

export default HikeLog