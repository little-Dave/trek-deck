import React from 'react';
import '../App.css';

const TileComponent = (props) => {
  // console.log(props)

  const baseUserUrl = "http://localhost:3001/users/"
  const baseHikeUrl = "http://localhost:3001/hikes/"

  function deleteTrek(props){
    fetch(baseHikeUrl.concat(props.hike.id), {
      method: "DELETE",
      header: {
        "Content-Type": "application/json",
        "Accept": "application/json"
      }
    }).then(updateUser)
  }

  function updateUser() {
    fetch(baseUserUrl.concat(props.username))
      .then(response => response.json())
      .then(props.getUser)
  }

  // function logStuff() {
  //   console.log("yup")
  // }

  return(
    <div  
      id={props.hike.id} 
      className="list-item"  
    >
      {props.hike.name}
      <span 
        onClick={() => deleteTrek(props)} 
        id="trash" 
        className="far fa-trash-alt">
      </span>
    </div>
  )
}

export default TileComponent