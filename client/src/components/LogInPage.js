import React, { Component } from 'react';
import { createUser } from '../service/track-fit'
import { login, getProfile, signUp } from '../service/apiServices'
import authService from '../service/authServices'
import tokenService from '../service/tokenServices'

import { Route, Link } from 'react-router-dom'


class LogInPage extends Component {
  constructor() {
    super()

    this.state = {
      signin: false,
      user: {}
    }


  }


  // setting state of form change 
  onSigninFormChange = (event) => {
    const element = event.target
    const name = element.name
    const value = element.value

    console.log(name);
    this.setState({ [name]: value })

  }

  // sign in 
  onSigninFormSubmit = async (e) => {
    e.preventDefault()
    try {
      let credentials = {
        name: this.state.name,
        password: this.state.password,
      }

      const user = await login(credentials)
      console.log(user, 'sign in')
      //tokenService.storeToken(user.token)
      this.props.setCurrentUserInfo(user);
      this.setState({
        isSignedIn: true,
        user: user
      })
      this.props.toggleLog()
    } catch (e) {
      throw e
    }
  }


  // sign up user
  signUpUser = async (e) => {
    e.preventDefault()

    try {
      let credentials = {
        name: this.state.name,
        password: this.state.password,
        email: this.state.email
      }
      const user = await signUp(credentials)
      console.log(user, 'sign up')
      this.props.setCurrentUserInfo(user);
      this.setState({
        isSignedIn: true,
        user: user
      })
      this.props.toggleLog()
    } catch (e) {
      throw e
    }
  }


  render() {
    const { isSignedIn, user } = this.state

    return (
      <div>
        <div>
          <p>Login</p>
          <form onSubmit={this.onLoginFormSubmit}>
            <input
              id="email"
              type="text"
              name="email"
              onChange={this.onSigninFormChange}
              placeholder="email address" />
            <input
              id="password"
              type="text"
              name="password"
              onChange={this.onSigninFormChange}
              placeholder="enter your password" />
            <button type="submit">
              Submit
            </button>
          </form>
        </div>
        <div>
          <p>SignUp</p>
          <form onSubmit={this.signUpUser}>
            <input
              id="name"
              type="text"
              name="name"
              onChange={this.onSigninFormChange}
              placeholder="name" />
            <input
              id="email"
              type="text"
              name="email"
              onChange={this.onSigninFormChange}
              placeholder="email address" />
            <input
              id="password"
              type="text"
              name="password"
              onChange={this.onSigninFormChange}
              placeholder="enter your password" />
            <button type="submit">
              Submit
            </button>
          </form>
        </div>
      </div>
    );
  }

}

export default LogInPage;
