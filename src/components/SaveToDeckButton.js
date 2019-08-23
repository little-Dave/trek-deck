import React from 'react';

const SaveToDeckButton = (props) => {

  const baseUserUrl = "http://localhost:3001/users/"
  const baseHikeUrl = "http://localhost:3001/hikes/"
  const body = {
    name: props.name,
    latitude: props.latitude,
    longitude: props.longitude,
    notes: "",
    user_id: props.userId
  }

  function clickHandler() {
    fetch(baseHikeUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Accept": "application/json"
      },
      body: JSON.stringify(body)
    }).then(updateUser)
  }

  function updateUser() {
    fetch(baseUserUrl.concat(props.username))
      .then(response => response.json())
      .then(props.getUser)
  }
  // console.log(props)
  return(
    <button onClick={clickHandler} id="save-to-deck-button" name="save-hike"><strong>Add to Deck</strong></button>
  )
}

export default SaveToDeckButton