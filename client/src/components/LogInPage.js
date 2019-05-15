import React, { Component } from 'react';
import { Redirect } from 'react-router-dom'
import {createUser, getUser} from '../service/track-fit'


class LogInPage extends Component {
  constructor(props){
    super(props)

    this.state={
      signin: false,
      newUser:[],
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
      <div>
        <div>
          <p>Login</p>
          <form onSubmit={this.onLoginFormSubmit}>
              <input 
                id="email"
                type="text" 
                name="email"
                onChange={this.onSigninFormChange}
                placeholder= "email address"/>
              <input 
                id="password"
                type="text" 
                name="password"
                onChange={this.onSigninFormChange}
                placeholder="enter your password"/>
              <button type="submit">
                Submit
              </button>
          </form>
        </div> 
        <div>
          <p>SignUp</p>
          <form onSubmit={this.onSigninFormSubmit}>
              <input
                id="name"
                type="text"
                name="name"
                onChange={this.onSigninFormChange}
                placeholder="name"/>
              <input 
                id="email"
                type="text" 
                name="email"
                onChange={this.onSigninFormChange}
                placeholder= "email address"/>
              <input 
                id="password"
                type="text" 
                name="password"
                onChange={this.onSigninFormChange}
                placeholder="enter your password"/>
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
