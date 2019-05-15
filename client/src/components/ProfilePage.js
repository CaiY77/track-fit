import React, { Component } from 'react';
import {Route,Link} from 'react-router-dom';
import Profile from './Profile'
import FoodEntries from './FoodEntries'
import ExerciseEntries from './ExerciseEntries'
import {Button} from 'semantic-ui-react'
import logo from '../images/track-fit-TF.jpg'
import '../App.css'

class ProfilePage extends Component {

  render() {
    const {user, userInfo} = this.props;
    return (
      <div>

        <nav className="ui four borderless item menu">

          <img className="item logo-style" alt="TF" src={logo} />

          <div className="right menu right-style">
            <Link className="item item-style" to="/">Profile</Link>
            <Link className="item item-style" to="/food-entries">Food Entries</Link>
            <Link className="item item-style" to="/exercise-entries">Exercise Entries</Link>
            <Button onClick={this.props.toggleLog} color='blue' className="item button-style" >Sign Out</Button>
          </div>

        </nav>

        <Route exact path='/'
          render={()=> <Profile
            user ={user}
            userInfo = {userInfo}
                       />}
        />
        <Route path = '/food-entries'
          render={()=> <FoodEntries
            user ={user}
                       />}
        />
        <Route path = '/exercise-entries'
          render={()=> <ExerciseEntries
            user ={user}
                       />}
        />

      </div>
    );
  }

}

export default ProfilePage;
