import React, { Component } from 'react';
import {Route,Link} from 'react-router-dom';
import {fetchUser} from '../service/track-fit.js';
import { Image, Icon, Card, Item, Header } from 'semantic-ui-react'
import profilePic from '../images/profile1.jpg'
import './Profile.css'
const axios = require('axios')

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

  // getProfilePhoto = async()=>{
  //   try{
  //     const response = await axios.get('https://randomuser.me/api/')
  //     console.log(response.data.results[0].picture.large);
  //   }
  //   catch(e){
  //     console.log(e)
  //   }
  // }


  render() {
    // console.log(this.getProfilePhoto());
    
    return (
    <div id= "profile">
        <div id="title">
            <div>
              <img id="backgroundImg" class="ui fluid image" src={profilePic} />
            </div>
            <div id = "profilePic">
                <img 
                 style={{width: "200px", height: "200px" }}
                 src="https://randomuser.me/api/portraits/women/26.jpg"
                 class="ui medium circular image"
                />
                <Icon id="pencil" name = "pencil alternate"/>
            </div>
        </div>

        <div id="content">
        <div id = "personalInfo" class="ui link card">
            <div class="content">
              <div class="header">{this.state.user.name}</div>
              <div id="emailAddress" class="meta">{this.state.user.email}</div>
            <div id="quotes" class="description">
              <p>
              <span>Today's quotes:</span>
              <span>
              Fitness is not about being better than someone else, it’s about being better than you used to be.
              </span>
              </p>
            </div>
          </div>
        </div>

        <div id = "personalInfo" class="ui link card">
            <div class="content">
                <div class="header">Personal Goal</div>
           
                <div id="personalGoal">
                    <h3 class="ui block header">
                    <Link to="/food-entries">Food Entries</Link>
                    </h3>
                </div>

                <div id="personalGoal">
                    <h3 class="ui block header">
                    <Link to="/exercise-entries">Exercise Entries</Link>
                    </h3>
                </div>
              </div>
        </div>
        </div>

        <Route path = '/food-entries'/>
        <Route path = '/exercise-entries'/>
        
    </div> 
    );
  }
}

export default Profile;
