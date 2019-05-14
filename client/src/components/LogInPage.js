import React, { Component } from 'react';

class LogInPage extends Component {

  render() {
    return (
      <div>
        <div>
          <p>Login</p>
          <form onChange={this.onLoginFormChange}>
              <input 
                id="email"
                type="text" 
                name="email"
                placeholder= "email address"/>
              <input 
                id="password"
                type="text" 
                name="password"
                placeholder="enter your password"/>
              <button
              onSubmit={this.onLoginFormSubmit}
              >Submit</button>
          </form>
        </div> 
        <div>
          <p>Signin</p>
          <form onChange={this.onSigninFormChange}>
              <input 
                id="email"
                type="text" 
                name="email"
                placeholder= "email address"/>
              <input 
                id="password"
                type="text" 
                name="password"
                placeholder="enter your password"/>
              <button
                onSubmit={this.onSigninFormChange}>
                Submit
              </button>
          </form>
        </div>
      </div>
    );
  }

}

export default LogInPage;
