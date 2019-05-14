import axios from 'axios'
const URL = 'http://localhost:3001'

const api = axios.create({
  baseURL: `${URL}/user`
})
// get a user
export const fetchUser = async () => {
  try {
    const resp = await api.get(`/1`)
    return resp.data;
  } catch (e) {
    console.log(e)
  }
}

const newUser = {
  name: 'lalala',
  email: 'lalala@gmail.com',
  password: 'helloworld'
}

// create new user
export const createUser = async()=>{
   try{
      const res = await api.post('/create', newUser)
      return res.data;

   }
   catch(e){
     console.log(e)
   }
}


const newFood = {
  food: 'chips',
  calGained: 5000,
  date: '2019-07-07'
}


export const fetchFood = async()=>{
  try{
    const res = await
  }
}


// create a food
export const fetchFood = async () => {
  try {
    const resp = await api.post(`/1/create-food`, newFood )
    return resp.data;

  } catch (e) {
    console.log(e)
  }
}

// update food
const updateFooood = {
  food: 'potatoooooosss'
}

export const updateFood = async () => {
  try {
    const res = await api.put(`/update-food/8`, updateFooood)
  }
  catch(e){
    console.log(e)
  }
}


//delete a food
export const deleteFood = async ()=>{
  try{
    const res = await api.delete(`/1/food-entry/1`)
    return res.data;
  }
  catch(e){
    console.log(e)
  }
}

// hardcode new excersise
const newExercise = {
  exercise: `walking`,
  calBurned: 5,
  date: '2019-05-05'
}


// create excersise
export const createExercise = async () => {
  try {
    const res = await api.post(`/1/create-exercise`, newExercise)
    return res.data;

  } catch (e) {
    console.log(e)
  }
}

//update exercise
const updateEx = {
  exercise : "die",
}

export const updateExercise = async()=>{
  try{
    const res = await api.put(`/update-exercise/3`,updateEx);

  }
  catch(e){
    console.log(e)
  }
}



//delete a exercise
export const deleteExercise = async ()=>{
  try{
    const res = await api.delete(`/1/exercise-entry/1`)
    return res.data;
  }
  catch(e){
    console.log(e)
  }
}
