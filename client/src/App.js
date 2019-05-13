import React, { Component } from 'react';
import {fetchUser,createUser,fetchFood,deleteFood} from './service/track-fit'

class App extends Component {
constructor(props) {
  super(props);
  this.state = {
    loggedIn: true
  };
}
componentDidMount() {
  this.testing();
}

testing = async() => {
  // const result = await fetchUser();
  // console.log(result);
  // const newUser = await createUser();
  // console.log(newUser);
  // const foodGet = await fetchFood();
  // console.log(foodGet)
  await deleteFood();

}

  render() {
    const {loggedIn} = this.state;
    return (
      <div>
        {
          (loggedIn)? <h1>Profile Page </h1>
          : <h1>LogIn Page</h1>
        }
      </div>
    );
  }

}

export default App;
