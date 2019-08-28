import React, { Component } from 'react';
import {fetchExercise,createExercise,deleteExercise,fetchGoal} from '../service/track-fit'
import {Card,Icon,Button,Modal,Form,Divider,Grid,Segment,Statistic} from 'semantic-ui-react'
import { CircularProgressbar,buildStyles } from 'react-circular-progressbar';
import '../sass/main.scss'
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
      maxCal: 0,
      render: ""
    }
  }

  componentDidMount=async()=>{
    await this.props.findToken();
    await this.getGoal();
    await this.getAll();
  }

  getGoal = async () => {
    const goal = await fetchGoal(this.props.user)
    const check = goal.calBurned;

    (check)
    ? (this.setState({maxCal: check}))
    : (this.setState({maxCal: null}))
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

  totalCal =()=>{
    const {allExercise} = this.state;
    let total = 0
    allExercise.map(entry=>{
      total+=entry.calBurned
    })
    return total;
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

  deleteExerciseHandle = async (user,ex) => {
    await deleteExercise(user,ex);
    this.getAll();
  }

  addNewExercise = async() => {
    const newExercise = {
      exercise: this.state.exercise,
      calBurned: Number.parseInt(this.state.calBurned),
      date: this.state.date
    }
    await createExercise(this.props.user,newExercise);
    this.getAll();
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
    const {maxCal} = this.state
    return (
      <div className="display-contain-ex">
        <div className="shade-ex">
          <div className="display-left">
            <div className ="button-modal">
              <Modal trigger={<Button color="green" size="huge" className ="add-button">Add Exercise Entry</Button>}>
                <h1 className="modal-style">Add To Your Exercise Log</h1>
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
            <Card.Group stackable itemsPerRow={2} className="card-group">
              {
                this.showEntries()
              }
              {
                (this.state.allExercise.length === 0)
                  ? <Segment><h1>No Entries Exist</h1></Segment>
                  : null
              }
            </Card.Group>
          </div>
          <div className="display-right">
            <CircularProgressbar
              styles={buildStyles({textSize: '16px'})}
              className="progress"
              value={this.totalCal()/maxCal * 100}
              text={
                (this.totalCal()/maxCal * 100)
                  ?((this.totalCal()/maxCal * 100 > 100)
                    ? `Complete!`
                    :`~ ${Math.floor(this.totalCal()/maxCal * 100)} %`)
                  : 'N/A'
              }
            />
            <Divider section className="divide"/>
            <Statistic className ="stats">
              <Statistic.Label>Burned</Statistic.Label>
              <Statistic.Value>{this.totalCal()}</Statistic.Value>
              <Statistic.Label>Calories So Far</Statistic.Label>
            </Statistic>
            <Divider section className="divide"/>

            {
              (maxCal)
                ? (<Statistic className ="stats">
                  <Statistic.Label>You Set a </Statistic.Label>
                  <Statistic.Value>{maxCal}</Statistic.Value>
                  <Statistic.Label>Calorie Goal</Statistic.Label>
                </Statistic>)
                : (<Statistic className ="stats">
                  <Statistic.Label>-----</Statistic.Label>
                  <Statistic.Value>Not Set</Statistic.Value>
                  <Statistic.Label>-----</Statistic.Label>
                </Statistic>)
            }

            <Divider section className="divide"/>
            <Statistic className ="stats">
              <Statistic.Label>You Have a Total of</Statistic.Label>
              <Statistic.Value>
                {(this.state.allExercise)
                  ?this.state.allExercise.length
                  : '0'
                }
              </Statistic.Value>
              <Statistic.Label>ENTRIES</Statistic.Label>
            </Statistic>


          </div>

        </div>
      </div>
    );
  }
}

export default ExerciseEntries;
