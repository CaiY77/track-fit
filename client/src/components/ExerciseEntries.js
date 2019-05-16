import React, { Component } from 'react';
import {fetchExercise,createExercise,deleteExercise,fetchGoal} from '../service/track-fit'
import {Card,Icon,Button,Modal,Form,Divider,Grid,Segment,Statistic} from 'semantic-ui-react'
import '../App.css'
const moment = require('moment');
const ExerciseOptions = [
  {
    key: 1,
    value: 'running',
    text: 'Running'
  }, {
    key: 2,
    value: 'jumpropes',
    text: 'Jump Rope'
  }, {
    key: 3,
    value: 'jumping jacks',
    text: 'Jumping Jacks'
  }, {
    key: 4,
    value: 'push-ups',
    text: 'Push-Ups'
  }, {
    key: 5,
    value: 'sit-ups',
    text: 'Sit-Ups'
  }, {
    key: 6,
    value: 'pull-ups',
    text: 'Pull-Ups'
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

  showEntries = () =>{
    const {allExercise} = this.state;
    const myCards = allExercise.map(entry =>{
      const dateString = entry.date;
      const momentDate = moment(dateString)
      return (<Card key={entry.id} className="my-cards">
        <Card.Content extra>
          <Icon size="big" name="trophy"/>
          <Button onClick={()=>this.deleteExerciseHandle(this.props.user,entry.id)} icon ="trash" className="trash-button"/>
        </Card.Content>
        <Card.Content className ="feed-right">
          <Card.Meta content={momentDate.format("MMMM Do YYYY")}/>
          <Card.Description>You did some {entry.exercise} and burned a whopping {entry.calBurned} calories.</Card.Description>
        </Card.Content>
      </Card>)
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
  deleteExerciseHandle = (user,ex) => {
    deleteExercise(user,ex);
    window.location.reload();
  }
  addNewExercise = async() => {
    const newExercise = {
      exercise: this.state.exercise,
      calBurned: Number.parseInt(this.state.calBurned),
      date: this.state.date
    }
    await createExercise(this.props.user,newExercise);
    window.location.reload();
  }
  handleExercise=(value)=>{
    this.setState({
      exercise: value
    })
  }
  handleCal=(value)=>{
    this.setState({
      calBurned: value
    })
  }

  render() {
    return (
      <div className="display-contain">
        <div className="shade">
          <div className="display-left">
            <div className ="button-modal">
              <Modal trigger={<Button inverted color="green" size="huge" className ="add-button">Add Workout Entry</Button>}>
                <h1 className="modal-style">Add To Your Workout Log</h1>
                <Segment>
                  <Grid columns={2} relaxed='very'>
                    <Grid.Column>

                      <Form onSubmit={()=>this.addNewExercise()}>
                        <Form.Field required>
                          <label>Exercise Name</label>
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
                      <Form onSubmit={()=>this.addNewExercise()}>
                        <Form.Field required>
                          <label>Exercise Name</label>
                          <Form.Select onChange={(e, {value}) => this.handleExercise(value)} options={ExerciseOptions} name="exercise" placeholder='Select Workout' />
                        </Form.Field>
                        <Form.Field required>
                          <label>Calories</label>
                          <Form.Select onChange={(e, {value}) => this.handleCal(value)} options={CalorieOptions} name="calBurned" placeholder='Select Calories' />
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
            <Card.Group itemsPerRow={2} className="card-group">
              {
                (this.state.allExercise.length !== 0)
                  ? this.showEntries()
                  : <h1>No Entries Exist</h1>
              }
            </Card.Group>
          </div>
          <div className="display-right">

          </div>

        </div>
      </div>
    );
  }
}

export default ExerciseEntries;
