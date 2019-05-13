import React, { Component } from 'react';
import {fetchUser,createUser} from './service/track-fit'

class App extends Component {

componentDidMount() {
  this.testing();
}

testing = async() => {
  // const result = await fetchUser();
  // console.log(result);
  const newUser = await createUser();
  console.log(newUser);
}

  render() {
    return (
      <div>
        <h1>Hello</h1>
      </div>
    );
  }

}

export default App;
