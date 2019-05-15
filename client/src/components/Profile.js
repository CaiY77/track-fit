import React, { Component } from 'react';
import {fetchUser} from '../service/track-fit.js';

class Profile extends Component {
  constructor(props) {
    super(props);
    // this.state = {
    //   user:[]
    // };
  }

  // componentDidMount(){
  //   //this.findUser();
  // }

  // findUser = async()=>{
  //   const myUser = await fetchUser(this.props.user);
  //   console.log(myUser);
  //   this.setState({
  //     user: myUser
  //   });
  // } 
  
  render() {
    // console.log(this.props.user);
    const {userInfo} = this.props
    console.log(userInfo);
    const render = this.props.userInfo !== null ? <p>{this.props.userInfo.name}</p> : null
    return (
      <div>
        <h1>Profile</h1>
        {render}
      </div> 
    );
  }
}

export default Profile;
