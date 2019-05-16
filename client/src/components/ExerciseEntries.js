import React, { Component } from 'react';
import {fetchExercise} from '../service/track-fit'
import {Card,Icon,Button,Modal,Form,Divider,Grid,Segment,Statistic} from 'semantic-ui-react'
import '../App.css'
const moment = require('moment');
const ExerciseOptions = [
  {
    key: 1,
    value: 'burgers',
    text: 'Burger'
  }, {
    key: 2,
    value: 'chickens',
    text: 'Chicken'
  }, {
    key: 3,
    value: 'donuts',
    text: 'Donuts'
  }, {
    key: 4,
    value: 'pizza',
    text: 'Pizza'
  }, {
    key: 5,
    value: 'fries',
    text: 'Fries'
  }, {
    key: 6,
    value: 'salad',
    text: 'Salad'
  }
]
const CalorieOptions = [
  {
    key: 1,
    value: 100,
    text: '100'
  }, {
    key: 2,
    value: 200,
    text: '200'
  }, {
    key: 3,
    value: 300,
    text: '300'
  }, {
    key: 5,
    value: 500,
    text: '500'
  }, {
    key: 6,
    value: 600,
    text: '600'
  }, {
    key: 7,
    value: 700,
    text: '700'
  }
]

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
            <div className ="button-modal">
              <Modal trigger={<Button inverted color="green" size="huge" className ="add-button">Add Food Entry</Button>}>
                <h1 className="modal-style">Add To Your Food Log</h1>
                <Segment>
                  <Grid columns={2} relaxed='very'>
                    <Grid.Column>

                      <Form onSubmit={()=>this.addNewExercise()}>
                        <Form.Field required>
                          <label>Food Consumed</label>
                          <input onChange={this.handleChanges} name="exercise" placeholder='Today, I did some ...' />
                        </Form.Field>
                        <Form.Field required>
                          <label>Calories</label>
                          <input onChange={this.handleChanges} name="calBurned" placeholder='Enter Calories' />
                        </Form.Field>
                        <Form.Field required>
                          <label>Date</label>
                          <input onChange={this.handleChanges} type="datetime-local" name="date" />
                        </Form.Field>
                        <Button inverted color="green" type='submit'>Submit</Button>
                      </Form>

                    </Grid.Column>
                    <Grid.Column>
                      <Form onSubmit={()=>this.addNewFood()}>
                        <Form.Field required>
                          <label>Food Consumed</label>
                          <Form.Select onChange={(e, {value}) => this.handleFood(value)} options={ExerciseOptions} name="food" placeholder='Select Food' />
                        </Form.Field>
                        <Form.Field required>
                          <label>Calories</label>
                          <Form.Select onChange={(e, {value}) => this.handleCal(value)} options={CalorieOptions} name="calGained" placeholder='Select Calories' />
                        </Form.Field>
                        <Form.Field required>
                          <label>Date</label>
                          <input onChange={this.handleChanges} type="datetime-local" name="date" />
                        </Form.Field>
                        <Button inverted color="green" type='submit'>Submit</Button>
                      </Form>
                    </Grid.Column>
                  </Grid>
                  <Divider vertical>OR</Divider>
                </Segment>
              </Modal>
            </div>
          </div>
          <div className="display-right">

          </div>

        </div>
      </div>
    );
  }
}

export default ExerciseEntries;
