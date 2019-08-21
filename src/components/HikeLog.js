import React from 'react';

const HikeLog = (props) => {

  return(
    <div>
      {console.log(props.user)}
      Welcome {props.user.name}, you're on the "HikeLog" page
    </div>
  )
}

export default HikeLog