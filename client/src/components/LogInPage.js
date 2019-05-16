import React, { Component } from 'react';
import { createUser } from '../service/track-fit'
import { login, getProfile, signUp } from '../service/apiServices'
import authService from '../service/authServices'
import tokenService from '../service/tokenServices'
import './LogInPage.css'
import { Button, Checkbox, Form } from 'semantic-ui-react'

import { Route, Link, Redirect } from 'react-router-dom'


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

  // login user
  loginUser = async (e) => {
    e.preventDefault()
    try {
      let credentials = {
        email: this.state.email,
        password: this.state.password,

      }
      console.log(credentials)

      const user = await login(credentials)
      console.log(user, 'sign in')
      //tokenService.storeToken(user.token)
      this.props.setCurrentUserInfo(user);
      this.setState({
        isSignedIn: true,
        user: user
      })
      console.log(user)
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
      console.log(credentials)

      const user = await signUp(credentials)
      console.log(user, 'sign up')
      await this.props.setCurrentUserInfo(user);
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
      <div className="profile-page">
        <div className="log-in-pic"></div>

        <div>
          <h2>Login</h2>
          <Form onSubmit={this.loginUser}>
            <input
              id="email"
              type="text"
              name="email"
              onChange={this.onSigninFormChange}
              placeholder="email" />
            <input
              id="password"
              type="text"
              name="password"
              onChange={this.onSigninFormChange}
              placeholder="enter your password" />
            <Button color='blue' inverted type='submit'>Submit</Button>


          </Form>
        </div>
        <div>
          <h2>SignUp</h2>
          <Form onSubmit={this.signUpUser}>
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

            <Button color='blue' inverted type='submit'>Submit</Button>
            <Checkbox label='I agree to serve and obey Track Fit and only Track Fit' />
          </Form>
        </div>
      </div>
    );
  }

}

export default LogInPage;
