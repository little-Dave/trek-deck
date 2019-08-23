import React from 'react';
import TileComponent from './TileComponent'
import '../App.css';

const TileContainer = (props) => {
  
    function listHikes(props) {
      if (props.hikes) {
        return props.hikes.map(hike =>
          <TileComponent getUser={props.getUser} username={props.username} hike={hike} />
        )
      }
    }
  
    // console.log(props)
  
  return(
    <div id="tile-container">
      <ul>
        {listHikes(props)}
      </ul>
    </div>
  )
}

export default TileContainer