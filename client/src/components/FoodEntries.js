import React, { Component } from 'react';
import {fetchFood} from '../service/track-fit'
import {Card, Feed, Icon,Button,Modal,Form} from 'semantic-ui-react'
import '../App.css'
const moment = require('moment');


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

    showEntries = () =>{
      const {allFood} = this.state;
      const myCards = allFood.map(entry =>{
        const dateString = entry.date;
        const momentDate = moment(dateString)
        return (<Feed.Event>
          <Feed.Label><Icon size="big" name="food" className="feed-left"/></Feed.Label>
          <Feed.Content className ="feed-right">
            <Feed.Date content={momentDate.format("YYYY-MM-DD")}/>
            <Feed.Summary>You consumed some {entry.food} and gained a whopping {entry.calGained} calories.</Feed.Summary>
          </Feed.Content>
        </Feed.Event>)
      })

      return myCards;
    }

    render() {
      return (
        <div className="food-contain">
          <Modal trigger={<Button icon="add" size="huge" className="add-button">Add Food Entry</Button>}>
            <Form>
              <Form.Field>
                <label>Food Consumed</label>
                <input placeholder='First Name' />
              </Form.Field>
              <Form.Field>
                <label>calories</label>
                <input type="number" placeholder='Last Name' />
              </Form.Field>
              <Button type='submit'>Submit</Button>
            </Form>
          </Modal>
          <Card>
            <Card.Content className="myFeed">
              <Card.Header>My Food Log</Card.Header>
            </Card.Content>
            <Card.Content>
              <Feed size="large">
                {
                  (this.state.allFood)
                    ? this.showEntries()
                    : <h1>No Entries Exist</h1>
                }
              </Feed>
            </Card.Content>

            </Card>
        </div>
      );
    }

  }

  export default FoodEntries;
