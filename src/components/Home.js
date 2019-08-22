import React from 'react';
import LoginForm from './LoginForm'

// const mountains = "evansWilderness.jpg"

const Home = (props) => {
  return (
    <div id="home-background">
      <div id="login-form">
        <h1>Trek Deck</h1>
        <LoginForm getUser={props.getUser}/>   
      </div>
    </div>
  )
}

export default Home