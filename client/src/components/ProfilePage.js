import React, { Component } from 'react';
import {Route,Link} from 'react-router-dom';
import Profile from './Profile'
import FoodEntries from './FoodEntries'
import ExerciseEntries from './ExerciseEntries'

class ProfilePage extends Component {

  render() {
    const {user} = this.props;
    return (
      <div>

        <Link to="/">Profile</Link>
        <Link to="/food-entries">Food Entries</Link>
        <Link to="/exercise-entries">Exercise Entries</Link>

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
