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
        return (<Card className="my-cards">
          <Card.Content extra><Icon size="big" name="food" className="card-icon"/></Card.Content>
          <Card.Content className ="feed-right">
            <Card.Meta content={momentDate.format("YYYY-MM-DD")}/>
            <Card.Description>You consumed some {entry.food} and gained a whopping {entry.calGained} calories.</Card.Description>
          </Card.Content>
        </Card>)
      })

      return myCards;
    }

    render() {
      return (

        <div className="display-contain">
          <div className="display-left">
            <div className="button-modal">
              <Modal trigger={<Button inverted color="green" icon="add" size="huge" className ="add-button">Add Food Entry</Button>}>
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
            </div>
            <Card.Group itemsPerRow={2} className="card-group">
              {
                (this.state.allFood)
                  ? this.showEntries()
                  : <Card><Card.Description>No Entries Exist</Card.Description></Card>
              }
            </Card.Group>
          </div>
          <div className="display-right"></div>

        </div>

      );
    }

  }

  export default FoodEntries;
