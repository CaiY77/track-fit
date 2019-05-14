import React, { Component } from 'react';
import {fetchFood} from '../service/track-fit'

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

    showEntries = () =>{
      const {allFood} = this.state;
    }

    getAll = async() => {
      const allFoods = await fetchFood(this.props.user)
      this.setState({
        allFood: allFoods
      });
    }

    render() {
      return (
        <div></div>
      );
    }

  }

  export default FoodEntries;
