import React, { Component } from 'react';
import {Route,Link} from 'react-router-dom';
import Profile from './Profile'
import FoodEntries from './FoodEntries'
import ExerciseEntries from './ExerciseEntries'
import {Menu} from 'semantic-ui-react'
import logo from '../images/track-fit-TF.jpg'
import '../App.css'

class ProfilePage extends Component {

  constructor(props) {
    super(props);

  }

  render() {
    const {user} = this.props;
    return (
      <div>
        <nav class="ui three item menu">
          <img class="item" className="logo" src={logo} />
          <div class="right menu">
            <Link class="active item" to="/">Profile</Link>
            <Link class="item" to="/food-entries">Food Entries</Link>
            <Link class="item" to="/exercise-entries">Exercise Entries</Link>
          </div>
        </nav>
        <Route exact path='/'
          render={()=> <Profile
            user ={user}
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
