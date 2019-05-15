import React, { Component } from 'react';
import LogInPage from './components/LogInPage.js'
import { Redirect } from 'react-router-dom'

import ProfilePage from './components/ProfilePage.js'

class App extends Component {

constructor(props) {
  super(props);

  this.state = {
    loggedIn: false,
    userID: 1,
    currentUser: null,
  };

}

componentDidMount() {
  document.title = 'Track My Fitness';
}

toggleLog = () =>{
  this.setState({
    loggedIn: !this.state.loggedIn
  });
}
setCurrentUser = (currentUser) => {
  console.log("from App.js cur: ",currentUser)
  let userID = currentUser.id ? currentUser.id : null

  this.setState({
    currentUser: currentUser,
    loggedIn: true,
    userID: userID,
  })
}

  render() {
    const {loggedIn,userID} = this.state;
    return (
      <div>

        {
          (loggedIn)
            ? <ProfilePage toggleLog ={this.toggleLog} user = {this.state.currentUser} login = {loggedIn}/>
            : <LogInPage login = {loggedIn}  setCurrentUser={this.setCurrentUser}/>
   

        }

      </div>
    );
  }

}

export default App;
