import React, { Component } from 'react';
import {fetchUser} from '../service/track-fit.js';
import { Image, Segment, Button } from 'semantic-ui-react'

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
    <div class= "profile">
        <div>
          <h1>Welcome Back {this.state.user.name}!</h1>
        </div>

        <div class = "profilePic">
            <div>
                <h2>Profile</h2>
            </div>
            <div>
               <img style={{width: "200px", height: "auto" }}
                    src="https://react.semantic-ui.com/images/wireframe/square-image.png"
                    class="ui medium circular image"/>
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
