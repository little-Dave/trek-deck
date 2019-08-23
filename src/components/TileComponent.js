import React from 'react';
import '../App.css';


const TileComponent = (props) => {
  // console.log(props)
  return(
    <div id={props.hike.id} className="list-item">{props.hike.name}</div>
  )
}


export default TileComponent