import React, { Component } from 'react';
import {fetchUser,createUser,fetchFood,deleteFood,createExercise,updateExercise,updateFood} from './service/track-fit'
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
  // this.testing();
}

testing = async() => {
  // const result = await fetchUser();
  // console.log(result);
  // const newUser = await createUser();
  // console.log(newUser);
  // const foodGet = await fetchFood();
  // console.log(foodGet)
  // await deleteFood();
  const newEx = await updateFood();

}

  render() {
    const {loggedIn,userID} = this.state;
    return (
      <div>

        {
          (loggedIn)
            ? <ProfilePage user = {userID} />
            : <LogInPage login = 
            {loggedIn} />
        }

      </div>
    );
  }

}

export default App;
