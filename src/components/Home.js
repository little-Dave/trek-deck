import React from 'react';
import LoginForm from './LoginForm'

const Home = (props) => {
  return (
    <div>
      <LoginForm getUser={props.getUser}/>
    </div>
  )
}

export default Home