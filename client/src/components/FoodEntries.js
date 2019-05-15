import React, { Component } from 'react';
import {fetchFood,createFood} from '../service/track-fit'
import {Card,Icon,Button,Modal,Form,Divider,Grid,Segment} from 'semantic-ui-react'
import '../App.css'
import {deleteFood} from '../service/track-fit'
const moment = require('moment');
const FoodOptions = [
  {
    key: 1,
    value: 'burgers',
    text: 'Burgers'
  }
]
const CalorieOptions = [
  {
    key: 1,
    value: 20000,
    text: '20000'
  }
]

  class FoodEntries extends Component {
    constructor(props) {
      super(props);
      this.state = {
        allFood: []
      };
    }

    componentDidMount() {
      this.getAll();
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

    addNewFood = () => {
      const newFood = {
        food: this.state.food,
        calGained: Number.parseInt(this.state.calGained),
        date: this.state.date
      }
      createFood(this.props.user,newFood);
      window.location.reload();
    }

    render() {
      return (

        <div className="display-contain">
          <div className="display-left">
            <div className="button-modal">
              <Modal trigger={<Button inverted color="green" size="huge" className ="add-button">Add Food Entry</Button>}>
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
          <div className="display-right"></div>

        </div>

      );
    }

  }

  export default FoodEntries;
