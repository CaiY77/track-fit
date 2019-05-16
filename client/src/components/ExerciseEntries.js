import React, { Component } from 'react';
import {fetchExercise} from '../service/track-fit'
import {Card} from 'semantic-ui-react'
import '../App.css'
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
          <h1>{momentDate.format("MMMM Do YYYY")}</h1>
        </Card>
      )
    })
    return myCards;
  }
  
  handleChanges =(event)=>{
    const element = event.target
    const name = element.name
    const value = element.value
    this.setState({[name]: value})
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
      <div className="display-contain">
        <div className="shade">
          <div className="display-left">

          </div>
          <div className="display-right">

          </div>

        </div>
      </div>
    );
  }
}

export default ExerciseEntries;
