import React, { Component } from 'react';
import LogInPage from './components/LogInPage.js'
import ProfilePage from './components/ProfilePage.js'
import { getProfile } from './service/apiServices.js'
import tokenService from './service/tokenServices.js'
import decode from 'jwt-decode'


class App extends Component {

  constructor(props) {
    super(props);

    this.state = {
      loggedIn: false,
      userInfo: null,
      userID: ''
    }

  }

  // does the trick, but it doesn't assign the id of the user to the food
  // it also can't add the food 

  // try decoding the jwt and setting user id to state.
  // component did mount just check if there's a token or not.


  // add all this stuff to a function

  componentDidMount = async () => {
    let token = await tokenService.fetchToken()
    if (token) {
      document.title = 'Track My Fitness'
      const userInfo = {}
      const data = decode(token)
      userInfo.name = data.name
      await this.setCurrentUserInfo(userInfo)
      await this.toggleLog()
      // this.setState({
      //   userID: data.id
      // })
      console.log(data, "data")
      console.log(token, "tok")
    }
  }



  setCurrentUserInfo = async (userInfo) => {
    this.setState({
      userInfo: userInfo
    })
  }


  toggleLog = async () => {
    const loggedIn = !this.state.loggedIn
    const userInfo = loggedIn ? this.state.userInfo : null
    const userID = loggedIn ? this.state.userInfo.id : ''
    if (!loggedIn) { localStorage.clear() }



    this.setState({
      loggedIn: loggedIn,
      userInfo: userInfo,
      userID: userID,
    });
  }


  render() {
    const { loggedIn, userID, userInfo } = this.state;
    return (
      <div>

        {
          (loggedIn)
            ? <ProfilePage toggleLog={this.toggleLog} user={userID} userInfo={userInfo} login={loggedIn} />
            : <LogInPage login={loggedIn} toggleLog={this.toggleLog} setCurrentUserInfo={this.setCurrentUserInfo} />
        }

      </div>
    );
  }

}

export default App;
