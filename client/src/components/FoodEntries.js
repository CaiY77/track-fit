import React, { Component } from 'react';
import {fetchFood} from '../service/track-fit'

import {fetchFood} from '../service/track-fit'

class FoodEntries extends Component {

  componentDidMount() {
    this.getAll();
<<<<<<< HEAD
  }

  getAll =()=>{
    const allFood = fetchFood(this.props.user)
    console.log(allFood);
  }

  render() {
    return (
      <div>FoodEntries</div>
    );
=======
>>>>>>> cd684f76657dfe4330ac058d55c7319685a9335a
  }

  getAll =()=>{
    const allFood = fetchFood(this.props.user)
    console.log(allFood);
  }

