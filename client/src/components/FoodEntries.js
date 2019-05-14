import React, { Component } from 'react';
import {fetchFood} from '../service/track-fit'
import {Card, Feed, Icon} from 'semantic-ui-react'
import '../App.css'
const moment = require('moment');


  class FoodEntries extends Component {
    constructor(props) {
      super(props);
      this.state = {
        allFood: [],
        hasFood: false
      };
    }

    componentDidMount() {
      this.getAll();
    }

    getAll = async() => {
      const allFoods = await fetchFood(this.props.user)

      if (allFoods.length != 0){
        this.setState({
          allFood: allFoods,
          hasFood: true
        });
      } else {
        this.setState({
          allFood: [],
          hasFood: false
        });
      }
    }

    showEntries = () =>{
      const {allFood} = this.state;
      const myCards = allFood.map(entry =>{
        const dateString = entry.date;
        const momentDate = moment(dateString)
        return (<Feed.Event className="feed-box">
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
        <div>
          <Card>

            <Card.Content className="myFeed">
              <Card.Header>My Food Log</Card.Header>
            </Card.Content>
            <Card.Content>
              <Feed>
                {
                  (this.state.hasFood)
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
