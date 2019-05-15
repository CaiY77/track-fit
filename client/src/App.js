import React, { Component } from 'react';
import LogInPage from './components/LogInPage.js'
import ProfilePage from './components/ProfilePage.js'

class App extends Component {

constructor(props) {
  super(props);

  this.state = {
    loggedIn: true,
    userID: 1
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


  render() {
    const {loggedIn,userID} = this.state;
    return (
      <div>

        {
          (loggedIn)
            ? <ProfilePage toggleLog ={this.toggleLog} user = {userID} login = {loggedIn}/>
            : <LogInPage login = {loggedIn} />
        }

      </div>
    );
  }

}

export default App;
