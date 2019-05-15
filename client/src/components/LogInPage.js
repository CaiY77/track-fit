import React, { Component } from 'react';
import {createUser, getUser} from '../service/track-fit'
import './LoginPage.css'
import {Redirect} from 'react-router-dom'
// import bulma from '../../node_modules/bulma/css/bulma.css'



class LogInPage extends Component {
  constructor(props){
    super(props)

    this.state={
      signin: false,
      newUser:[]
     // currentUser: null
    }
  }



  onSigninFormChange = (event)=>{
    const element = event.target
    const name = element.name
    const value = element.value

    console.log(name);

    this.setState({[name]: value});

  }


  onSigninFormSubmit = async(e)=>{
    e.preventDefault();


    console.log(`Form submitted: `)

    let userInfo = {
      name: this.state.name,
      email: this.state.email,
      password: this.state.password
    };

    const currentUser = await createUser(userInfo)
    console.log(currentUser);
    this.props.setCurrentUser(currentUser);
    return <Redirect to="/" />
  }

  onLoginFormSubmit = async(e)=>{
    e.preventDefault();

    console.log(`Form submitted: `)

    let userInfo = {
      email: this.state.email,
      password: this.state.password
    };

    const currentUser = await getUser(userInfo)

    if(currentUser !== undefined) {
    this.props.setCurrentUser(currentUser);
    return <Redirect to="/" />
    }
  }


  render() {
    console.log(this.props.login);

    return (
      <div class = "content">
        <div class = "login">
          <h2>Login</h2>
          <form onSubmit={this.onLoginFormSubmit}>

            <div class="label">
              <p class="control">

                <input
                  id="email"
                  type="text"
                  name="email"
                  onChange={this.onSigninFormChange}
                  placeholder= "email address"
                />
                <input
                  id="password"
                  class="input"
                  type="text"
                  name="password"
                  onChange={this.onSigninFormChange}
                  placeholder="enter your password"
                />

                <button type="submit">
                  Submit
                </button>
              </p>
            </div>
          </form>
        </div>

        <div class="verticalLine">
        </div>

        <div class = "signup">
          <h2>SignUp</h2>
          <form onSubmit={this.onSigninFormSubmit}>
          <div class="label">
            <p class="control">
              <input
              id="name"
              class="input"
              type="text"
              name="name"
              onChange={this.onSigninFormChange}
              placeholder="Name"/>
            </p>
          </div>

          <div class="label">
            <p class="control">
                <input
                id="email"
                class="input"
                type="email"
                name="email"
                onChange={this.onSigninFormChange}
                placeholder="Email"/>
            </p>
          </div>

          <div class="label">
              <p class="control">
                <input
                id="password"
                class="input"
                type="text"
                name="password"
                onChange={this.onSigninFormChange}
                placeholder="Password"/>
              </p>
          </div>

          <div class="label">
              <p class="control">
              <button class="button is-success" type="submit">
                SignUp
              </button>
              </p>
          </div>

          </form>
        </div>

      </div>
    );
  }

}

export default LogInPage;
