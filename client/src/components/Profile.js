import React, { Component } from 'react';
import {Route,Link} from 'react-router-dom';
import {fetchUser} from '../service/track-fit.js';
import { Image, Icon, Card, Item, Header, Button, Input} from 'semantic-ui-react'
import profilePic from '../images/profile1.jpg'
import defaultProfile from '../images/default_pic.jpeg'
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
                 src={defaultProfile}
                 class="ui medium circular image"
                />
                
                <button id="pencil" class="ui button">
                Edit
                <Icon id = "pencilAlt" name="pencil alternate"></Icon></button>
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
                    <div><p id="goalButton">Food Calories</p></div>
                    <div class="ui input"><input type="text" placeholder="Enter your goal" /></div>
                    <div>
                    <Link to="/food-entries">
                      <Button id="go"class="ui button" color='orange'>Go Food</Button>
                    </Link>
                    </div>
                </div>

                <div id="personalGoal">
                    <div><p id="goalButton" >Exercise Calories</p></div>
                    <div class="ui input"><input type="text" placeholder="Enter your goal" /></div>
                    <div>
                      <Link to="/exercise-entries">
                      <Button id="go" class="ui button"color='orange'>Go Exercise</Button>
                      </Link>
                    </div>
                    
                </div>

                {/* <div id="personalGoal">
                <Link to="/food-entries">
                    <h3 class="ui block header blue">
                      Food Entries
                    </h3>
                </Link>
                </div>

                <div id="personalGoal">
                <Link to="/exercise-entries">
                  <h3 class="ui block header blue">
                    Exercise Entries
                  </h3>
                </Link>
                </div> */}
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
