import React, { Component } from 'react';
import {fetchExercise} from '../service/track-fit'
import {Card} from 'semantic-ui-react'
const moment = require('moment');

class ExerciseEntries extends Component {
  constructor(props){
    super(props)
    this.state={
      allExercise:[],
      getExercise:false,
    }
  }

  componentDidMount(){
      this.getAll();
  }

  showExercise=()=>{
    const {allExercise} = this.state;
    const myCards = allExercise.map(exercise =>{
      const dateString = exercise.date;
      // const dateAnswer = new Date(dateString)
      const momentDate = moment(dateString)
      return (
        <Card>
          <h1>{exercise.exercise}</h1>
          <h1>{exercise.calBurned}</h1>
          <h1>{momentDate.format("YYYY-MM-DD")}</h1>
        </Card>
      )
    })
    return myCards;
  }

  getAll = async()=>{
    const allExercise = await fetchExercise(this.props.user)
    this.setState({
      allExercise: allExercise,
      getExercise: true
    });
  }

  render() {
    return (
      (this.state.getExercise)
      ?this.showExercise()
      :<h1>No Exercise Entries Exist</h1>
    );
  }
}

export default ExerciseEntries;
