import React, { Component } from 'react';
import { Redirect } from 'react-router-dom'



class LogInPage extends Component {
  constructor(){
    super()

    this.state={
      Signin: false,
      email: "",
      password: ""
      
    }
  }
  
  onSigninEmailChange = async (event) =>{
    const userEmail = event.target.value;
    console.log(userEmail)
    this.setState({ 
        email: userEmail
    })
  }

  onSigninPasswordChange = async(event)=>{
    const userPassword = event.target.value;
    console.log(userPassword);
    this.setState({  
        password: userPassword   
    })
  }
  
  // onSigninFormChange = async(event)=>{
  //   let userInfo = {
      
  //   }
  // }


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
          <p>Signin</p>
          <form onSubmit={this.onSigninFormChange}>
              <input 
                id="email"
                type="text" 
                name="email"
                onChange={this.onSigninEmailChange}
                placeholder= "email address"/>
              <input 
                id="password"
                type="text" 
                name="password"
                onChange={this.onSigninPasswordChange}
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
