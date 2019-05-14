import React, { Component } from 'react';
import {Route,Link} from 'react-router-dom';
import Profile from './Profile'
import FoodEntries from './FoodEntries'
import ExerciseEntries from './ExerciseEntries'

class ProfilePage extends Component {

  render() {
    return (
      <div>

        <Link to="/">Profile</Link>
        <Link to="/food-entries">Food Entries</Link>
        <Link to="/exercise-entries">Exercise Entries</Link>

        <Route exact path='/'
          render={()=> <Profile
                       />}
        />
        <Route path = '/food-entries'
          render={()=> <FoodEntries
                       />}
        />
        <Route path = '/exercise-entries'
          render={()=> <ExerciseEntries
                       />}
        />
      </div>
    );
  }

}

export default ProfilePage;
