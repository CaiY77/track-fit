import React, { Component } from 'react';
import {Route,Link} from 'react-router-dom';
import {fetchUser,createGoal,fetchGoal} from '../service/track-fit.js';
import {Image, Icon, Card, Item, Header, Button, Input,Form} from 'semantic-ui-react'
import profilePic from '../images/profile1.jpg'
import defaultProfile from '../images/default_pic.jpeg'
import './Profile.css'
const axios = require('axios')

class Profile extends Component {
  constructor(props) {
    super(props);
    this.state = {
<<<<<<< HEAD
      getGoal: false,
      goal:[],
      user:[],

      file: '',
      picture: '',
      preview: false
=======
      hasGoal: null,
      user:[]
>>>>>>> 340dfbce479c9f78f31a12a6d8efc2d0331530f0
    };
  }

  componentDidMount = async()=>{
  await this.props.findToken();
  await this.findUser();
  await this.getGoaldb();
  }

  getGoaldb = async () => {
    const goal = await fetchGoal(this.props.user);
    const check = goal.calBurned;
    (check)
    ? (this.setState({hasGoal: true}))
    : (this.setState({hasGoal: false}))
  }

  findUser = async()=>{
    const myUser = await fetchUser(this.props.user);
    this.setState({
      user: myUser
    });
  }

  onUpdateChange = (event) =>{
    const element = event.target
    const name = element.name
    const value = element.value
    this.setState({[name]: value})
  }

  getGoal = async() =>{
      let goal = {
        calBurned: Number.parseInt(this.state.FoodGoal),
        calIntake: Number.parseInt(this.state.ExerciseGoal)
      }
      const newGoal = await createGoal(this.props.user, goal)
      this.getGoaldb();
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

  handleImageChange(event) {
    event.preventDefault();

    let reader = new FileReader();
    let file = event.target.files[0];

    reader.onloadend = () => {
        this.setState({
            file: file,
            picture: reader.result,
            preview: true
        });
    }


  render() {
    return (
    <div id= "profile">
      <div id="title">
        <div>
          <img id="backgroundImg" className="ui fluid image" src={profilePic} />
        </div>
        <div id = "profilePic">
          <img
            style={{width: "200px", height: "200px" }}
            src={defaultProfile}
            class="ui medium circular image"
          />

          <input 
            ref={fileInput=> this.fileInput = fileInput} 
            style={{display:'none'}}
            type='file'
            onChange={event => this.handleImageChange(event)}
          />

          <button 
            onClick={()=>this.fileInput.click()}
            className="ui bottom attached button" 
            tabIndex="0"

            id="pencil" >
            Edit
            <Icon 
              id = "pencilAlt" 
              name="pencil alternate"
            ></Icon>
          </button>
        </div>
      </div>

      <div id="content">
        <div id = "personalInfo" className="ui link card">
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


            {
              (this.state.hasGoal)
                ?
                  (
                    <Form onSubmit={()=>this.updateGoal()}>
                      <Form.Field required>
                        <label>My Food Goal</label>
                        <input onChange={this.onUpdateChange} name="FoodGoal" placeholder='Calorie Limit' />
                      </Form.Field>
                      <Form.Field required>
                        <label>My Exercise Goal</label>
                        <input onChange={this.onUpdateChange} name="ExerciseGoal" placeholder='Exercise Goal' />
                      </Form.Field>
                      <Button color="orange" type='submit'>Update Goal</Button>
                    </Form>
                  )
                :
                (
                  <Form onSubmit={()=>this.getGoal()}>
                    <Form.Field required>
                      <label>My Food Goal</label>
                      <input onChange={this.onUpdateChange} name="FoodGoal" placeholder='Calorie Limit' />
                    </Form.Field>
                    <Form.Field required>
                      <label>My Exercise Goal</label>
                      <input onChange={this.onUpdateChange} name="ExerciseGoal" placeholder='Exercise Goal' />
                    </Form.Field>
                    <Button color="orange" type='submit'>Create Goal</Button>
                  </Form>
                )

            }
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
