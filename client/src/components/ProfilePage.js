import React, { Component } from 'react';
import {Route,Link} from 'react-router-dom';

class ProfilePage extends Component {

  render() {
    return (
      <div>

        <Link to="/">Profile</Link>
        <Link to="/food-entries">Profile</Link>
        <Link to="/exercise-entries">Profile</Link>

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
