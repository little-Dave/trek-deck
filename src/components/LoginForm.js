import React, { Component } from 'react';
import { Redirect, withRouter } from 'react-router-dom';

const baseUserUrl = "http://localhost:3001/users/"

class LoginForm extends Component { 
  constructor(props){
    super(props)
    this.state = {
      inHikeLog: false
    }
  }

  handleClick = event => {
    event.preventDefault()
    let username = event.target.parentNode.username.value
    fetch(baseUserUrl.concat(username))
      .then(response => response.json())
      .then(this.props.getUser)
      .then(this.setState({
        inHikeLog: true
      }))
  }

  render() {
    if (this.state.inHikeLog) {
      return <Redirect to="/HikeLog" />
    }
    
    return (
      <div>
        <form>
          <input id="username-input" type="text" name="username" placeholder="username" />
          <button id="login-button" type="submit"  onClick={this.handleClick}>Login</button>
        </form>
      </div>
    )
  }
}

export default withRouter(LoginForm)