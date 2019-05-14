import React, { Component } from 'react';
import {fetchFood} from '../service/track-fit'
import {Card} from 'semantic-ui-react'

  class FoodEntries extends Component {
    constructor(props) {
      super(props);
      this.state = {
        allFood: [],
        getFood: false
      };
    }

    componentDidMount() {
      this.getAll();
    }

    showEntries = () =>{
      const {allFood} = this.state;
      const myCards = allFood.map(entry =>{
        return (<Card>
          <h1>{entry.food}</h1>
          <h1>{entry.calGained}</h1>
          <h1>{entry.date.substr(0,10)}</h1>
        </Card>)
      })

      return myCards;
    }

    getAll = async() => {
      const allFoods = await fetchFood(this.props.user)
      this.setState({
        allFood: allFoods,
        getFood: true
      });
    }

    render() {
      return (
        <div>

          {
            (this.state.getFood)
              ? this.showEntries()
              : <h1>No Entries Exist</h1>
          }
        </div>
      );
    }

  }

  export default FoodEntries;
