<img width="852" alt="Screen Shot 2019-05-11 at 8 07 53 PM" src="https://media.git.generalassemb.ly/user/19642/files/08852b00-7596-11e9-86a2-02210ed9edf2">

## Track Fit
Welcome to Track Fitness! This app was built with the idea to optimize efficiency in journaling workout entries and calorie counting. Sometimes, simpler is better and this app gets the job done. With a sign up and log in feature, the app can keep track of unique user entries and store their information in our database. Track fit allows users to set and update their own goals. This means that removing and adding entries can help keep track of how far or close you are to the set goal. Tracking your exercise is all the rage these days so we decided to take a stab at creating our own fitness app!


### Contributors

[Ming Jing Tang](https://github.com/mingjingtang)

[Kahil Nayton](https://github.com/kahilnayton)

## React

Track-Fit is a full-stack React application that uses JSX/JS/ES6, HTML, CSS, Sequelize, PostgreSQL and Express. This application also takes advantage of some external libraries such as:

* Axios
* React-Router-Dom
* Semantic-UI-React
* React-Circular-Progressbar
* Passport | Passport-Local | Passport-JWT
* JsonWebToken | JWT-Decode | Bcrypt
* Nodemon
* morgan
* Body-Parser


## Minimum Viable Product

* Render and Store a single user only
* Have the ability to add/delete different exercise/food to their personal log.
* Track their progress with respect to their set goal.

## Additional features

* User Authentication
* Log In | Sign Up feature with gives access to multiple users
* Make use of local storage to prevent user information to disappear on reset.

## Sneak Peak

```JSX
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
```

## Wireframes and Ideas

<img width="852" alt="wireframe" src="https://user-images.githubusercontent.com/29616227/57899302-819cb080-782a-11e9-9ff3-6d30d217173f.JPG">

<img width="635" alt="Screen Shot 2019-05-13 at 11 31 43 AM" src="https://user-images.githubusercontent.com/33525692/57900045-59fb1780-782d-11e9-93ea-c30f8909901d.png">

## Database Table Model

<img width="749" alt="Screen Shot 2019-05-16 at 11 00 06 PM" src="https://user-images.githubusercontent.com/33525692/57900327-659b0e00-782e-11e9-860d-fee82b245029.png">

## Screen Shots

### Log In | Sign Up Page

<img width="1440" alt="Screen Shot 2019-05-16 at 11 11 25 PM" src="https://user-images.githubusercontent.com/33525692/57900755-2968ad00-7830-11e9-96ea-67607710a883.png">

### Profile Page

<img width="1440" alt="Screen Shot 2019-05-16 at 11 11 45 PM" src="https://user-images.githubusercontent.com/33525692/57900757-2a99da00-7830-11e9-98aa-322b629aef21.png">

### Food Entries Page

<img width="1440" alt="Screen Shot 2019-05-16 at 11 12 09 PM" src="https://user-images.githubusercontent.com/33525692/57900760-2bcb0700-7830-11e9-91a7-5d15c13644cc.png">

### Exercise Entries Page

<img width="1440" alt="Screen Shot 2019-05-16 at 11 12 23 PM" src="https://user-images.githubusercontent.com/33525692/57900767-308fbb00-7830-11e9-8dfd-2ec43ae4ef04.png">
