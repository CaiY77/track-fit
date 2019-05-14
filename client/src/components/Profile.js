import React, { Component } from 'react'
import moment from 'moment'
import Calendar from 'react-calendar'

class Profile extends Component {
  state = {
    dateContext: moment(),
    today: moment()
  }

  weekdays = moment.weekdays()
  weekdaysShort = moment.weekdaysShort() 
  months = moment.months()


  onChange = date => this.setState({ date })

  render() {
    return (
      <div>
        <Calendar
          onChange={this.onChange}
          value={this.state.date}

          onClickWeekNumber={(weekNumber, date) => {
          console.log('Clicked week number', weekNumber, date);
        }}
        />
      </div>
    )
  }
}


export default Profile;