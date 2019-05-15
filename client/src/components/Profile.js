import React, { Component } from 'react';
import {fetchUser} from '../service/track-fit.js';

class Profile extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user:[]
    };
  }

  componentDidMount(){
    this.findUser();
  }

  findUser = async()=>{
    const myUser = await fetchUser(this.props.user);
    console.log(myUser);
    this.setState({
      user: myUser
    });
  } 
  
  render() {
    // console.log(this.props.user);

    return (
      <div>
        <h1>Profile</h1>
        <p>
          {this.state.user.name}
        </p>
      </div> 
    );
  }
}

export default Profile;
