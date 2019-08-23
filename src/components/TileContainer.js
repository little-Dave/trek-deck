import React from 'react';
import TileComponent from './TileComponent'
import '../App.css';

const TileContainer = (props) => {

 
    console.log(props.hikes)
  return(
    <div id="tile-container">
      <ul>
        {/* <li>
          <div className="list-item">Red Rocks, CO</div>
        </li>
        <li>
          <div className="list-item">Sleeping Bear Dunes, MI</div>
        </li> */}
      </ul>
    </div>
  )
}

export default TileContainer