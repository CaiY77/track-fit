import React, { Component } from 'react';
import {fetchFood} from '../service/track-fit'

import {fetchFood} from '../service/track-fit'

class FoodEntries extends Component {

  componentDidMount() {
    this.getAll();
  }

  getAll =()=>{
    const allFood = fetchFood(this.props.user)
    console.log(allFood);
  }

  render() {
    return (
      <div>FoodEntries</div>
    );
  }

  getAll =()=>{
    const allFood = fetchFood(this.props.user)
    console.log(allFood);
  }
