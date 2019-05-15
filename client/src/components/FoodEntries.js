import React, { Component } from 'react';
import {fetchFood} from '../service/track-fit'
import {Card,Icon,Button,Modal,Form,Divider,Grid,Segment} from 'semantic-ui-react'
import '../App.css'
import {deleteFood} from '../service/track-fit'
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
            <Card.Meta content={momentDate.format("YYYY-MM-DD")}/>
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

      console.log(name);
      this.setState({[name]: value})
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
                      <Form>
                        <Form.Field>
                          <label>Food Consumed</label>
                          <input onChange={this.handleChanges} name="food" placeholder='Today, I had some ...' />
                        </Form.Field>
                        <Form.Field>
                          <label>Calories</label>
                          <input onChange={this.handleChanges} name="calGained "type="number" placeholder='Enter Calories' />
                        </Form.Field>
                        <Form.Field>
                          <label>Date</label>
                          <input onChange={this.handleChanges} name="date" placeholder='YYYY-MM-DD' />
                        </Form.Field>
                        <Button type='submit'>Submit</Button>
                      </Form>
                    </Grid.Column>
                    <Grid.Column>

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
