import React, { Component } from 'react';
import { Route, Link } from 'react-router-dom';
import Profile from './Profile'
import FoodEntries from './FoodEntries'
import ExerciseEntries from './ExerciseEntries'
import { Button } from 'semantic-ui-react'
import logo from '../images/track-fit-TF.jpg'
import '../sass/main.scss'

class ProfilePage extends Component {
  constructor() {
    super()
    this.state = {
      hasError: false,
      width: window.innerWidth,
    }
  }

  componentWillMount() {
    window.addEventListener('resize', this.handleWindowSizeChange);
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.handleWindowSizeChange);
  }

  handleWindowSizeChange = () => {
    this.setState({ width: window.innerWidth });
  };

  logErrorToMyService = async () => {
    await this.setState({
      hasError: true
    })
  }

  render() {
    const { user, userInfo, findToken } = this.props;
    const { width } = this.state;
    const isMobile = width <= 500;
    if (isMobile) {
      return (
        <div>
          <nav className="ui stackable four borderless item menu">
            <img className="item logo-style" alt="TF" src={logo} />
            <div className="right menu right-style">
              <Link className="item item-style" to="/">Profile</Link>
              <Link className="item item-style" to="/food-entries">Food Entries</Link>
              <Link className="item item-style" to="/exercise-entries">Exercise Entries</Link>
              <Link className="item item-style" to='/'><Button onClick={this.props.toggleLog} color='blue'>Sign Out</Button></Link>
            </div>
          </nav>
          <Route exact path='/'
            render={() => <Profile
              user={user}
              userInfo={userInfo}
              findToken={findToken}
            />}
          />
          <Route path='/food-entries'
            render={() => <FoodEntries
              user={user}
              findToken={findToken}
            />}
          />
          <Route path='/exercise-entries'
            render={() => <ExerciseEntries
              user={user}
              findToken={findToken}
            />}
          />
        </div>
      )
    } else {
      return (
        <div>
          <nav className="ui stackable four borderless item menu">
            <img className="item logo-style" alt="TF" src={logo} />
            <div className="right menu right-style">
              <Link className="item item-style" to="/">Profile</Link>
              <Link className="item item-style" to="/food-entries">Food Entries</Link>
              <Link className="item item-style" to="/exercise-entries">Exercise Entries</Link>
              <Link className="item item-style" to='/'><Button onClick={this.props.toggleLog} color='blue'>Sign Out</Button></Link>
            </div>
          </nav>
          <Route exact path='/'
            render={() => <Profile
              user={user}
              userInfo={userInfo}
              findToken={findToken}
            />}
          />
          <Route path='/food-entries'
            render={() => <FoodEntries
              user={user}
              findToken={findToken}
            />}
          />
          <Route path='/exercise-entries'
            render={() => <ExerciseEntries
              user={user}
              findToken={findToken}
            />}
          />
        </div>
      );
    }
  }
}

export default ProfilePage;
