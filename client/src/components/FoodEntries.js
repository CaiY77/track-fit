import React, { Component } from 'react';
import {fetchFood,createFood,fetchGoal,deleteFood} from '../service/track-fit'
import {Card,Icon,Button,Modal,Form,Divider,Grid,Segment,Statistic} from 'semantic-ui-react'
import '../App.css'
import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
const moment = require('moment');
const FoodOptions = [
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

  class FoodEntries extends Component {
    constructor(props) {
      super(props);
      this.state = {
        allFood: [],
        maxCal: 0
      };
    }

    componentDidMount() {
      this.getAll();
      this.getGoal();
    }

    getGoal = async () => {
      const goal = await fetchGoal(this.props.user)

    this.setState({
      maxCal: goal.calIntake
    });
    }

    getAll = async () => {
      const allFoods = await fetchFood(this.props.user)
        this.setState({
          allFood: allFoods
        });
    }

    deleteFoodHandle = (user,food) => {
      deleteFood(user,food);
      window.location.reload();
    }

    showEntries = () =>{
      const {allFood} = this.state;
      const myCards = allFood.map(entry =>{
        const dateString = entry.date;
        const momentDate = moment(dateString)
        return (<Card key={entry.id} className="my-cards">
          <Card.Content extra>
            <Icon size="big" name="food"/>
            <Button onClick={()=>this.deleteFoodHandle(this.props.user,entry.id)} icon ="trash" className="trash-button"/>
          </Card.Content>
          <Card.Content className ="feed-right">
            <Card.Meta content={momentDate.format("MMMM Do YYYY")}/>
            <Card.Description>You consumed some {entry.food} and gained a whopping {entry.calGained} calories.</Card.Description>
          </Card.Content>
        </Card>)
      })
      return myCards;
    }

    totalCal =()=>{
      const {allFood} = this.state;
      let total = 0
      allFood.map(entry=>{
        total+=entry.calGained
      })
      return total;
    }

    handleChanges =(event)=>{
      const element = event.target
      const name = element.name
      const value = element.value
      this.setState({[name]: value})
    }
    handleFood=(value)=>{
      this.setState({
        food: value
      })
    }
    handleCal=(value)=>{
      this.setState({
        calGained: value
      })
    }

    addNewFood = async() => {
      const newFood = {
        food: this.state.food,
        calGained: Number.parseInt(this.state.calGained),
        date: this.state.date
      }
      await createFood(this.props.user,newFood);
      window.location.reload();
    }

    render() {
      const {maxCal} = this.state
      return (

        <div className="display-contain">
          <div className="shade">
            <div className="display-left">
              <div className="button-modal">
                <Modal trigger={<Button color="green" size="huge" className ="add-button">Add Food Entry</Button>}>
                  <h1 className="modal-style">Add To Your Food Log</h1>
                  <Segment>
                    <Grid columns={2} relaxed='very'>
                      <Grid.Column>

                        <Form onSubmit={()=>this.addNewFood()}>
                          <Form.Field required>
                            <label>Food Consumed</label>
                            <input onChange={this.handleChanges} name="food" placeholder='Today, I had some ...' />
                          </Form.Field>
                          <Form.Field required>
                            <label>Calories</label>
                            <input onChange={this.handleChanges} name="calGained" placeholder='Enter Calories' />
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
                            <Form.Select onChange={(e, {value}) => this.handleFood(value)} options={FoodOptions} name="food" placeholder='Select Food' />
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
              <Card.Group itemsPerRow={2} className="card-group">
                {
                  (this.state.allFood.length !== 0)
                    ? this.showEntries()
                    : <h1>No Entries Exist</h1>
                }
              </Card.Group>
            </div>
            <div className="display-right">
              <CircularProgressbar
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
                <Statistic.Label>Consumed</Statistic.Label>
                <Statistic.Value>{this.totalCal()}</Statistic.Value>
                <Statistic.Label>Calories So Far</Statistic.Label>
              </Statistic>
              <Divider section className="divide"/>
              {
                (maxCal)
                  ? (<Statistic className ="stats">
                    <Statistic.Label>You Set a </Statistic.Label>
                    <Statistic.Value>{maxCal}</Statistic.Value>
                    <Statistic.Label>Calorie Limit</Statistic.Label>
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
                  {(this.state.allFood)
                    ?this.state.allFood.length
                    : '0'
                  }
                </Statistic.Value>
                <Statistic.Label>ENTRIES</Statistic.Label>
              </Statistic>


            </div>
          </div>
        </div>);
    }

  }

  export default FoodEntries;
