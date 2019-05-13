import React, { Component } from 'react';
import {fetchUser,createUser,fetchFood,deleteFood,createExercise,updateExercise,updateFood} from './service/track-fit'
import LogInPage from './components/LogInPage.js'
import ProfilePage from './components/ProfilePage.js'

class App extends Component {

constructor(props) {
  super(props);
  this.state = {
    loggedIn: true
  };
}

componentDidMount() {
  document.title = 'Track My Fitness';
  this.testing();
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
    const {loggedIn} = this.state;
    return (
      <div>

        {
          (loggedIn)
            ? <ProfilePage />
            : <LogInPage />
        }

      </div>
    );
  }

}

export default App;
