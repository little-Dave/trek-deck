import React from 'react';
import LoginForm from './LoginForm'

const Home = (props) => {
  return (
    <div>
      {/* {console.log(props.getUser)} */}
      <LoginForm getUser={props.getUser}/>
    </div>
  )
}

export default Home