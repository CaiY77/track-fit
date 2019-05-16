import React, { Component } from 'react';
import {fetchUser} from '../service/track-fit.js';
import { Image, Segment, Button, Icon } from 'semantic-ui-react'
import profilePic from '../images/profile1.jpg'
import './Profile.css'

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
    <div id= "profile">
        <div id="title">
            <div>
              <img id="backgroundImg" class="ui fluid image" src={profilePic} />
            </div>
            
            <div id = "profilePic">
                <img style={{width: "200px", height: "200px" }}
                 src="https://react.semantic-ui.com/images/wireframe/square-image.png"
                 class="ui medium circular image"/>
                <Icon id="pencil" name = "pencil alternate"/>
            </div>
        </div>

        
        <div class="ui raised segments">
            <div class="ui segment">
                {this.state.user.name}
                {/* <button class="ui negative button">Update Name</button> */}
            </div>
            <div class="ui segment">
                {this.state.user.email}
                {/* <button class="ui negative button">Update Email</button> */}
            </div>
            <div class="ui segment">
                {this.state.user.password}
                {/* <button class="ui negative button">Update Password</button> */}
            </div>
        </div>
    </div> 
    );
  }
}

export default Profile;
