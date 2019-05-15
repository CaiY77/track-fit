import React, { Component } from 'react';
import {createUser} from '../service/track-fit'


class LogInPage extends Component {
  constructor(){
    super()

    this.state={
      signin: false,
      newUser:[]
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

    // if(this.state.login === true){
    //   return <Redirect to="/user" />
    // }

    return (
      <div>
        <div>
          <p>Login</p>
          <form onSubmit={this.onLoginFormSubmit}>
            <input
              id="email"
              type="text"
              name="email"
              onChange={this.onLoginEmailChange}
            placeholder= "email address"/>
            <input
              id="password"
              type="text"
              name="password"
              onChange={this.onLoginPasswordChange}
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
