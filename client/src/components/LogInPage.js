import React, { Component } from 'react';
import { Redirect } from 'react-router-dom'
import {createUser} from '../service/track-fit'
// import './LoginPage.css'
import bulma from '../../node_modules/bulma/css/bulma.css'


class LogInPage extends Component {
  constructor(){
    super()

    this.state={
      signin: false,
    }
  }

  onSigninFormChange = (event)=>{
    const element = event.target
    const name = element.name
    const value = element.value
    
    console.log(name);
    this.setState({[name]: value})
    
  }

  
  onSigninFormSubmit = async(event)=>{
    event.preventDefault()

    console.log(`Form submitted: `)

    let userInfo = {
      name: this.state.name,
      email: this.state.email,
      password: this.state.password
    }
    const currentUser = await createUser(userInfo)
    console.log(currentUser)
    this.setState({
      signin: true
    })
  }


  render() {
    console.log(this.props.login);

    if(this.state.signin === true){
      return <Redirect to="/" />
    }

    return (
      <div class = "content">
        <div class = "login">
          <h2>Login</h2>
          <form onSubmit={this.onLoginFormSubmit}>
          <div class="label">
            <p class="control">
              <input 
              id="email"
              class="input" 
              type="text" 
              name="email"
              onChange={this.onLoginFormChange}
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
                onChange={this.onLoginFormChange}
                placeholder="Password"/>
              </p>
          </div>
          
          <div class="label">
              <p class="control">
              <button class="button is-success" type="submit">
                Login
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
